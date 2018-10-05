package com.pms.portal.model;

import com.pms.model.NotificationDTO;
import com.pms.portal.feign.NotificationClient;
import com.pms.portal.feign.UserClient;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.messaging.simp.SimpMessageSendingOperations;

/**
 *
 * @author john.intern
 */
@Component
public class WebSocket {

    @Autowired
    public SimpMessageSendingOperations messagingTemplate;
    @Autowired
    NotificationClient notificationClient;
    @Autowired
    UserClient userClient;

    public void sendMessage(NotificationDTO notification, List<Map<String,Object>>  listUserId) {
//        List<Map<String,Object>>  listUser = new ArrayList();
//        Map<String,Object> dsds = new HashMap();
//        dsds.put("user_name", "conan");
//        listUser.add(dsds);
        Map<String, Object> res = new HashMap<>();
        res.put("type", "success");
        res.put("message", notification.getNotificationContent());
        res.put("url", notification.getUrl());
        if(listUserId.isEmpty())
        {     
            notificationClient.insertNotification(notification);  
            messagingTemplate.convertAndSend("/topic/sendMessengerToAllUser", res);
        }
        else
        {   
            listUserId.stream().forEach( userId ->{
                    userId.entrySet().stream()
                            .filter(map -> map.getKey().equals("user_id"))
                            .forEach(d -> {
                                notification.setUserId(Integer.parseInt(d.getValue().toString()));
                                notificationClient.insertNotification(notification); 
                            });
                     userId.entrySet().stream()
                            .filter(map -> map.getKey().equals("user_name"))
                            .forEach(d -> {
                                messagingTemplate.convertAndSendToUser(d.getValue().toString(),"/topic/sendMessengerToOneUser", res);
                            });
                });
        }
    }
    public void sendMessageToOne(String username,String notifiContent) {
        Map<String, Object> res = new HashMap<>();
            res.put("type", "success");
            res.put("message", notifiContent);
            res.put("url", "");
        messagingTemplate.convertAndSendToUser(username,"/topic/sendMessengerToOneUser", res);
    }
    public void sendMessageToAll(String notifiContent) {
        Map<String, Object> res = new HashMap<>();
            res.put("type", "success");
            res.put("message", notifiContent);
            res.put("url", "");
        messagingTemplate.convertAndSend("/topic/sendMessengerToAllUser", res);
    }
}
