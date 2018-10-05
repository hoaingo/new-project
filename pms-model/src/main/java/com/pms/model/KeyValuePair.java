package com.pms.model;

import com.pms.jdbc.orm.Key;

/**
 *
 * @author Conan
 */
public class KeyValuePair {

    @Key(value = "id")
    String id;

    @Key(value = "name")
    String name;

    @Key(value = "type")
    String type;
    
    @Key(value = "extra", required = false)
    String extra;

    @Key(value = "extra2", required = false)
    String extra2;
    
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getExtra() {
        return extra;
    }

    public void setExtra(String extra) {
        this.extra = extra;
    }

    public String getExtra2() {
        return extra2;
    }

    public void setExtra2(String extra2) {
        this.extra2 = extra2;
    }
    
}
