/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.pms.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.pms.enumeration.StatusEnum;
import com.pms.jdbc.orm.Key;
import java.math.BigDecimal;
import java.util.Date;

/**
 *
 * @author darik.bui
 */
public class ListAccountDTO extends PagingDTO{
    
    @Key(value = "user_id")
    long userId;
    
    @Key(value = "user_name")
    String userName;
   
  
    @Key(value = "dept_short_code")
    String deptShortCode;
    
    @Key(value = "total_company")
    int totalCompany;
    
    @Key(value = "total_role")
    int totalRole;
    
    @Key(value = "status")
    StatusEnum status;
    
    @Key (value = "is_budget_owner")
    String isBudgetOwner;
    
    @Key (value = "is_approver")
    String isApprover;
    
    @Key (value = "is_buyer")
    String isBuyer;

    @Key(value = "updated_by")
    String updatedBy;
    
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT-4")
    @Key(value = "updated_date")
    Date updatedDate;
    
    @Key(value = "permissions")
    String permissions;
    
    @Key(value = "full_name")
    String fullName;
    
    @Key(value = "user_gender")
    String userGender;

    @Key(value = "user_phone")
    String userPhone;
    
    @Key(value = "user_email")
    String userEmail;
    
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone = "GMT-4")
    @Key(value = "user_date_of_birth")
    Date userDateOfBirth;
    
    @Key(value = "user_address")
    String userAddress;

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getUserGender() {
        return userGender;
    }

    public void setUserGender(String userGender) {
        this.userGender = userGender;
    }

    public String getUserPhone() {
        return userPhone;
    }

    public void setUserPhone(String userPhone) {
        this.userPhone = userPhone;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public Date getUserDateOfBirth() {
        return userDateOfBirth;
    }

    public void setUserDateOfBirth(Date userDateOfBirth) {
        this.userDateOfBirth = userDateOfBirth;
    }

    public String getUserAddress() {
        return userAddress;
    }

    public void setUserAddress(String userAddress) {
        this.userAddress = userAddress;
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

    public String getDeptShortCode() {
        return deptShortCode;
    }

    public void setDeptShortCode(String deptShortCode) {
        this.deptShortCode = deptShortCode;
    }

    public int getTotalCompany() {
        return totalCompany;
    }

    public void setTotalCompany(int totalCompany) {
        this.totalCompany = totalCompany;
    }

    public int getTotalRole() {
        return totalRole;
    }

    public void setTotalRole(int totalRole) {
        this.totalRole = totalRole;
    }

    public StatusEnum getStatus() {
        return status;
    }

    public void setStatus(StatusEnum status) {
        this.status = status;
    }

    public String getIsBudgetOwner() {
        return isBudgetOwner;
    }

    public void setIsBudgetOwner(String isBudgetOwner) {
        this.isBudgetOwner = isBudgetOwner;
    }

    public String getIsApprover() {
        return isApprover;
    }

    public void setIsApprover(String isApprover) {
        this.isApprover = isApprover;
    }

    public String getIsBuyer() {
        return isBuyer;
    }

    public void setIsBuyer(String isBuyer) {
        this.isBuyer = isBuyer;
    }

    public String getUpdatedBy() {
        return updatedBy;
    }

    public void setUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
    }

    public Date getUpdatedDate() {
        return updatedDate;
    }

    public void setUpdatedDate(Date updatedDate) {
        this.updatedDate = updatedDate;
    }

    public String getPermissions() {
        return permissions;
    }

    public void setPermissions(String permissions) {
        this.permissions = permissions;
    }
    
    
  
    
    


    
}
