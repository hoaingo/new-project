/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.pms.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.pms.jdbc.orm.Key;
import java.util.Date;

/**
 *
 * @author Dell
 */
public class ClassDTO extends PagingDTO {
    
    @Key(value = "class_id")
    long classId;
    
    @Key(value = "class_name")
    String className;
    
    @Key(value = "course_level_id")
    long courseLevelId;
    
    @Key(value = "course_level_name")
    String courseLevelName;
    
    @Key(value = "user_id")
    long userId;
    
    @Key(value = "user_name")
    String userName;
    
    @Key(value = "quantity")
    long quantity;
    
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone = "GMT-4")
    @Key(value = "start_date")
    Date startDate;
    
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone = "GMT-4")
    @Key(value = "end_date")
    Date endDate;
    
    @Key(value = "class_status")
    String classStatus;
    
    @Key(value = "last_updated_by")
    String lastUpdatedBy;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT-4")
    @Key(value = "last_updated_date")
    Date lastUpdateDate;

    public long getClassId() {
        return classId;
    }

    public void setClassId(long classId) {
        this.classId = classId;
    }

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }

    public long getCourseLevelId() {
        return courseLevelId;
    }

    public void setCourseLevelId(long courseLevelId) {
        this.courseLevelId = courseLevelId;
    }

    public String getCourseLevelName() {
        return courseLevelName;
    }

    public void setCourseLevelName(String courseLevelName) {
        this.courseLevelName = courseLevelName;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public long getQuantity() {
        return quantity;
    }

    public void setQuantity(long quantity) {
        this.quantity = quantity;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public String getClassStatus() {
        return classStatus;
    }

    public void setClassStatus(String classStatus) {
        this.classStatus = classStatus;
    }

    public String getLastUpdatedBy() {
        return lastUpdatedBy;
    }

    public void setLastUpdatedBy(String lastUpdatedBy) {
        this.lastUpdatedBy = lastUpdatedBy;
    }

    public Date getLastUpdateDate() {
        return lastUpdateDate;
    }

    public void setLastUpdateDate(Date lastUpdateDate) {
        this.lastUpdateDate = lastUpdateDate;
    }

    
    
    
    
    
}
