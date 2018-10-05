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
public class ListCourseLevelNameDTO {
    
    @Key(value = "course_level_id")
    private long courseLevelId;

    @Key(value = "course_level_name")
    private String courseLevelName;

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

    
    
  
}
