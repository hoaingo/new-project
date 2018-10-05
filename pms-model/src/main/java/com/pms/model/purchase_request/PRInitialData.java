package com.pms.model.purchase_request;

import com.pms.jdbc.orm.Key;

/**
 *
 * @author katy.trinh
 */
public class PRInitialData {

    @Key(value="id")
    String id;
    
    @Key(value="name")
    String name;
    
    @Key(value="type")
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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
    
    

}
