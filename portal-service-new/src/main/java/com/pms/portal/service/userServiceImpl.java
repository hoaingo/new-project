package com.pms.portal.service;

import com.pms.portal.model.Account;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.pms.portal.dao.UserDAO;


/**
 *
 * @author darik.intern
 */
@Service
public class userServiceImpl implements userService {

    @Autowired
    private UserDAO userDAO;

    @Override
    @Transactional
    public Account getUserByLogin(String user_name) {
       return this.userDAO.getUserByLogin(user_name);
    }

}
