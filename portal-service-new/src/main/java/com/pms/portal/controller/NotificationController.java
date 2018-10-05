package com.pms.portal.controller;

import com.pms.model.NotificationDTO;
import com.pms.model.purchase_request.PRReviewDTO;
import com.pms.portal.auth.AuthenticationService;
import com.pms.portal.feign.NotificationClient;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author darik.intern
 */
@RestController
@RequestMapping("pms/notifications")
public class NotificationController {
    
    @Autowired
    NotificationClient notificationClient;

    @Autowired
    AuthenticationService authService;
    
    @RequestMapping("/get-list-notification-by-status")
    public List<NotificationDTO> getListNotificationByStatus(@RequestParam("notificationStatus") Boolean notificationStatus) {
        return notificationClient.getListNotificationByStatus(authService.getLoggedInAccountInCache().getUserId() , notificationStatus);
    }
    
    @RequestMapping("/get-all-list-notification")
    public List<NotificationDTO> getAllListNotification() {
        return notificationClient.getAllListNotification(authService.getLoggedInAccountInCache().getUserId());
    }
    
    @RequestMapping("/get-detail-notification")
    public List<PRReviewDTO> getDetailNotification(@RequestParam("prId") long prId) {
        return notificationClient.getDetailNotification(prId);
    }
    
    @RequestMapping(value ="/update-notification-status" , method = POST )
    public Object updateNotificationStatus(@RequestBody NotificationDTO notification) {
       return notificationClient.updateNotificationStatus(notification);
    }
    
    @RequestMapping(value ="/update-notification-type" , method = POST )
    public Object updateNotificationType(@RequestBody NotificationDTO notification) {
       return notificationClient.updateNotificationType(notification);
    }
    
}
