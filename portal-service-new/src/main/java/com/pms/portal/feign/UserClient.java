package com.pms.portal.feign;

import com.pms.model.AccountDTO;
import com.pms.model.KeyValuePair;
import com.pms.model.ListAccountDTO;
import com.pms.model.ListPermissionNameDTO;
import com.pms.model.ListUserDTO;
import com.pms.model.MonthRevenueDTO;
import com.pms.model.NotificationDTO;
import com.pms.model.ReportClassDTO;
import com.pms.model.ReportStudentDTO;
import com.pms.model.ReportTeacherDTO;
import com.pms.model.paging.PagingResult;
import java.util.List;
import java.util.Map;
import org.springframework.cloud.netflix.feign.EnableFeignClients;
import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *
 * @author gohan.intern
 */
@EnableFeignClients
@FeignClient("admin-service")
public interface UserClient {

    @RequestMapping(value = "/scm/accounts/get-account-by-id", method = GET)
    AccountDTO getAccount(@RequestParam("userId") long userId);

    @RequestMapping(value = "/scm/accounts/get-detail-account", method = GET)
    AccountDTO getDetailAccount(@RequestParam("userId") long userId);

    @RequestMapping(value = "/scm/accounts/get-list-user-name", method = GET)
    List<ListUserDTO> getListUserName();

    @RequestMapping(value = "/scm/accounts/get-all-account", method = GET)
    public PagingResult<ListAccountDTO> getListAccount(
            @RequestParam("page") int page,
            @RequestParam("limit") int limit,
            @RequestParam("userName") String userName,
            @RequestParam("roleName") String roleName);

    @RequestMapping(value = "/scm/accounts/update-account", method = POST)
    boolean updateAccount(@RequestBody AccountDTO account);

    @RequestMapping(value = "/scm/accounts/update-account-profile", method = POST)
    boolean updateAccountProfile(@RequestBody AccountDTO account);

    @RequestMapping(value = "/scm/accounts/insert-account", method = POST)
    boolean insertAccount(@RequestBody AccountDTO account);

    @RequestMapping(value = "/scm/accounts/delete-account", method = POST)
    NotificationDTO deleteAccount(@RequestBody AccountDTO account);

    @RequestMapping(value = "/scm/accounts/get-data-new-account", method = GET)
    Map<String, List<KeyValuePair>> getDataNewAccount();

    @RequestMapping(value = "/scm/accounts/get-account-shift", method = POST)
    AccountDTO getAccountSchedule(@RequestBody AccountDTO objAccount);

    @RequestMapping(value = "/scm/accounts/get-list-permission-name", method = GET)
    List<ListPermissionNameDTO> getListPermissionName();

    @RequestMapping(value = "/scm/accounts/get-month-revenue", method = GET)
    List<MonthRevenueDTO> getMonthRevenue();

    @RequestMapping(value = "/scm/accounts/get-report-student", method = GET)
    List<ReportStudentDTO> getReportStudent();

    @RequestMapping(value = "/scm/accounts/get-report-teacher", method = GET)
    List<ReportTeacherDTO> getReportTeacher();
    
    @RequestMapping(value = "/scm/accounts/get-report-class", method = GET)
    List<ReportClassDTO> getReportClass();
}
