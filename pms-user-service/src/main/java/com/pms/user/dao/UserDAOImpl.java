package com.pms.user.dao;

import com.pms.jdbc.orm.RowMapperUtils;
import com.pms.model.AccountDTO;
import com.pms.model.KeyValuePair;
import com.pms.model.ListAccountDTO;
import com.pms.model.ListPermissionNameDTO;
import com.pms.model.ListUserDTO;
import com.pms.model.MonthRevenueDTO;
import com.pms.user.auth.UserSession;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import com.pms.model.NotificationDTO;
import com.pms.model.ReportClassDTO;
import com.pms.model.ReportStudentDTO;
import com.pms.model.ReportTeacherDTO;
import com.pms.model.ShiftDTO;
import com.pms.model.paging.PageUtils;
import com.pms.model.paging.PagingResult;
import java.util.Collections;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.stream.Collectors;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;
import org.springframework.util.StringUtils;

/**
 *
 * @author Conan
 */
@Repository
public class UserDAOImpl implements UserDAO {

    private static final Logger logger = Logger.getLogger(UserDAOImpl.class.getName());
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Value("${up_pms_get_list_account}")
    String getListAccount;

    @Value("${up_pms_get_list_all_user_name}")
    String getListUserName;

    @Value("${up_pms_get_account_by_id}")
    String getAccountById;

    @Value("${up_pms_get_detail_account}")
    String getDetailAccount;

    @Value("${up_pms_update_account_by_id}")
    String updateAccountById;

    @Value("${up_pms_check_allow_insert_user_account}")
    String upPmsCheckAllowInsertUserAccount;

    @Value("${up_pms_insert_account}")
    String insertAccount;

    @Value("${up_pms_delete_account}")
    String deleteAccount;

    @Value("${up_pms_get_list_department}")
    String getListDepartment;

    @Value("${up_pms_get_role_name}")
    String getRoleName;

    @Value("${up_pms_get_department_by_id}")
    String getDepartmentById;

    @Value("${up_pms_get_list_all_data_new_account}")
    String getDataNewAccount;

//    @Value("${up_pms_get_list_department}")
//    String getListDepartment;
//    @Value("${up_pms_get_department_by_id}")
//    String getDepartmentById;
    @Value("${up_scm_get_account_shift}")
    String upScmGetAccountShift;

    @Value("${up_scm_get_list_permission_name}")
    String up_scm_get_list_permission_name;

    @Value("${up_scm_get_month_revenue}")
    String up_scm_get_month_revenue;

    @Value("${up_scm_get_report_student}")
    String up_scm_get_report_student;

    @Value("${up_scm_get_report_teacher}")
    String up_scm_get_report_teacher;

    @Value("${up_scm_get_report_class}")
    String up_scm_get_report_class;

    @Autowired
    UserSession userSession;

    public String hashPassword(String password) {

        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        return passwordEncoder.encode(password);
    }

    @Override
    public AccountDTO getAccountById(long userId) {
        List<AccountDTO> listAccount = jdbcTemplate.query(getAccountById, RowMapperUtils.getRowMapper(AccountDTO.class), userId);
        if (listAccount.isEmpty()) {
            listAccount = Collections.EMPTY_LIST;
        }
        return listAccount.get(0);
    }

    @Override
    public List<ListUserDTO> getListUserName() {
        return jdbcTemplate.query(getListUserName, RowMapperUtils.getRowMapper(ListUserDTO.class));

    }

    @Override
    public AccountDTO getDetailAccount(long userId) {
        return jdbcTemplate.queryForObject(getDetailAccount, RowMapperUtils.getRowMapper(AccountDTO.class), userId);
    }

    @Override
    public boolean updateAccount(AccountDTO account) {
        String newpass = null;
        if (!StringUtils.isEmpty(account.getPassword())) {
            newpass = hashPassword(account.getPassword());
        }
        boolean isSuccess = false;
        try {
            isSuccess = jdbcTemplate.update(updateAccountById,
                    account.getUserId(),
                    account.getUserName(),
                    account.getFullName(),
                    StringUtils.isEmpty(account.getPassword()) ? null : hashPassword(account.getPassword()),
                    account.getUserGender().toString(),
                    account.getUserPhone(),
                    account.getUserDateOfBirth(),
                    account.getUserAddress(),
                    account.getUserEmail(),
                    account.getStatus().toString(),
                    1,
                    account.getPermissions(),
                    1,
                    1,
                    userSession.getUserName()) > 0;
        } catch (DataAccessException e) {
            logger.log(Level.SEVERE, "Cannot update user", e);
        }
        return isSuccess;
    }

    @Override
    public boolean updateAccountProfile(AccountDTO account) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String existingPassword = account.getCurrentPassword();
        String dbPassword = getAccountById(account.getUserId()).getPassword();
        boolean isSuccess = false;
//        if (passwordEncoder.matches(existingPassword, dbPassword)) {
//            try {
//                isSuccess = jdbcTemplate.update(updateAccountById,
//                        account.getUserId(),
//                        account.getUserName(),
//                        account.getFullName(),
//                        StringUtils.isEmpty(account.getPassword()) ? null : hashPassword(account.getPassword()),
//                        null,
//                        null,
//                        null,
//                        null,
//                        userSession.getUserName()) > 0;
//
//            } catch (DataAccessException e) {
//                logger.log(Level.SEVERE, "Cannot update user", e);
//            }
//        }
        return isSuccess;
    }

    @Override
    public boolean insertAccount(AccountDTO account) {

        boolean isSuccess = false;
        try {
//            isSuccess = jdbcTemplate.queryForObject(upPmsCheckAllowInsertUserAccount, boolean.class, account.getUserName());
            isSuccess = jdbcTemplate.update(insertAccount,
                    account.getUserName(),
                    account.getFullName(),
                    StringUtils.isEmpty(account.getPassword()) ? null : hashPassword(account.getPassword()),
                    account.getUserGender().toString(),
                    account.getUserPhone(),
                    account.getUserDateOfBirth(),
                    account.getUserAddress(),
                    account.getUserEmail(),
                    account.getStatus().toString(),
                    1,
                    account.getPermissions(),
                    1,
                    1,
                    userSession.getUserName(),
                    1) > 0;

        } catch (DataAccessException e) {
            logger.log(Level.SEVERE, "Cannot insert user", e);
            isSuccess = false;
        }
        return isSuccess;
    }

    @Override
    public NotificationDTO deleteAccount(AccountDTO account) {
        NotificationDTO notification = new NotificationDTO();
        try {
            if (jdbcTemplate.update(deleteAccount, account.getUserId()) > 0) {
                notification.setNotificationContent(userSession.getUserName() + " has been deleted user " + account.getUserName());
                notification.setUserId(0);
                notification.setNotificationName("Delete account");
                notification.setNotificationStatus(false);
                notification.setNotificationType("read");
            }
        } catch (Exception e) {
            logger.log(Level.SEVERE, "Cannot delete user", e);
        }
        return notification;
    }

//    @Override
//    public List<AccountDTO> getListAccount() {
//        List<AccountDTO> listAccount = jdbcTemplate.query(getListAccount, RowMapperUtils.getRowMapper(AccountDTO.class));
//        if (!listAccount.isEmpty()) {
//            listAccount.forEach(account -> {
//                List<RoleDTO> lstRolePermission = jdbcTemplate.query(getRoleName, RowMapperUtils.getRowMapper(RoleDTO.class), account.getListRolesId());
//                if (!lstRolePermission.isEmpty()) {
//                    account.setListRoleName(lstRolePermission.stream()
//                            .map(s -> s.getRoleName())
//                            .collect(Collectors.joining(",")));
//                }
//            });
//        }
//        return listAccount;
//    }
    @Override
    public PagingResult<ListAccountDTO> getListAccount(int page, int limit, String userName, String roleName) {
        List<ListAccountDTO> listAccount = jdbcTemplate.query(getListAccount,
                RowMapperUtils.getRowMapper(ListAccountDTO.class),
                PageUtils.convertToOffset(page, limit),
                limit, userName, roleName);

        return new PagingResult<>(listAccount, page, limit);

    }

    @Override
    public Map<String, List<KeyValuePair>> getDataNewAccount() {
        List<KeyValuePair> list = jdbcTemplate.query(getDataNewAccount, RowMapperUtils.getRowMapper(KeyValuePair.class));
        return list.stream().collect(Collectors.groupingBy(KeyValuePair::getType, Collectors.toList()));
    }

    @Override
    public AccountDTO getAccountSchedule(AccountDTO objAccount) {
        AccountDTO account = new AccountDTO();
        try {
            List<ShiftDTO> listShift = jdbcTemplate.query(upScmGetAccountShift, RowMapperUtils.getRowMapper(ShiftDTO.class), objAccount.getUserId());
            account.setListShift(listShift);
        } catch (Exception e) {
            logger.log(Level.SEVERE, "Cannot get user schedule", e);
        }
        return account;
    }

    @Override
    public List<ListPermissionNameDTO> getListPermissionName() {
        return jdbcTemplate.query(up_scm_get_list_permission_name, RowMapperUtils.getRowMapper(ListPermissionNameDTO.class));
    }

    @Override
    public List<MonthRevenueDTO> getMonthRevenue() {
        return jdbcTemplate.query(up_scm_get_month_revenue, RowMapperUtils.getRowMapper(MonthRevenueDTO.class));
    }

    @Override
    public List<ReportStudentDTO> getReportStudent() {
        return jdbcTemplate.query(up_scm_get_report_student, RowMapperUtils.getRowMapper(ReportStudentDTO.class));
    }

    @Override
    public List<ReportTeacherDTO> getReportTeacher() {
        return jdbcTemplate.query(up_scm_get_report_teacher, RowMapperUtils.getRowMapper(ReportTeacherDTO.class));
    }

    @Override
    public List<ReportClassDTO> getReportClass() {
        try {
            return jdbcTemplate.query(up_scm_get_report_class, RowMapperUtils.getRowMapper(ReportClassDTO.class));
        } catch (Exception ex) {
            return jdbcTemplate.query(up_scm_get_report_class, RowMapperUtils.getRowMapper(ReportClassDTO.class));
        }
    }
}
