package com.pms.portal.controller;

import com.google.gson.JsonSyntaxException;
import com.pms.portal.auth.AuthenticationServiceImpl;
import com.pms.portal.model.TestSub;
import com.pms.portal.service.WebPushNotificationService;
import java.io.IOException;
import java.security.GeneralSecurityException;

import java.security.Security;
import java.util.concurrent.ExecutionException;
import javax.servlet.http.HttpServletRequest;
import nl.martijndwars.webpush.Notification;
import nl.martijndwars.webpush.PushService;
import nl.martijndwars.webpush.Subscription;
import org.apache.commons.lang.exception.ExceptionUtils;
import org.apache.http.HttpResponse;
import org.bouncycastle.jce.provider.BouncyCastleProvider;
import org.jose4j.lang.JoseException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Lucas.Le
 */
@RestController
public class PushNotificationController {

    private static final Logger logger = LoggerFactory.getLogger(PushNotificationController.class);
    private static final String PUBLIC_KEY = "BNe-9TOPxbWCRxBGoO_e85uMxg21hd2AofAKleyUmJYOrNm24OITNDQoPy9cmJzzYtu1yi-PWemh0humx54SDsM";
    private static final String PRIVATE_KEY = "L38Chnr92EB1TkZTGUCiV1IkmNRIKWTQWWyMjWxpAlU";
    private static final String SUBJECT = "mailto:admin@domain.com";
    private static final String PAYLOAD = "{\"title\":\"Welcome You To Pms\",\"message\":\"Hi You\",\"icon\":\"/img/notification.png\",\"clickTarget\":\"http://localhost:7979\"}";

    @Autowired
    WebPushNotificationService webPushNotificationService;

    @Autowired
    AuthenticationServiceImpl authenticationServiceImpl;

    @RequestMapping(value = {"/subscribe"}, method = RequestMethod.POST)
    public void Subscribe(@RequestBody Subscription subscription) throws InterruptedException {
        long userId = authenticationServiceImpl.getLoggedInAccountInCache().getUserId();
        webPushNotificationService.insertUserWebPush(userId, subscription.endpoint, subscription.keys.p256dh, subscription.keys.auth);
//        webPushNotificationService.sendPushNotification(userId);
    }

    @RequestMapping(value = {"/unSubscribe"}, method = RequestMethod.POST)
    public void unSubscribe(@RequestBody String endpoint) throws InterruptedException {
        webPushNotificationService.deleteSubscriptionWebPushByEndpoint(endpoint);
    }

    @RequestMapping(value = "/send-noti")
    public void send() {
        long userId = authenticationServiceImpl.getLoggedInAccountInCache().getUserId();
        webPushNotificationService.sendPushNotification(userId);
    }

    @RequestMapping(value = "/send-noti-postman")
    public String sendNotiPostman(@RequestBody TestSub testSub) throws IOException {
        Subscription subscription = new Subscription(testSub.getEndpoint(), new Subscription().new Keys(testSub.getP256dh(), testSub.getAuth()));
        return sendPushNotification(subscription, testSub.getPayload());

    }

    public String sendPushNotification(Subscription subscription, String payload) {
        Security.addProvider(new BouncyCastleProvider());
        try {
            PushService pushService = new PushService(PUBLIC_KEY, PRIVATE_KEY, SUBJECT);
            Notification notification = new Notification(subscription, payload);
            HttpResponse httpResponse = pushService.send(notification);
            int statusCode = httpResponse.getStatusLine().getStatusCode();
            String json = "{\"status\":\"" + statusCode + "\"}";
            return json;
        } catch (JsonSyntaxException | IOException | InterruptedException | GeneralSecurityException | ExecutionException | JoseException e) {
            return ExceptionUtils.getStackTrace(e);
        }
    }
}
