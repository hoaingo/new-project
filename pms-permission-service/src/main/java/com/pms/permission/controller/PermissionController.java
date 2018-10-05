package com.pms.permission.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.pms.permission.dao.PermissionDAO;
import com.pms.model.PermissionDTO;

/**
 *
 * @author gohan.itern
 */
@RestController
@RequestMapping("/pms/permissions")
public class PermissionController {
    
    @Autowired
    PermissionDAO permissionDAO;

    @RequestMapping("/get-permission")
    public PermissionDTO getPermission(@RequestParam("permissionId") long permissionId) {
        return permissionDAO.getPermissionById(permissionId);
    }
    @RequestMapping("/get-all-permission")
    public List<PermissionDTO> getListPermission() {
        return permissionDAO.getListPermission();
    }
    
    @RequestMapping(value="/get-permissions-by-login-user" )
    public List<PermissionDTO> getPermissionsByLoginUser(@RequestParam("permission") String permission) {
        return permissionDAO.getListPermissionByListRole(permission);
    }
    
    @RequestMapping(value = "/update-permission", method = RequestMethod.POST)
    public boolean updatePermission(@RequestBody PermissionDTO permission) {
        return permissionDAO.updatePermission(permission);
    }
    
    @RequestMapping(value = "/insert-permission", method = RequestMethod.POST)
    public boolean insertPermission(@RequestBody PermissionDTO permission) {
        return permissionDAO.insertPermission(permission);
    }
    
    @RequestMapping(value = "/delete-permission", method = RequestMethod.POST)
    public boolean deleteAccount(@RequestBody PermissionDTO permission) {
        return permissionDAO.deletePermission(permission);
    }
       
    @RequestMapping("/get-permission-by-roleId")
    public List<PermissionDTO> getPermissionByRoleId(@RequestParam("roleId") int roleId) {
        return permissionDAO.getPermissionByRoleId(roleId);
    }
}
