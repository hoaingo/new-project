package com.pms.portal.auth;

public interface SecurityService {
    String findLoggedInUsername();

    void autologin(String username, String password);
}
