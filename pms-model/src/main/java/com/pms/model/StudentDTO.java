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
import java.util.List;

/**
 *
 * @author User
 */
public class StudentDTO {
    @Key(value = "studentId")
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
    StatusEnum studentStatus;
    
    List<ShiftDTO> listShift;

    public List<ShiftDTO> getListShift() {
        return listShift;
    }

    public void setListShift(List<ShiftDTO> listShift) {
        this.listShift = listShift;
    }

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

    public StatusEnum getStudentStatus() {
        return studentStatus;
    }

    public void setStudentStatus(StatusEnum studentStatus) {
        this.studentStatus = studentStatus;
    }
}
