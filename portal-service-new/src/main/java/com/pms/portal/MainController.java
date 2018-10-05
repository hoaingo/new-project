package com.pms.portal;

//import com.pms.model.SubscriptionDTO;
import com.pms.portal.auth.AuthenticationService;
//import com.pms.portal.config.ApplicationConfiguration;
import com.pms.portal.dao.MenuItemDAO;
//import com.pms.portal.ldap.UserLdapService;
//import com.pms.portal.model.FileDTO;
import com.pms.portal.model.MenuItem;
import com.pms.portal.model.WebSocket;
//import com.pms.portal.service.DowloadService;
import com.pms.portal.service.WebPushNotificationService;
//import com.pms.portal.service.ConfigFromDbService;
import java.io.IOException;
//import com.pms.portal.unit.MyGson;
//import java.io.ByteArrayInputStream;
//import java.io.File;
//import java.io.FileNotFoundException;
//import java.io.IOException;
//import java.io.InputStream;
//import java.util.HashMap;
import java.util.List;
import java.util.Objects;
import javax.servlet.http.HttpServletResponse;
//import java.util.Map;
import javax.sql.DataSource;
//import net.sf.jasperreports.engine.JRException;
//import net.sf.jasperreports.engine.data.JsonDataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

/**
 *
 * @author Lucas.Le
 */
@Controller

public class MainController {

//    @Autowired
//    ConfigFromDbService testConfigService;

//    @Autowired
//    ApplicationConfiguration applicationConfiguration;

    @Autowired
    AuthenticationService authService;
    @Autowired
    MenuItemDAO menuDAO;
    @Autowired
    WebSocket webSock;

//    @Autowired
//    ExportService exportService;
//    @Autowired
//    DowloadService dowloadService;

    @Autowired
    WebPushNotificationService webPushNotificationService;

    @Autowired
    private ApplicationContext appContext;

    @Autowired
    private DataSource dataSource;

   

    @RequestMapping("/get-menu-list")
    @ResponseBody
    public List<MenuItem> getMenuList() {
          
        return menuDAO.getMenuListByPermission(authService.getLoggedInAccount().getLstPermissions());
    }

    @RequestMapping(value = {"", "/"})
    public String homePage() {

        return "index";
    }

    @RequestMapping(value = {"/error"}, method = RequestMethod.GET)
    public ModelAndView method() {
        return new ModelAndView("redirect:/");

    }

    @GetMapping(path = {"{path:\\b(?!WebSocketEndPoint|resources|css|js|fonts|img|locales)\\b\\S+}/**"})
    public String index() {
        return "forward:/";
    }

    @RequestMapping(value = "/login")
    public ModelAndView login(ModelAndView model) {
        return new ModelAndView("login");
    }

//
//    @RequestMapping("/get-all-user-ldap")
//    @ResponseBody
//    public Object getAllUserLdap() {
//        return personDao.getAllUsers();
//    }
//    @RequestMapping(value = {"/rp"})
//    public ModelAndView report() throws JRException, FileNotFoundException, IOException {
//        File file = new File("e:/list_json.json");
//
//        List<SubscriptionDTO> listSub = webPushNotificationService.getListSubscriptionWebPushByUserId(6);
//        byte[] byteJson = MyGson.toByteArray(listSub);
//        InputStream stream = new ByteArrayInputStream(byteJson);
//        JsonDataSource dataSource = new JsonDataSource(stream);
//
//        Map<String, Object> params = new HashMap<>();
//        params.put("datasource", dataSource);
//        return new ModelAndView(exportService.report(), params);
//    @RequestMapping("/portal_service/download/{uuid}")
//    public String downloadDocument(@PathVariable String uuid, HttpServletResponse response) throws IOException {
//        FileDTO fileDTO = dowloadService.dowloadFileByDocumentUUUID(uuid);
//        Objects.requireNonNull(fileDTO, "Don't have file with uuid " + uuid + "");
//        response.setContentType(fileDTO.getFileType());
//        response.setContentLength(fileDTO.getData().length);
//        response.setHeader("Content-Disposition", "attachment; filename=\"" + fileDTO.getFileName() + "\"");
//        FileCopyUtils.copy(fileDTO.getData(), response.getOutputStream());
//        return "null";
//    }

   

//    @RequestMapping("/property")
//    @ResponseBody
//    public String resultConfig() {
//        return testConfigService.getTestConfig() + "===" + testConfigService.getUrlLdap();
//    }
//
//    @RequestMapping("/reload-config")
//    @ResponseBody
//    public void referesh() {
//        applicationConfiguration.init();
//    }

    @RequestMapping("/refresh-config")
    public String config() {

        return "config";
    }

}
