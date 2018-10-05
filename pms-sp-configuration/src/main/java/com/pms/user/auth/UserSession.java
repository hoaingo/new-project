package com.pms.user.auth;

import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * @author Conan
 */
@Component
public class UserSession {

    private static final String HEADER_PROFILE_USER_NAME = "X-Profile-UserName";

    @Autowired
    HttpServletRequest request;

    public String getUserName() {
        return request.getHeader(HEADER_PROFILE_USER_NAME);
    }

}
