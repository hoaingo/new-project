package com.pms.portal.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.pms.jdbc.orm.Key;
import java.util.List;

/**
 *
 * @author conan
 */
public class Account {

    @Key(value = "user_id")
    private long userId;
    @Key(value = "user_name")
    private String userName;
    @Key(value = "full_name")
    private String fullName;
    @JsonIgnore
    @Key(value = "user_password")
    private String password;
    @JsonIgnore
    @Key(value = "permissions")
    private String lstPermissions;
    @Key(value = "dept_name", required = false)
    private String departmentName;
    @JsonIgnore
    @Key(value = "associated_roles")
    private String lstRoles;
    @Key(value = "user_setting_theme", required = false)
    private String userSettingTheme;
    @Key(value = "user_setting_language", required = false)
    private String userSettingLanguage;

    public String getUserSettingTheme() {
        return userSettingTheme;
    }

    public void setUserSettingTheme(String userSettingTheme) {
        this.userSettingTheme = userSettingTheme;
    }

    public String getUserSettingLanguage() {
        return userSettingLanguage;
    }

    public void setUserSettingLanguage(String userSettingLanguage) {
        this.userSettingLanguage = userSettingLanguage;
    }

    private List<String> permissions;

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getDepartmentName() {
        return departmentName;
    }

    public void setDepartmentName(String departmentName) {
        this.departmentName = departmentName;
    }

    public String getLstPermissions() {
        return lstPermissions;
    }

    public void setLstPermissions(String lstPermissions) {
        this.lstPermissions = lstPermissions;
    }

    public List<String> getPermissions() {
        return permissions;
    }

    public void setPermissions(List<String> permissions) {
        this.permissions = permissions;
    }

    public String getLstRoles() {
        return lstRoles;
    }

    public void setLstRoles(String lstRoles) {
        this.lstRoles = lstRoles;
    }

}
