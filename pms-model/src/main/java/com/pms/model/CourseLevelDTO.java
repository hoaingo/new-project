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
public class CourseLevelDTO extends PagingDTO {

    @Key(value = "course_level_id")
    long courseLevelId;

    @Key(value = "course_id")
    long courseId;

    @Key(value = "course_name")
    String courseName;

    @Key(value = "course_level_name")
    String courseLevelName;

    @Key(value = "curriculum")
    String curriculum;

    @Key(value = "duration")
    int duration;

    @Key(value = "cost")
    float cost;

    @Key(value = "status")
    String status;

    @Key(value = "last_updated_by")
    String lastUpdatedBy;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT-4")
    @Key(value = "last_updated_date")
    Date lastUpdatedDate;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "HH:mm", timezone = "GMT-4")
    @Key(value = "start_time", required = false)
    Date startTime;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "HH:mm", timezone = "GMT-4")
    @Key(value = "end_time", required = false)
    Date endTime;

    @Key(value = "day", required = false)
    String day;

    @Key(value = "room_name", required = false)
    String roomName;

    @Key(value = "room_id", required = false)
    String roomId;

    @Key(value = "floor", required = false)
    String floor;

    @Key(value = "capacity", required = false)
    String capacity;

    @Key(value = "branch_name", required = false)
    String branchName;

    public String getRoomId() {
        return roomId;
    }

    public void setRoomId(String roomId) {
        this.roomId = roomId;
    }

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public String getRoomName() {
        return roomName;
    }

    public void setRoomName(String roomName) {
        this.roomName = roomName;
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

    public String getBranchName() {
        return branchName;
    }

    public void setBranchName(String branchName) {
        this.branchName = branchName;
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

    public long getCourseLevelId() {
        return courseLevelId;
    }

    public void setCourseLevelId(long courseLevelId) {
        this.courseLevelId = courseLevelId;
    }

    public long getCourseId() {
        return courseId;
    }

    public void setCourseId(long courseId) {
        this.courseId = courseId;
    }

    public String getCourseLevelName() {
        return courseLevelName;
    }

    public void setCourseLevelName(String courseLevelName) {
        this.courseLevelName = courseLevelName;
    }

    public String getCurriculum() {
        return curriculum;
    }

    public void setCurriculum(String curriculum) {
        this.curriculum = curriculum;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public float getCost() {
        return cost;
    }

    public void setCost(float cost) {
        this.cost = cost;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
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

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

}
