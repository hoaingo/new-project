package com.pms.permission.dao;

import com.pms.jdbc.orm.RowMapperUtils;
import com.pms.model.PermissionDTO;
import com.pms.user.auth.UserSession;
import java.util.Collections;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.beans.factory.annotation.Value;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.stereotype.Repository;

/**
 *
 * @author gohan.itern
 */
@Repository
public class PermissionDAOImpl implements PermissionDAO {

    private static final Logger logger = Logger.getLogger(PermissionDAOImpl.class.getName());
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Value("${up_pms_get_list_permission}")
    String getListPermission;

    @Value("${up_pms_get_role_permissions_by_roles}")
    String  getPermissionsByRoles;

    @Value("${up_pms_get_permission_by_id}")
    String getPermissionById;

    @Value("${up_pms_update_permission_by_id}")
    String updatePermissionById;

    @Value("${up_pms_insert_permission}")
    String insertPermission;

    @Value("${up_pms_delete_permission}")
    String deletePermission;
    @Value("${up_pms_get_permission_by_roleId}")
    String getPermissionByRoleId;
    @Autowired
    UserSession userSession;

    @Override
    public List<PermissionDTO> getListPermission() {
         return  jdbcTemplate.query(getListPermission,RowMapperUtils.getRowMapper(PermissionDTO.class));
    }

    @Override
    public List<PermissionDTO> getListPermissionByListRole(String lstRole) {
        return jdbcTemplate.query(getPermissionsByRoles,RowMapperUtils.getRowMapper(PermissionDTO.class),lstRole);
    }

    @Override
    public PermissionDTO getPermissionById(long permissionId) {
        List<PermissionDTO> listPermission = jdbcTemplate.query(getPermissionById, RowMapperUtils.getRowMapper(PermissionDTO.class), permissionId);
        if (listPermission.isEmpty()) {
            listPermission = Collections.EMPTY_LIST;
        }
        return listPermission.get(0);
    }

    @Override
    public boolean updatePermission(PermissionDTO permission) {
        boolean objUpdated = false;
        try {
            objUpdated = jdbcTemplate.update(updatePermissionById,
                    permission.getPermissionId(),
                    permission.getPermissionName(),
                    permission.getPermissionDescription(),
                    userSession.getUserName()
            ) > 0;
        } catch (Exception e) {
            logger.log(Level.SEVERE, "Cannot update permission", e);
        }
        return objUpdated;
    }

    @Override
    public boolean insertPermission(PermissionDTO permission) {
        boolean objInsert = false;
        try {
            objInsert = jdbcTemplate.update(insertPermission,
                    permission.getPermissionName(),
                    permission.getPermissionDescription()) > 0;
        } catch (Exception e) {
            logger.log(Level.SEVERE, "Cannot add permission", e);
        }
        return objInsert;
    }

    @Override
    public boolean deletePermission(PermissionDTO permission) {
        boolean objDelete = false;
        try {
            objDelete = jdbcTemplate.update(deletePermission, permission.getPermissionId()) > 0;
        } catch (Exception e) {
            logger.log(Level.SEVERE, "Cannot delete permission", e);
        }
        return objDelete;
    }
    @Override
    public List<PermissionDTO> getPermissionByRoleId(int roleId) {
        return jdbcTemplate.query(getPermissionByRoleId, RowMapperUtils.getRowMapper(PermissionDTO.class), roleId);
    }
}
