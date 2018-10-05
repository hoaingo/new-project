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
public class ListStudentDTO extends PagingDTO{
    
    @Key(value = "class_id")
    long classId;
    
    @Key(value = "class_name")
    String className;
    @Key(value = "student_id")
    long studentId;
    
    @Key(value = "student_name")
    String studentName;
    
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone = "GMT+7")
    @Key(value = "student_date_of_birth")
    Date studentDateOfBirth;
    
    @Key(value = "student_gender")
    GenderEnum studentGender;
    
    @Key(value = "student_phone")
    String studentPhone;
    
    @Key(value = "student_address")
    String studentAddress;
    
    @Key(value = "student_mail")
    String studentMail;
    
    @Key(value = "student_status")
    String studentStatus;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+7")
    @Key(value = "updated_date")
    Date updatedDate;
    @Key(value = "updated_by")
    String updatedBy;

    public long getStudentId() {
        return studentId;
    }

    public void setStudentId(long studentId) {
        this.studentId = studentId;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public Date getStudentDateOfBirth() {
        return studentDateOfBirth;
    }

    public void setStudentDateOfBirth(Date studentDateOfBirth) {
        this.studentDateOfBirth = studentDateOfBirth;
    }

    public GenderEnum getStudentGender() {
        return studentGender;
    }

    public void setStudentGender(GenderEnum studentGender) {
        this.studentGender = studentGender;
    }

    public String getStudentPhone() {
        return studentPhone;
    }

    public void setStudentPhone(String studentPhone) {
        this.studentPhone = studentPhone;
    }

    public String getStudentAddress() {
        return studentAddress;
    }

    public void setStudentAddress(String studentAddress) {
        this.studentAddress = studentAddress;
    }

    public String getStudentMail() {
        return studentMail;
    }

    public void setStudentMail(String studentMail) {
        this.studentMail = studentMail;
    }

    public String getStudentStatus() {
        return studentStatus;
    }

    public void setStudentStatus(String studentStatus) {
        this.studentStatus = studentStatus;
    }

    public Date getUpdatedDate() {
        return updatedDate;
    }

    public void setUpdatedDate(Date updatedDate) {
        this.updatedDate = updatedDate;
    }

    public String getUpdatedBy() {
        return updatedBy;
    }

    public void setUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
    }

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
    
    

    
}
