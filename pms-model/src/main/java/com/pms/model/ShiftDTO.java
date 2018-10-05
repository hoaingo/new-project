/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.pms.model;

import com.pms.jdbc.orm.Key;

/**
 *
 * @author User
 */
public class ShiftDTO {

    @Key(value = "date")
    String date;
    @Key(value = "class_name")
    String className;
    @Key(value = "course_level_name")
    String courseLevelName;
    @Key(value = "start_time")
    String startTime;
    @Key(value = "end_time")
    String endTime;
    @Key(value = "floor")
    String floor;
    @Key(value = "room_name")
    String roomName;

    public String getRoomName() {
        return roomName;
    }

    public void setRoomName(String roomName) {
        this.roomName = roomName;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }

    public String getCourseLevelName() {
        return courseLevelName;
    }

    public void setCourseLevelName(String courseLevelName) {
        this.courseLevelName = courseLevelName;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public String getFloor() {
        return floor;
    }

    public void setFloor(String floor) {
        this.floor = floor;
    }

}
