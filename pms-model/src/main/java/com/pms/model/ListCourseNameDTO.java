/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.pms.model;

import com.pms.jdbc.orm.Key;

/**
 *
 * @author darik.bui
 */
public class ListCourseNameDTO {
    
    @Key(value = "course_id")
    private long courseId;

    @Key(value = "course_name")
    private String courseName;

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

    
  
}
