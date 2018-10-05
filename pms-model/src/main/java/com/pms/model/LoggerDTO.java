package com.pms.model;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.pms.jdbc.orm.Key;
import java.util.Date;


/**
 *
 * @author john.intern
 */
public class LoggerDTO {
    @Key(value = "logger_id")
    long loggerId;
    @Key(value = "logger_status")
    String loggerStatus;
    @Key(value = "logger_function")
    String loggerFunction;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT-4")
    @Key(value = "date")
    Date date;
    @Key(value = "by_user")
    String byUser;
    @Key(value = "logger_param")
    String loggerParam;
    @Key(value = "logger_exception")
    String loggerException;

    public long getLoggerId() {
        return loggerId;
    }

    public void setLoggerId(long loggerId) {
        this.loggerId = loggerId;
    }

    public String getLoggerStatus() {
        return loggerStatus;
    }

    public void setLoggerStatus(String loggerStatus) {
        this.loggerStatus = loggerStatus;
    }

    public String getLoggerFunction() {
        return loggerFunction;
    }

    public void setLoggerFunction(String loggerFunction) {
        this.loggerFunction = loggerFunction;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getByUser() {
        return byUser;
    }

    public void setByUser(String byUser) {
        this.byUser = byUser;
    }

    public String getLoggerParam() {
        return loggerParam;
    }

    public void setLoggerParam(String loggerParam) {
        this.loggerParam = loggerParam;
    }

    public String getLoggerException() {
        return loggerException;
    }

    public void setLoggerException(String loggerException) {
        this.loggerException = loggerException;
    }
   
   
   
   
      
}
