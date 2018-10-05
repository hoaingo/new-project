package com.pms.user.controller;

import com.pms.user.dao.UserDAO;
import com.pms.model.AccountDTO;
import com.pms.model.ListAccountDTO;
import com.pms.model.ListUserDTO;
import com.pms.model.paging.PagingResult;
import org.springframework.beans.factory.annotation.Autowired;
import com.pms.model.KeyValuePair;
import com.pms.model.ListPermissionNameDTO;
import com.pms.model.MonthRevenueDTO;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.pms.model.NotificationDTO;
import com.pms.model.ReportClassDTO;
import com.pms.model.ReportStudentDTO;
import com.pms.model.ReportTeacherDTO;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import java.util.Map;
import static org.springframework.web.bind.annotation.RequestMethod.GET;

/**
 *
 * @author Conan
 */
@RestController
@RequestMapping("/scm/accounts")
public class UserController {

    @Autowired
    UserDAO userDAO;

    @RequestMapping("/get-account-by-id")
    public AccountDTO getAccount(@RequestParam("userId") long userId) {
        return userDAO.getAccountById(userId);
    }

    @RequestMapping("/get-detail-account")
    public AccountDTO getDetailAccount(@RequestParam("userId") long userId) {
        return userDAO.getDetailAccount(userId);
    }

    @RequestMapping("/get-list-user-name")
    public List<ListUserDTO> getListUserName() {
        return userDAO.getListUserName();
    }

    @RequestMapping("/get-list-permission-name")
    public List<ListPermissionNameDTO> getListPermissionName() {
        return userDAO.getListPermissionName();
    }

    @RequestMapping(value = "/get-all-account", method = GET)
    public PagingResult<ListAccountDTO> getAccountAndRole(
            @RequestParam("page") int page,
            @RequestParam("limit") int limit,
            @RequestParam("userName") String userName,
            @RequestParam("roleName") String roleName) {
        return userDAO.getListAccount(page, limit, userName, roleName);
    }

    @RequestMapping("/get-data-new-account")
    public Map<String, List<KeyValuePair>> getDataNewAccount() {
        return userDAO.getDataNewAccount();
    }

    @RequestMapping(value = "/update-account", method = POST)
    public boolean updateAccount(@RequestBody AccountDTO account) {
        return userDAO.updateAccount(account);
    }

    @RequestMapping(value = "/update-account-profile", method = POST)
    public boolean updateAccountProfile(@RequestBody AccountDTO account) {
        return userDAO.updateAccountProfile(account);
    }

    @RequestMapping(value = "/insert-account", method = POST)
    public boolean insertAccount(@RequestBody AccountDTO account) {
        return userDAO.insertAccount(account);
    }

    @RequestMapping(value = "/delete-account", method = POST)
    public NotificationDTO deleteAccount(@RequestBody AccountDTO account) {
        return userDAO.deleteAccount(account);
    }

    @RequestMapping(value = "/get-account-shift", method = POST)
    public AccountDTO getAccountSchedule(@RequestBody AccountDTO objAccount) {
        return userDAO.getAccountSchedule(objAccount);
    }

    @RequestMapping(value = "/get-month-revenue", method = GET)
    List<MonthRevenueDTO> getMonthRevenue() {
        return userDAO.getMonthRevenue();
    }

    @RequestMapping(value = "/get-report-student", method = GET)
    List<ReportStudentDTO> getReportStudent() {
        return userDAO.getReportStudent();
    }

    @RequestMapping(value = "/get-report-teacher", method = GET)
    List<ReportTeacherDTO> getReportTeacher() {
        return userDAO.getReportTeacher();
    }

    @RequestMapping(value = "/get-report-class", method = GET)
    List<ReportClassDTO> getReportClass() {
        return userDAO.getReportClass();
    }
}
