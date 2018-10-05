package com.pms.portal.auth;

import com.pms.portal.model.Account;
import feign.RequestInterceptor;
import feign.RequestTemplate;
import javax.servlet.http.HttpServletRequest;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

/**
 *
 * @author Conan
 */
@Component
public class HeaderRequestInterceptor implements RequestInterceptor {

    private static final String HEADER_PROFILE_USER_NAME = "X-Profile-UserName";
    
    @Autowired
    AuthenticationService authService;

    @Override
    public void apply(RequestTemplate requestTemplate) {
        ServletRequestAttributes requestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        if (requestAttributes == null) {
            return;
        }
        HttpServletRequest request = requestAttributes.getRequest();
        if (request == null) {
            return;
        }
        String userName = authService.getAuthenticatedUserName();
        
        if(StringUtils.isBlank(userName)) {
            return;
        }
        
        requestTemplate.header(HEADER_PROFILE_USER_NAME, userName);
    }

}
