package com.pms.portal.auth;

import com.pms.portal.model.Role;
import com.pms.portal.model.Account;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;
import com.pms.portal.dao.UserDAO;
import java.util.UUID;
import org.apache.commons.lang.StringUtils;

@Service
public class UserDetailsServiceImpl implements UserDetailsService{
    @Autowired
    private UserDAO userDAO;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        Account account = userDAO.getUserByLogin(userName);

        Set<GrantedAuthority> grantedAuthorities = new HashSet<>();
        for (String permission : account.getPermissions()) {
            grantedAuthorities.add(new SimpleGrantedAuthority(permission));
        }
        String password = StringUtils.isEmpty(account.getPassword()) ? UUID.randomUUID().toString() : account.getPassword();

        return new org.springframework.security.core.userdetails.User(userName, password, grantedAuthorities);
    }
}
