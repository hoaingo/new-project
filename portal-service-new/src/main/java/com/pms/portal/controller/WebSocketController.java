package com.pms.portal.controller;

import com.pms.portal.model.WebSocket;
import com.pms.model.NotificationDTO;
import com.pms.portal.feign.NotificationClient;
import com.pms.portal.feign.UserClient;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import org.springframework.web.bind.annotation.RestController;

/**
 * This controller is only use for testing
 * @author john.intern
 */
@RestController
public class WebSocketController {

    @Autowired
    WebSocket webSocket;
    @Autowired
    NotificationClient notificationClient;
    @Autowired
    UserClient userClient;
    
    @RequestMapping(value = {"/send/{user}/{message}"}, method = RequestMethod.GET)
    public void sendToOneUser(@PathVariable String user, @PathVariable String message) {

        webSocket.sendMessageToOne(user,message);
    }
    @RequestMapping(value = {"/send/{message}"}, method = RequestMethod.GET)
    public void sendToAllUser( @PathVariable String message) {
        webSocket.sendMessageToAll(message);
    }
    @RequestMapping(value = "/pms/notifications/insert-notification", method = POST)
    public boolean getNotification(@RequestBody  NotificationDTO notification) {
        webSocket.sendMessage(notification,null);
        return notificationClient.insertNotification(notification);
    }
}
