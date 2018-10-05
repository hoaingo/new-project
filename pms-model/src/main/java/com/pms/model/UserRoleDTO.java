package com.pms.model;

import com.pms.jdbc.orm.Key;
import java.util.Date;

/**
 *
 * @author gohan.intern
 */
public class UserRoleDTO {
    @Key(value = "role_id")
    long roleId;
    @Key(value = "user_id")
    long userId;
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

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
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
