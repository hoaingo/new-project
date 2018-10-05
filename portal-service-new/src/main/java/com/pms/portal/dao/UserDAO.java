package com.pms.portal.dao;

import com.pms.model.PermissionDTO;
import com.pms.model.RoleDTO;
import com.pms.portal.model.Account;
import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Component;

/**
 *
 * @author darik.intern
 */
@Component
public interface UserDAO {

    /**
     *  NOTE: DON'T USE Cache in this function because it be used for login
     * @param userName
     * @return Account
     */
    Account getUserByLogin(String userName);
    Account getUserByLoginInCache(String userName);
    List<Map<String,Object>> getUserByDepartmentType(String departmentType);
    List<PermissionDTO> getListPermissionByListRole(String lstRole);
//    List<String> getListPermissionNameByRoleName(String roleName);
    void createAccountByLdap(String userName, String password, long departmentId, String lstRoleId, int maxApprovePR, int maxApprovePO, String createdBy);
//    List<RoleDTO> getListRole();
}
