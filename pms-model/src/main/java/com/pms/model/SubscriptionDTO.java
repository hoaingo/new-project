package com.pms.model;

import com.pms.jdbc.orm.Key;

/**
 *
 * @author Lucas.Le
 */
public class SubscriptionDTO {

    @Key(value = "id")
    private int id;
    @Key(value = "endpoint")
    private String endpoint;
    @Key(value = "p256dh")
    private String p256dh;
    @Key(value = "auth")
    private String auth;

    public String getEndpoint() {
        return endpoint;
    }

    public void setEndpoint(String endpoint) {
        this.endpoint = endpoint;
    }

    public String getP256dh() {
        return p256dh;
    }

    public void setP256dh(String p256dh) {
        this.p256dh = p256dh;
    }

    public String getAuth() {
        return auth;
    }

    public void setAuth(String auth) {
        this.auth = auth;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

}
