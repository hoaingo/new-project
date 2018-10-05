package com.pms.portal.feign;

import com.pms.model.PermissionDTO;
import java.util.List;
import org.springframework.cloud.netflix.feign.EnableFeignClients;
import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *
 * @author gohan.intern
 */
@EnableFeignClients
@FeignClient("permission-service")
public interface PermissionClient {

        @RequestMapping(value = "/", method = GET)
        String hello();

        @RequestMapping(value = "/pms/permissions/get-permission", method = GET)
        PermissionDTO getPermissionById(@RequestParam("permissionId") long accountId);

        @RequestMapping(value = "/pms/permissions/get-all-permission", method = GET)
        List<PermissionDTO> getListPermission();
        
        @RequestMapping(value = "/pms/permissions/get-permissions-by-login-user", method = GET)
        List<PermissionDTO> getPermissionsByLoginUser(@RequestParam("permission") String permission);

        @RequestMapping(value = "/pms/permissions/update-permission", method = POST)
        boolean updatePermission(@RequestBody PermissionDTO permission);
        
        @RequestMapping(value = "/pms/permissions/insert-permission", method = POST)
        boolean insertPermission(@RequestBody PermissionDTO permission);
        
        @RequestMapping(value = "/pms/permissions/delete-permission", method = POST)
        boolean deletePermission(@RequestBody PermissionDTO permission);
        
        @RequestMapping(value="/pms/permissions/get-permission-by-roleId" , method = GET)
        List<PermissionDTO> getPermissionByRoleId(@RequestParam("roleId") int roleId);
}
