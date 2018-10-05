package com.pms.user.dao;

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
import org.springframework.web.bind.annotation.RequestMapping;
import static org.springframework.web.bind.annotation.RequestMethod.GET;

/**
 *
 * @author Conan
 */
public interface UserDAO {

    AccountDTO getAccountById(long userId);

    AccountDTO getDetailAccount(long userId);

    List<ListUserDTO> getListUserName();

    boolean updateAccount(AccountDTO account);

    boolean updateAccountProfile(AccountDTO account);

    boolean insertAccount(AccountDTO account);

    NotificationDTO deleteAccount(AccountDTO account);

    PagingResult<ListAccountDTO> getListAccount(int page, int limit, String userName, String roleName);

    Map<String, List<KeyValuePair>> getDataNewAccount();
    
    AccountDTO getAccountSchedule(AccountDTO objAccount);
    
     List<ListPermissionNameDTO> getListPermissionName();
     
    List<MonthRevenueDTO> getMonthRevenue();

    List<ReportStudentDTO> getReportStudent();

    List<ReportTeacherDTO> getReportTeacher();

    List<ReportClassDTO> getReportClass();
}
