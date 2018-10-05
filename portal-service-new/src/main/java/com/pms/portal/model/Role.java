package com.pms.portal.model;

import java.util.List;

public class Role {

    private String name;
    List<String> privileges;

    public Role() {
    }

    public Role(String name, List<String> privileges) {
        this.name = name;
        this.privileges = privileges;
    }
    
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<String> getPrivileges() {
        return privileges;
    }

    public void setPrivileges(List<String> privileges) {
        this.privileges = privileges;
    }

}
