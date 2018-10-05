package com.pms.portal.service;

import com.google.gson.JsonSyntaxException;
import com.pms.jdbc.orm.RowMapperUtils;
import java.io.IOException;
import java.security.GeneralSecurityException;
import java.security.Security;
import java.util.List;
import java.util.concurrent.ExecutionException;
import nl.martijndwars.webpush.Notification;
import nl.martijndwars.webpush.PushService;
import nl.martijndwars.webpush.Subscription;
import org.apache.http.HttpResponse;
import org.bouncycastle.jce.provider.BouncyCastleProvider;
import org.jose4j.lang.JoseException;
import com.pms.model.SubscriptionDTO;
import com.pms.portal.auth.AuthenticationServiceImpl;
import java.security.NoSuchAlgorithmException;
import java.security.NoSuchProviderException;
import java.security.spec.InvalidKeySpecException;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Repository;

@Repository
public class WebPushNotificationService {

    private static final Logger logger = Logger.getLogger(WebPushNotificationService.class.getName());

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Value("${up_pms_get_list_subscription_web_push_by_user_id}")
    private String upPmsGetListSubscriptionWebPushByUserId;

    @Value("${up_pms_delete_one_record_user_web_push_by_id}")
    private String upPmsDeleteOneRecordUserWebPushById;

    @Value("${up_pms_delete_one_record_user_web_push_by_endpoint}")
    private String upPmsDeleteOneRecordUserWebPushByEndpoint;

    @Value("${up_pms_insert_user_web_push}")
    private String upPmsInsertUserWebPush;

    @Autowired
    AuthenticationServiceImpl authenticationServiceImpl;

    private static final String PUBLIC_KEY = "BNe-9TOPxbWCRxBGoO_e85uMxg21hd2AofAKleyUmJYOrNm24OITNDQoPy9cmJzzYtu1yi-PWemh0humx54SDsM";
    private static final String PRIVATE_KEY = "L38Chnr92EB1TkZTGUCiV1IkmNRIKWTQWWyMjWxpAlU";
    private static final String SUBJECT = "mailto:fifavip96@gmail.com";
    private static final String PAYLOAD = "{\"title\":\"Welcome You To Pms\",\"message\":\"Hi You\",\"icon\":\"/img/notification.png\",\"clickTarget\":\"http://localhost:7979\"}";

    @Async
    public void sendPushNotification(long userId) {
        Security.addProvider(new BouncyCastleProvider());
        try {
            PushService pushService = new PushService(PUBLIC_KEY, PRIVATE_KEY, SUBJECT);
            List<SubscriptionDTO> listSubscription = getListSubscriptionWebPushByUserId(userId);
            listSubscription.forEach(sub -> {
                try {
                    Subscription subscription = new Subscription(sub.getEndpoint(), new Subscription().new Keys(sub.getP256dh(), sub.getAuth()));
                    Notification notification = new Notification(subscription, PAYLOAD);
                    HttpResponse httpResponse = pushService.send(notification);
                    int statusCode = httpResponse.getStatusLine().getStatusCode();
                    if (statusCode != 201) {
                        deleteSubscriptionWebPushById(sub.getId());
                    }
                    Thread.sleep(1000);
                } catch (NoSuchAlgorithmException | NoSuchProviderException | InvalidKeySpecException ex) {
                    logger.log(Level.WARNING, "send push notification error", ex);
                } catch (GeneralSecurityException | IOException | JoseException | ExecutionException | InterruptedException ex) {
                    logger.log(Level.WARNING, "send push notification error", ex);
                }
            });
        } catch (JsonSyntaxException | GeneralSecurityException e) {
            logger.log(Level.WARNING, "send push notification error", e);
        }

    }

    public List<SubscriptionDTO> getListSubscriptionWebPushByUserId(long userId) {
        return jdbcTemplate.query(upPmsGetListSubscriptionWebPushByUserId, RowMapperUtils.getRowMapper(SubscriptionDTO.class), userId);
    }

    @Async
    public void deleteSubscriptionWebPushById(long id) throws InterruptedException {
        jdbcTemplate.update(upPmsDeleteOneRecordUserWebPushById, id);
        Thread.sleep(1000);
    }

    @Async
    public void deleteSubscriptionWebPushByEndpoint(String endpoint) throws InterruptedException {
        jdbcTemplate.update(upPmsDeleteOneRecordUserWebPushByEndpoint, endpoint);
        Thread.sleep(1000);
    }

    public void insertUserWebPush(long userId, String endPoint, String p256dh, String auth) throws InterruptedException {
        jdbcTemplate.update(upPmsInsertUserWebPush, userId, endPoint, p256dh, auth);

    }

}
