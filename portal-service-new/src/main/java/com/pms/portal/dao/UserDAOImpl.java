package com.pms.portal.dao;

import com.pms.jdbc.orm.RowMapperUtils;
import com.pms.model.PermissionDTO;
import com.pms.model.RoleDTO;
import com.pms.portal.model.Account;
import com.pms.portal.model.Role;
import com.pms.portal.model.RolePermission;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.annotation.Cacheable;

/**
 *
 * @author conan
 */
@Service

public class UserDAOImpl implements UserDAO {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Value("${up_scm_get_account_login_by_username}")
    String upScmGetAccountLoginByUsername;
    @Value("${up_pms_get_account_login_by_username}")
    String upPmsGetAccountLoginByUsername;
    @Value("${up_scm_get_role_permission_by_roles}")
    String upScmGetRolePermissionByRoles;
    @Value("${up_scm_get_user_id_by_department_type}")
    String up_scm_get_user_id_by_department_type;
    @Value("${up_scm_get_role_permissions_by_roles}")
    String getPermissionsByRoles;
    @Value("${up_pms_get_role_permission_by_roles}")
    String upPmsGetRolePermissionByRoles;
    @Value("${up_pms_get_list_permission_name_by_list_permission_id}")
    String upPmsGetListPermissionNameByListPermissionId;
//    @Value("${up_pms_get_list_permission_by_role_name}")
//    String up_pms_get_list_permission_by_role_name;
    @Value("${up_pms_insert_account}")
    String insertAccount;
//    @Value("${up_pms_get_list_role}")
//    String getListRole;

    /**
     * NOTE: DON'T USE Cache in this function because it be used for login
     *
     * @param userName
     * @return Account include some info of user get from database
     */
     @Override
    public Account getUserByLogin(String userName) {
        List<Account> listAccount = jdbcTemplate.query(upPmsGetAccountLoginByUsername, RowMapperUtils.getRowMapper(Account.class), userName.trim());
        if (!listAccount.isEmpty()) {
            Account account = listAccount.get(0);
            List<String> permissions = jdbcTemplate.query(upPmsGetListPermissionNameByListPermissionId, (rs, i) -> rs.getString("permission_name"), account.getLstPermissions());
            account.setPermissions(permissions);
            return account;
        }
        return new Account();

    }

    @Override
    public List<Map<String, Object>> getUserByDepartmentType(String departmentType) {
        return jdbcTemplate.queryForList(up_scm_get_user_id_by_department_type, departmentType);
    }

    /**
     * This function is using Cacheable feature
     *
     * @param userName
     * @return Account include some info of user get from database
     */
    /**
     * This function is using Cacheable feature
     *
     * @param userName
     * @return Account include some info of user get from database
     */
    @Override
    @Cacheable("account")
    public Account getUserByLoginInCache(String userName) {
        return getUserByLogin(userName);
    }

    @Override
    public List<PermissionDTO> getListPermissionByListRole(String lstRole) {
        return jdbcTemplate.query(upPmsGetRolePermissionByRoles, RowMapperUtils.getRowMapper(PermissionDTO.class), lstRole);
    }

//    @Override
//    public List<String> getListPermissionNameByRoleName(String roleName) {
//        return jdbcTemplate.query(up_pms_get_list_permission_by_role_name, RowMapperUtils.getRowMapper(String.class), roleName);
//    }

    @Override
    public void createAccountByLdap(String userName, String password, long departmentId, String lstRoleId, int maxApprovePR, int maxApprovePO, String createdBy) {
        jdbcTemplate.update(insertAccount,
                userName,
                userName,
                password,
                departmentId,
                lstRoleId,
                maxApprovePR,
                maxApprovePO,
                createdBy,
                createdBy);
    }

//    @Override
//    public List<RoleDTO> getListRole() {
//        return jdbcTemplate.query(getListRole, RowMapperUtils.getRowMapper(RoleDTO.class));
//    }
}
