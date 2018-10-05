package com.pms.permission.dao;

import com.pms.model.PermissionDTO;
import java.util.List;

/**
 *
 * @author gohan.itern
 */
public interface PermissionDAO {

    List<PermissionDTO> getListPermission();
    
    List<PermissionDTO> getListPermissionByListRole(String lstRole);

    PermissionDTO getPermissionById(long permissionId);

    boolean updatePermission(PermissionDTO permission);
    
    boolean insertPermission(PermissionDTO permission);
    
    boolean deletePermission(PermissionDTO permission);
    
    List<PermissionDTO> getPermissionByRoleId(int roleId) ;

}
