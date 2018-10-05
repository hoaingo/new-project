package com.pms.portal.model;

import com.pms.jdbc.orm.Key;

/**
 *
 * @author Conan
 */
public class RolePermission {

    @Key(value = "role_id")
    Long roleId;
    @Key(value = "role_name")
    String roleName;
    @Key(value = "permission_id")
    Long permissionId;
    @Key(value = "permission_name")
    String permissionName;

    public Long getRoleId() {
        return roleId;
    }

    public void setRoleId(Long roleId) {
        this.roleId = roleId;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public Long getPermissionId() {
        return permissionId;
    }

    public void setPermissionId(Long permissionId) {
        this.permissionId = permissionId;
    }

    public String getPermissionName() {
        return permissionName;
    }

    public void setPermissionName(String permissionName) {
        this.permissionName = permissionName;
    }

}
