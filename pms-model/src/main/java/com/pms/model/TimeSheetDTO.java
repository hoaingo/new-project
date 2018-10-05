/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.pms.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.pms.enumeration.StatusEnum;
import com.pms.jdbc.orm.Key;
import java.util.Date;

/**
 *
 * @author noah.intern
 */
public class TimeSheetDTO {

    @Key(value = "schedule_id", required = false)
    long scheduleId;

    @Key(value = "course_level_id", required = false)
    long courseLevelId;

    @Key(value = "room_id", required = false)
    long roomId;

    @Key(value = "room_name", required = false)
    String roomName;

    @Key(value = "day", required = false)
    String day;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "HH:mm", timezone = "GMT-4")
    @Key(value = "start_time", required = false)
    Date startTime;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "HH:mm", timezone = "GMT-4")
    @Key(value = "end_time", required = false)
    Date endTime;

    @Key(value = "last_updated_by", required = false)
    String lastUpdatedBy;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT-4")
    @Key(value = "last_updated_date", required = false)
    Date lastUpdatedDate;

    @Key(value = "schedule_status", required = false)
    StatusEnum scheduleStatus;

    @Key(value = "branch_id", required = false)
    String branchId;

    @Key(value = "floor", required = false)
    String floor;

    @Key(value = "capacity", required = false)
    String capacity;

    @Key(value = "room_status", required = false)
    StatusEnum roomStatus;
    
    @Key(value = "course_level_name", required = false)
    String courseLevelName;

    public String getCourseLevelName() {
        return courseLevelName;
    }

    public void setCourseLevelName(String courseLevelName) {
        this.courseLevelName = courseLevelName;
    }

    
    
    public String getFloor() {
        return floor;
    }

    public void setFloor(String floor) {
        this.floor = floor;
    }

    public String getCapacity() {
        return capacity;
    }

    public void setCapacity(String capacity) {
        this.capacity = capacity;
    }

    public String getRoomName() {
        return roomName;
    }

    public void setRoomName(String roomName) {
        this.roomName = roomName;
    }

    public long getRoomId() {
        return roomId;
    }

    public void setRoomId(long roomId) {
        this.roomId = roomId;
    }

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public long getScheduleId() {
        return scheduleId;
    }

    public void setScheduleId(long scheduleId) {
        this.scheduleId = scheduleId;
    }

    public long getCourseLevelId() {
        return courseLevelId;
    }

    public void setCourseLevelId(long courseLevelId) {
        this.courseLevelId = courseLevelId;
    }

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public Date getEndTime() {
        return endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
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

    public StatusEnum getScheduleStatus() {
        return scheduleStatus;
    }

    public void setScheduleStatus(StatusEnum scheduleStatus) {
        this.scheduleStatus = scheduleStatus;
    }

    public String getBranchId() {
        return branchId;
    }

    public void setBranchId(String branchId) {
        this.branchId = branchId;
    }

    public StatusEnum getRoomStatus() {
        return roomStatus;
    }

    public void setRoomStatus(StatusEnum roomStatus) {
        this.roomStatus = roomStatus;
    }

}
