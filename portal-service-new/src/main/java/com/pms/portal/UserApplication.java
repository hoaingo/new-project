package com.pms.portal;

import com.pms.portal.auth.AuthenticationService;
import com.pms.portal.config.WebSocketConfig;
import com.pms.portal.config.WebSocketSecurityConfig;
import com.pms.portal.dao.MenuItemDAO;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RequestMethod;
import com.pms.portal.model.MenuItem;
import com.pms.portal.model.WebSocket;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.feign.EnableFeignClients;
import org.springframework.http.MediaType;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.context.annotation.Import;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.web.bind.annotation.RequestParam;

@SpringBootApplication
@EnableEurekaClient
@EnableFeignClients
@EnableGlobalMethodSecurity(prePostEnabled = true)
@EnableAsync
public class UserApplication {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Autowired
    AuthenticationService authService;
    @Autowired
    MenuItemDAO menuDAO;
    @Autowired
    WebSocket webSock;
//
//    @RequestMapping("/get-menu-by-role")
//    @ResponseBody
//    public List<MenuItem> getMenuListByPermission() {
//        return menuDAO.getMenuListByPermission(authService.getLoggedInAccount().getLstPermissions());
//    }
    
    @GetMapping(path = {"/", "{path:\\b(?!WebSocketEndPoint|resources)\\b\\w+}/**"}, produces = MediaType.TEXT_HTML_VALUE)
    public String index(HttpServletRequest request) {
        return "forward:/index.html";
    }

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public String login(Model model, String error, String logout) {
        if (error != null) {
            model.addAttribute("error", "Your username and password is invalid.");
        }
        if (logout != null) {
            model.addAttribute("message", "You have been logged out successfully.");
        }
        return "login";
    }

    @RequestMapping(value = {"/logout"})
    public String logout(HttpServletRequest request, HttpServletResponse response) throws Exception {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null) {
            new SecurityContextLogoutHandler().logout(request, response, auth);
        }
        return "redirect:/login?logout";

    }

    public static void main(String[] args) {
        new SpringApplicationBuilder(UserApplication.class)
                .web(true)
                .run(args);
    }

}
