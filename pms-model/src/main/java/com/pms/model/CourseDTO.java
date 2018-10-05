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
public class CourseDTO extends PagingDTO {
    
    @Key(value = "course_id")
    long courseId;
    
    @Key(value = "course_name")
    String courseName;
    
    @Key(value = "description")
    String description;
    
    @Key(value = "last_updated_by")
    String lastUpdatedBy;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT-4")
    @Key(value = "last_updated_date")
    Date lastUpdateDate;

    public long getCourseId() {
        return courseId;
    }

    public void setCourseId(long courseId) {
        this.courseId = courseId;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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
