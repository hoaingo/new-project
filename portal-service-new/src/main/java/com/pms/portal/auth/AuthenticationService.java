package com.pms.portal.auth;

import com.pms.portal.model.Account;
import java.util.List;
import java.util.Map;

/**
 *
 * @author Conan
 */
public interface AuthenticationService {
    public Account getLoggedInAccount();
    public Account getLoggedInAccountInCache();
    public String getAuthenticatedUserName();
    public List<Map<String,Object>> getUserByDepartmentType(String departmentType);
}
