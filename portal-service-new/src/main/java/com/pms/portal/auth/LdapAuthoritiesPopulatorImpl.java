package com.pms.portal.auth;

import com.pms.model.PermissionDTO;
import com.pms.model.RoleDTO;
import com.pms.portal.dao.UserDAO;
import com.pms.portal.ldap.RoleLdap;
import com.pms.portal.ldap.RoleService;
import com.pms.portal.model.Account;
import com.pms.portal.model.Role;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.logging.Level;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ldap.core.DirContextOperations;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.ldap.userdetails.LdapAuthoritiesPopulator;
import org.springframework.stereotype.Service;
import java.util.logging.Logger;
import java.util.stream.Collectors;

/**
 *
 * @author Lucas.Le
 */
@Service
public class LdapAuthoritiesPopulatorImpl implements LdapAuthoritiesPopulator {

    @Autowired
    private UserDAO userDAO;
    private static final Logger logger = java.util.logging.Logger.getLogger(LdapAuthoritiesPopulatorImpl.class.getName());

    @Autowired
    private RoleService roleService;

    @Override
    public Collection<? extends GrantedAuthority> getGrantedAuthorities(DirContextOperations dco, String userName) {
        Set<GrantedAuthority> authorities = new HashSet<>();
        try {
            Account account = userDAO.getUserByLogin(userName);
            // check user is exists in db ? get role tu bd : get role tu ldap
            String query = "uid="+userName+",ou=People,dc=maxcrc,dc=com";
            if (account.getUserId() == 0L) {
//                logger.log(Level.SEVERE, "Threw exception in MyAuthoritiesPopulator::getGrantedAuthorities : User {0} doesn't exist into ATS database", userName);
//                List<String> listRoleLdap = roleService.getListRoleNameByUserName(query);
//                List<RoleDTO> listRole = userDAO.getListRole();
//                String lstRoleId = listRole.stream().filter(r -> listRoleLdap.contains(r.getRoleName())).map(r -> Long.toString(r.getRoleId())).collect(Collectors.joining(","));
//                userDAO.createAccountByLdap(userName, "", 1, lstRoleId, 1, 1, "ldap");
//                account = userDAO.getUserByLogin(userName);
            } 
            for (String permission : account.getPermissions()) {
                authorities.add(new SimpleGrantedAuthority(permission));
            }
                return authorities;
        } catch (Exception e) {
            logger.log(Level.SEVERE, "Threw exception in MyAuthoritiesPopulator::getGrantedAuthorities : ", e);
        }
        return authorities;

    }
}
