package com.pms.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.pms.enumeration.GenderEnum;
import com.pms.jdbc.orm.Key;
import com.pms.enumeration.StatusEnum;
import java.util.Date;
import java.util.List;

public class AccountDTO {

    @Key(value = "user_name")
    String userName;
    @Key(value = "full_name")
    String fullName;
    @Key(value = "user_password")
    String password;
    @Key(value = "user_id")
    long userId;
    @Key(value = "department")
    long department;
    @Key(value = "maximum_approve_pr")
    int maxApprovePR;
    @Key(value = "maximum_approve_po")
    int maxApprovePO;
    @Key(value = "created_by")
    String createdBy;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT-4")
    @Key(value = "created_date")
    Date createdDate;
    @Key(value = "updated_by")
    String updatedBy;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT-4")
    @Key(value = "updated_date")
    Date updatedDate;
    private String listRoleName;
    @Key(value = "department_name")
    private String nameDepartment;
    @Key(value = "roles")
    String listRolesId;
    String currentPassword;
    List<ShiftDTO> listShift;
    @Key(value = "status")
    StatusEnum status;
    @Key(value = "permissions")
    String permissions;
    @Key(value = "associated_roles")
    String associatedRoles;
    @Key(value = "is_running", required = false)
    boolean isRunning;
    @Key(value = "companies")
    String lstCompanies;
    @Key(value = "user_gender")
    GenderEnum userGender;
    @Key(value = "user_phone")
    String userPhone;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone = "GMT-4")
    @Key(value = "user_date_of_birth")
    Date userDateOfBirth;
    @Key(value = "user_address")
    String userAddress;
    @Key(value = "user_email")
    String userEmail;

    public String getUserPhone() {
        return userPhone;
    }

    public void setUserPhone(String userPhone) {
        this.userPhone = userPhone;
    }

    public GenderEnum getUserGender() {
        return userGender;
    }

    public void setUserGender(GenderEnum userGender) {
        this.userGender = userGender;
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

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getLstCompanies() {
        return lstCompanies;
    }

    public void setLstCompanies(String lstCompanies) {
        this.lstCompanies = lstCompanies;
    }

    public StatusEnum getStatus() {
        return status;
    }

    public void setStatus(StatusEnum status) {
        this.status = status;
    }

    public String getPermissions() {
        return permissions;
    }

    public void setPermissions(String permissions) {
        this.permissions = permissions;
    }

    public String getAssociatedRoles() {
        return associatedRoles;
    }

    public void setAssociatedRoles(String associatedRoles) {
        this.associatedRoles = associatedRoles;
    }

    public boolean isIsRunning() {
        return isRunning;
    }

    public void setIsRunning(boolean isRunning) {
        this.isRunning = isRunning;
    }

    public List<ShiftDTO> getListShift() {
        return listShift;
    }

    public void setListShift(List<ShiftDTO> listShift) {
        this.listShift = listShift;
    }

    public String getCurrentPassword() {
        return currentPassword;
    }

    public void setCurrentPassword(String currentPassword) {
        this.currentPassword = currentPassword;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getListRoleName() {
        return listRoleName;
    }

    public void setListRoleName(String listRoleName) {
        this.listRoleName = listRoleName;
    }

    public String getListRolesId() {
        return listRolesId;
    }

    public void setListRolesId(String listRolesId) {
        this.listRolesId = listRolesId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public long getDepartment() {
        return department;
    }

    public void setDepartment(long department) {
        this.department = department;
    }

    public int getMaxApprovePR() {
        return maxApprovePR;
    }

    public void setMaxApprovePR(int maxApprovePR) {
        this.maxApprovePR = maxApprovePR;
    }

    public int getMaxApprovePO() {
        return maxApprovePO;
    }

    public void setMaxApprovePO(int maxApprovePO) {
        this.maxApprovePO = maxApprovePO;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
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

    public String getNameDepartment() {
        return nameDepartment;
    }

    public void setNameDepartment(String nameDepartment) {
        this.nameDepartment = nameDepartment;
    }

}
