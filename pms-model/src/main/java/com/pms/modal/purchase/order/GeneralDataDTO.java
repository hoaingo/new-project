package com.pms.modal.purchase.order;


import com.pms.jdbc.orm.Key;

public class GeneralDataDTO {
    @Key(value = "id")
    String id;
    
    @Key(value = "name")
    String name;
    
    @Key(value = "data")
    String data;
    
    @Key(value = "type")
    String type;

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

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
