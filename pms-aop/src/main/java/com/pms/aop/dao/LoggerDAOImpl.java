package com.pms.aop.dao;

import com.pms.user.auth.UserSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import com.pms.model.LoggerDTO;
@Repository
public class LoggerDAOImpl implements LoggerDAO {
    @Autowired
    private JdbcTemplate jdbcTemplate;
    @Autowired
    UserSession userSession;

    @Value("${up_pms_insert_logger}")
    String upPmsInsertLogger;

    @Override
    public boolean insertLogger(LoggerDTO logger ) {
        return jdbcTemplate.update(upPmsInsertLogger,logger.getLoggerStatus(),logger.getLoggerFunction(),userSession.getUserName(),logger.getLoggerParam(),logger.getLoggerException() )>0;
    }

  
}
