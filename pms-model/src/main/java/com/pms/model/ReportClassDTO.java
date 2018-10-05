/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.pms.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.pms.enumeration.GenderEnum;
import com.pms.enumeration.StatusEnum;
import com.pms.jdbc.orm.Key;
import java.util.Date;

/**
 *
 * @author User
 */
public class ReportClassDTO {
    @Key(value = "class_id")
    private long classId;
    
    @Key(value = "course_level_id", required = false)
    private long courseLevelId;
    
    
    @Key(value = "quantity", required = false)
    private long quantity;
    
    @Key(value = "class_name", required = false)
    private String className;
    
    @Key(value = "last_updated_by", required = false)
    private String lastUpdatedBy;
    
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT-4")
    @Key(value = "last_updated_date", required = false)
    Date lastUpdatedDate;
    
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT-4")
    @Key(value = "start_date", required = false)
    Date startDate;
    
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT-4")
    @Key(value = "end_date", required = false)
    Date endDate;
    
    @Key(value = "class_status", required = false)
    StatusEnum classStatus;

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }

    public long getClassId() {
        return classId;
    }

    public void setClassId(long classId) {
        this.classId = classId;
    }

    public long getCourseLevelId() {
        return courseLevelId;
    }

    public void setCourseLevelId(long courseLevelId) {
        this.courseLevelId = courseLevelId;
    }

    public long getQuantity() {
        return quantity;
    }

    public void setQuantity(long quantity) {
        this.quantity = quantity;
    }

    public String getLastUpdatedBy() {
        return lastUpdatedBy;
    }

    public void setLastUpdatedBy(String lastUpdatedBy) {
        this.lastUpdatedBy = lastUpdatedBy;
    }

    public Date getLastUpdatedDate() {
        return lastUpdatedDate;
    }

    public void setLastUpdatedDate(Date lastUpdatedDate) {
        this.lastUpdatedDate = lastUpdatedDate;
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

    public StatusEnum getClassStatus() {
        return classStatus;
    }

    public void setClassStatus(StatusEnum classStatus) {
        this.classStatus = classStatus;
    }
}
