package com.pms.notification.dao;

import com.pms.jdbc.orm.RowMapperUtils;
import com.pms.model.NotificationDTO;
import com.pms.model.purchase_request.PRReviewDTO;
import com.pms.user.auth.UserSession;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Repository;

@Repository
public class NotificationDAOImpl implements NotificationDAO {

    private static final Logger logger = Logger.getLogger(NotificationDAOImpl.class.getName());
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Value("${up_pms_get_list_notification}")
    String getListNotification;

    @Value("${up_pms_get_all_list_notification}")
    String getAllListNotification;

    @Value("${up_pms_get_detail_notification}")
    String getDetailNotification;

    @Value("${up_pms_update_status_notification}")
    String updateStatusNotification;

    @Value("${up_pms_update_type_notification}")
    String updateTypeNotification;

    @Value("${up_pms_insert_notification}")
    String insertNotification;

    @Autowired
    UserSession userSession;

    @Override
    public List<NotificationDTO> getListNotificationByStatus(long userId, Boolean notificationStatus) {
        return jdbcTemplate.query(getListNotification, RowMapperUtils.getRowMapper(NotificationDTO.class), userId, notificationStatus);
    }

    @Override
    public List<NotificationDTO> getAllListNotification(long userId) {
        return jdbcTemplate.query(getAllListNotification, RowMapperUtils.getRowMapper(NotificationDTO.class), userId);
    }

    @Override
    public List<PRReviewDTO> getDetailNotification(long prId) {
        return jdbcTemplate.query(getDetailNotification, RowMapperUtils.getRowMapper(PRReviewDTO.class), prId);
    }

    @Override
    public Object updateNotificationStatus(NotificationDTO notification) {
        boolean isSuccess = false;
        try {
            isSuccess = jdbcTemplate.update(updateStatusNotification, notification.getId(), notification.getNotificationStatus()) > 0;
        } catch (Exception e) {
            logger.log(Level.SEVERE, "Cannot update notification status", e);
        }
        return isSuccess;
    }

    @Override
    public Object updateNotificationType(NotificationDTO notification) {
        boolean isSuccess = false;
        try {
        isSuccess = jdbcTemplate.update(updateTypeNotification, notification.getId(), notification.getNotificationType())>0;
        }catch (Exception e) {
            logger.log(Level.SEVERE, "Cannot update notification type", e);
        }
        return isSuccess;
    }

    @Override
    public boolean insertNotification(NotificationDTO notification) {
        boolean isSuccess = false;
        try {
            isSuccess = jdbcTemplate.update(insertNotification, notification.getPrId(), notification.getNotificationName(), notification.getNotificationContent(), notification.getNotificationStatus(), notification.getNotificationType(), notification.getUserId(), notification.getUrl()) > 0;
        } catch (Exception e) {
            logger.log(Level.SEVERE, "Cannot insert notification", e);
        }
        return isSuccess;
    }
}
