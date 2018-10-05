package com.pms.model;

import com.pms.jdbc.orm.Key;

/**
 *
 * @author darik.intern
 */
public class NotificationDTO {
    
    @Key(value = "id")
    int id;
    @Key(value = "notification_name")
    String notificationName;
    @Key(value = "notification_content")
    String notificationContent;
    @Key(value = "notification_type")
    String notificationType;
    @Key(value = "notification_status")
    Boolean notificationStatus;
    @Key(value = "user_id")
    int userId;
    @Key(value = "pr_id")
    int prId;
    @Key(value = "url")
    String url;
    
    public String getNotificationType() {
        return notificationType;
    }

    public void setNotificationType(String notificationType) {
        this.notificationType = notificationType;
    }

    public int getUserId() {
        return userId;
    }

    public int getPrId() {
        return prId;
    }

    public void setPrId(int prId) {
        this.prId = prId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNotificationName() {
        return notificationName;
    }

    public void setNotificationName(String notificationName) {
        this.notificationName = notificationName;
    }

    public String getNotificationContent() {
        return notificationContent;
    }

    public void setNotificationContent(String notificationContent) {
        this.notificationContent = notificationContent;
    }

    public Boolean getNotificationStatus() {
        return notificationStatus;
    }

    public void setNotificationStatus(Boolean notificationStatus) {
        this.notificationStatus = notificationStatus;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

}
