package com.pms.portal.controller;

import com.pms.portal.auth.AuthenticationService;
import com.pms.portal.feign.UserClient;
import com.pms.model.AccountDTO;
import com.pms.model.KeyValuePair;
import com.pms.model.ListAccountDTO;
import com.pms.model.ListPermissionNameDTO;
import com.pms.model.ListUserDTO;
import com.pms.model.MonthRevenueDTO;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import com.pms.model.NotificationDTO;
import com.pms.model.ReportClassDTO;
import com.pms.model.ReportStudentDTO;
import com.pms.model.ReportTeacherDTO;
import com.pms.model.paging.PagingResult;
import com.pms.portal.model.Account;
import com.pms.portal.model.WebSocket;
import java.util.Map;
import org.springframework.security.access.prepost.PreAuthorize;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author gohan.intern
 */
@RestController
@RequestMapping("/scm/accounts")
public class UserController {

    @Autowired
    UserClient client;
    @Autowired
    AuthenticationService authService;
    @Autowired
    WebSocket websocket;

    @RequestMapping("/detail-account")
    public Account getDetail() {
        return authService.getLoggedInAccount();
    }

    @RequestMapping("/get-list-user-name")
    public List<ListUserDTO> getListUserName() {
        return client.getListUserName();
    }

    @RequestMapping("/get-all-account")
    public PagingResult<ListAccountDTO> getListAccount(
            @RequestParam("page") int page,
            @RequestParam("limit") int limit,
            @RequestParam("userName") String userName,
            @RequestParam("roleName") String roleName) {
        return client.getListAccount(page, limit, userName, roleName);
    }

    @RequestMapping("/get-account-by-id")
    public AccountDTO getAccount() {
        return client.getAccount(authService.getLoggedInAccountInCache().getUserId());
    }

    @RequestMapping("/get-detail-account")
    public AccountDTO getDetailAccount(@RequestParam("userId") long userId) {
        return client.getDetailAccount(userId);
    }

    @PreAuthorize("hasAnyAuthority('SUPER_USER','ADMIN','APPROVER_REVIEWER')")
    @RequestMapping(value = "/update-account", method = POST)
    public boolean updateAccount(@RequestBody AccountDTO account) {
        return client.updateAccount(account);
    }

    @PreAuthorize("hasAnyAuthority('SUPER_USER','ADMIN','APPROVER_REVIEWER')")
    @RequestMapping(value = "/update-account-profile", method = POST)
    public boolean updateAccountProfile(@RequestBody AccountDTO account) {
        return client.updateAccountProfile(account);
    }

    @PreAuthorize("hasAnyAuthority('SUPER_USER','ADMIN','APPROVER_REVIEWER')")
    @RequestMapping(value = "/insert-account", method = POST)
    public boolean insertAccount(@RequestBody AccountDTO account) {
        return client.insertAccount(account);
    }

    @PreAuthorize("hasAnyAuthority('SUPER_USER','ADMIN')")
    @RequestMapping(value = "/delete-account", method = POST)
    public boolean deleteAccount(@RequestBody AccountDTO account) {
        NotificationDTO notification = client.deleteAccount(account);
        if (notification != null) {
            List<Map<String, Object>> listUserId = authService.getUserByDepartmentType("PD_CLERK");
            websocket.sendMessage(notification, listUserId);
        }
        return notification != null;
    }

    @RequestMapping("/get-data-new-account")
    public Map<String, List<KeyValuePair>> getDataNewAccount() {
        return client.getDataNewAccount();
    }

    @RequestMapping(value = "/get-account-shift", method = POST)
    public AccountDTO getAccountSchedule(@RequestBody AccountDTO objAccount) {
        return client.getAccountSchedule(objAccount);
    }

    @RequestMapping("/get-list-permission-name")
    public List<ListPermissionNameDTO> getListPermissionName() {
        return client.getListPermissionName();
    }

    @RequestMapping(value = "/get-month-revenue", method = GET)
    List<MonthRevenueDTO> getMonthRevenue() {
        return client.getMonthRevenue();
    }

    @RequestMapping(value = "/get-report-student", method = GET)
    List<ReportStudentDTO> getReportStudent() {
        return client.getReportStudent();
    }

    @RequestMapping(value = "/get-report-teacher", method = GET)
    List<ReportTeacherDTO> getReportTeacher() {
        return client.getReportTeacher();
    }

    @RequestMapping(value = "/get-report-class", method = GET)
    List<ReportClassDTO> getReportClass() {
        return client.getReportClass();
    }
}
