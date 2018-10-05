package com.pms.portal.service;

import com.pms.portal.model.Account;
import org.springframework.stereotype.Component;

/**
 *
 * @author darik.intern
 */
@Component
public interface userService {
    
    public Account getUserByLogin(String user_name);
    
}
