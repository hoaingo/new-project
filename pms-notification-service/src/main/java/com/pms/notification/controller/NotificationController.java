package com.pms.notification.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import com.pms.model.NotificationDTO;
import com.pms.model.purchase_request.PRReviewDTO;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import com.pms.notification.dao.NotificationDAO;

/**
 *
 * @author Darik.intern
 */
@RestController
@RequestMapping("/pms/notifications")
public class NotificationController {

    @Autowired
    NotificationDAO notificationDAO;

    @RequestMapping("/get-list-notification-by-status")
    public List<NotificationDTO> getListNotificationByStatus(@RequestParam("userId") long userId,@RequestParam("notificationStatus") Boolean notificationStatus) {
        return notificationDAO.getListNotificationByStatus(userId , notificationStatus);
    }
    
    @RequestMapping("/get-all-list-notification")
    public List<NotificationDTO> getAllListNotification(@RequestParam("userId") long userId) {
        return notificationDAO.getAllListNotification(userId);
    }
    
    @RequestMapping("/get-detail-notification")
    public List<PRReviewDTO> getDetailNotification(@RequestParam("prId") long prId) {
        return notificationDAO.getDetailNotification(prId);
    }
    @RequestMapping(value = "/update-notification-status", method = POST)
    public  Object updateNotificationStatus(@RequestBody NotificationDTO notification) {
        return  notificationDAO.updateNotificationStatus(notification);
        
    }
    
    @RequestMapping(value = "/update-notification-type", method = POST)
    public  Object updateNotificationType(@RequestBody NotificationDTO notification) {
        return  notificationDAO.updateNotificationType(notification);
        
    }
    
    @RequestMapping(value = "/insert-notification", method = POST)
    public  boolean insertNotification(@RequestBody NotificationDTO notification) {
        return  notificationDAO.insertNotification(notification);
        
    }
    
   
    
    
    
  
            
}
