package com.pms.portal.auth;

import com.pms.portal.dao.UserDAO;
import com.pms.portal.model.Account;
import com.pms.portal.model.Role;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.ldap.userdetails.LdapUserDetailsImpl;
import org.springframework.stereotype.Component;

/**
 *
 * @author Conan
 */
@Component
public class AuthenticationServiceImpl implements AuthenticationService {

    @Autowired
    UserDAO userDAO;

    @Override
    public String getAuthenticatedUserName() {
        if (SecurityContextHolder.getContext().getAuthentication().isAuthenticated()) {
            return SecurityContextHolder.getContext().getAuthentication().getName();
        }

        return "";
    }

    @Override
    public Account getLoggedInAccount() {
        /*
        * TODO: this code is implement for purpose demo, it will be removed later.
        */
        String userName = getAuthenticatedUserName();
        Account account = userDAO.getUserByLogin(userName);
        if(SecurityContextHolder.getContext().getAuthentication().isAuthenticated()){
            if(SecurityContextHolder.getContext().getAuthentication() instanceof LdapUserDetailsImpl && account.getUserId() == 0L){
                return getAccountByLdap(userName);
            }else{
                return account;
            }
        }
        return new Account();
    }

    @Override
    public Account getLoggedInAccountInCache() {
        /*
        * TODO: this code is implement for purpose demo, it will be removed later.
        */
        String userName = getAuthenticatedUserName();
        Account account = userDAO.getUserByLoginInCache(userName);
        if(SecurityContextHolder.getContext().getAuthentication().isAuthenticated()){
            if(SecurityContextHolder.getContext().getAuthentication().getPrincipal() instanceof LdapUserDetailsImpl && account.getUserId() == 0L){
                return getAccountByLdap(userName);
            }else{
                return account;
            }
        }
        return new Account();
    }

    @Override
    public List<Map<String, Object>> getUserByDepartmentType(String departmentType) {
        return userDAO.getUserByDepartmentType(departmentType);
    }

    /**
     * TODO: this code is implement for purpose demo, it will be removed later.
     * @param userName
     * @return Account
     */
    private Account getAccountByLdap(String userName) {
        LdapUserDetailsImpl userLdap = (LdapUserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Collection<GrantedAuthority> grantedAuthority = userLdap.getAuthorities();
        Account account = new Account();
        account.setUserName(userName);
        List<String> listPermission = grantedAuthority.stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList());
        
        account.setLstPermissions(listPermission.stream().collect(Collectors.joining(",")));
        return account;
    }
}
