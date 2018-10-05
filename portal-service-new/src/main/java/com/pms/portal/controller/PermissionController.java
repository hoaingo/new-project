package com.pms.portal.controller;

import com.pms.model.PermissionDTO;
import com.pms.portal.auth.AuthenticationService;
import com.pms.portal.feign.PermissionClient;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.feign.EnableFeignClients;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author gohan.intern
 */
@SpringBootApplication
@EnableDiscoveryClient
@EnableFeignClients
@RestController
@Configuration
@ComponentScan(basePackages = { "com.pms" })
@RequestMapping("/pms/permissions")
public class PermissionController {
    @Autowired
    AuthenticationService authService;
    @Autowired
    PermissionClient client;

    @RequestMapping("/get-all-permission")
    public List<PermissionDTO> getPermission() {
        return client.getListPermission();
    }
    
    @RequestMapping(value="/get-permissions-by-login-user")
    public List<PermissionDTO> getPermissionsByLoginUser() {
        return client.getPermissionsByLoginUser(authService.getLoggedInAccount().getLstRoles());
    }

    @RequestMapping("/get-permission")
    public PermissionDTO getListPermission(@RequestParam("permissionId") long permissionId) {
        return client.getPermissionById(permissionId);
    }

    @RequestMapping(value = "/update-permission", method = RequestMethod.POST)
    public boolean updatePermission(@RequestBody PermissionDTO permission) {
        return client.updatePermission(permission);
    }
    
    @RequestMapping(value = "/insert-permission", method = RequestMethod.POST)
    public boolean insertPermission(@RequestBody PermissionDTO permission) {
        return client.insertPermission(permission);
    }
    
    @RequestMapping("/delete-permission")
    public boolean deletePermission(@RequestBody PermissionDTO permission) {
        return client.deletePermission(permission);
    }
    @RequestMapping("/get-permission-by-roleId")
    public List<PermissionDTO> getPermissionByRoleId(@RequestParam("roleId") int roleId) {
        return client.getPermissionByRoleId(roleId);
    }
}    
