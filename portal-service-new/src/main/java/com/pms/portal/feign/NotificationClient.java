package com.pms.portal.feign;

import com.pms.model.NotificationDTO;
import com.pms.model.purchase_request.PRReviewDTO;
import java.util.List;
import org.springframework.cloud.netflix.feign.EnableFeignClients;
import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *
 * @author darik.intern
 */
@Configuration
@EnableFeignClients

@FeignClient("notification-service")
public interface NotificationClient {
    
    @RequestMapping(value ="/pms/notifications/get-list-notification-by-status", method = GET)
    List<NotificationDTO> getListNotificationByStatus(@RequestParam("userId") long userId,@RequestParam("notificationStatus") Boolean notificationStatus);
    
    @RequestMapping(value ="/pms/notifications/get-all-list-notification", method = GET)
    List<NotificationDTO> getAllListNotification(@RequestParam("userId") long userId);
    
    @RequestMapping(value = "/pms/notifications/get-detail-notification", method = GET)
    List<PRReviewDTO> getDetailNotification(@RequestParam("prId") long prId);
    
    @RequestMapping(value = "/pms/notifications/update-notification-status", method = POST)
    Object updateNotificationStatus(@RequestBody NotificationDTO notification);
    
    @RequestMapping(value = "/pms/notifications/update-notification-type", method = POST)
    Object updateNotificationType(@RequestBody NotificationDTO notification);
    
    @RequestMapping(value = "/pms/notifications/insert-notification", method = POST)
    boolean insertNotification(@RequestBody NotificationDTO notification);
}
