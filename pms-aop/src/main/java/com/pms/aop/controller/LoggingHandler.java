package com.pms.aop.controller;

import java.io.IOException;
import java.time.Instant;
import java.util.logging.Logger;
import org.apache.commons.lang3.builder.ReflectionToStringBuilder;
//import javax.servlet.http.HttpServletRequest;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.pms.aop.dao.LoggerDAO;
import com.pms.model.LoggerDTO;
import com.pms.user.auth.UserSession;
import org.aspectj.lang.JoinPoint;
//import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
//import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;
//import org.hibernate.validator.internal.util.logging.LoggerFactory;
@Configuration
@Aspect
public class LoggingHandler {
    @Autowired
    LoggerDAO loggerDAO; 

    @Pointcut("within(@org.springframework.web.bind.annotation.RestController *)")
    protected void allMethod() {
    }

    @AfterReturning(pointcut = " !execution(* get*(..)) && !execution(* Logger*(..)) && within(@org.springframework.web.bind.annotation.RestController *)", returning = "result")
    public void logAfter(JoinPoint joinPoint, Object result)throws IOException   {   
        LoggerDTO logger = new LoggerDTO();
        Object paramObj = joinPoint.getArgs()[0];
        logger.setLoggerParam(toString(paramObj));
        logger.setLoggerStatus(result.equals(true)?"Success":"False");
        logger.setLoggerException("");
        logger.setLoggerFunction(joinPoint.getSignature().toShortString() );
        loggerDAO.insertLogger(logger);
    }

    public static String toString(Object object) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        return mapper.writeValueAsString(object);
    }

    @AfterThrowing(pointcut = " allMethod()", throwing = "exception")
    public void logAfterThrowing(JoinPoint joinPoint, Throwable exception)throws IOException {
        LoggerDTO logger = new LoggerDTO();
        Object paramObj = joinPoint.getArgs()[0];
        logger.setLoggerParam(toString(paramObj));
        logger.setLoggerStatus("Exception");
        logger.setLoggerException(exception.toString());
        logger.setLoggerFunction(joinPoint.getSignature().toShortString() );
        loggerDAO.insertLogger(logger);
    }
}
