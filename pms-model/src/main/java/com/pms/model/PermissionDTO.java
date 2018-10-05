package com.pms.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.pms.jdbc.orm.Key;
import java.util.Date;

/**
 *
 * @author gohan.intern
 */
public class PermissionDTO {
    @Key(value = "permission_id")
    long permissionId;
    @Key(value = "permission_name")
    String permissionName;
    @Key(value = "permission_description")
    String permissionDescription;
    @Key(value = "updated_by")
    String updatedBy;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT-4")
    @Key(value = "updated_date")
    Date updatedDate;

    public long getPermissionId() {
        return permissionId;
    }

    public void setPermissionId(long permissionId) {
        this.permissionId = permissionId;
    }

    public String getPermissionName() {
        return permissionName;
    }

    public void setPermissionName(String permissionName) {
        this.permissionName = permissionName;
    }

    public String getPermissionDescription() {
        return permissionDescription;
    }

    public void setPermissionDescription(String permissionDescription) {
        this.permissionDescription = permissionDescription;
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
