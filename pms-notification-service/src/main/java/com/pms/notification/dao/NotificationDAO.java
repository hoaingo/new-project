package com.pms.notification.dao;

import com.pms.model.NotificationDTO;
import com.pms.model.purchase_request.PRReviewDTO;
import java.util.List;

/**
 *
 * @author Darik.intern
 */
public interface NotificationDAO {
    List<NotificationDTO> getListNotificationByStatus(long userId , Boolean  notificationStatus);
    List<NotificationDTO> getAllListNotification(long userId);
    List<PRReviewDTO> getDetailNotification(long prId);
    Object updateNotificationStatus(NotificationDTO notification);
    Object updateNotificationType(NotificationDTO notification);
    boolean insertNotification(NotificationDTO notification);
    
 
    
}
