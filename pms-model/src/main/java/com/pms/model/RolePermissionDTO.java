package com.pms.model;

import com.pms.jdbc.orm.Key;
import java.util.Date;

/**
 *
 * @author gohan.intern
 */
public class RolePermissionDTO {

    @Key(value = "role_id")
    long roleId;
    @Key(value = "permission_id")
    String permissionId;
    @Key(value = "updated_by")
    String updatedBy;
    @Key(value = "updated_date")
    Date updatedDate;

    public long getRoleId() {
        return roleId;
    }

    public void setRoleId(long roleId) {
        this.roleId = roleId;
    }

    public String getPermissionId() {
        return permissionId;
    }

    public void setPermissionId(String permissionIdString) {
        this.permissionId = permissionIdString;
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

}
