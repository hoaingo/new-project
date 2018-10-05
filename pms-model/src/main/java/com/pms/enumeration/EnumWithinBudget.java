/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.pms.enumeration;

/**
 *
 * @author katy.trinh
 */
public enum EnumWithinBudget {
    YES(1,"YES"), 
    NO(2, "NO"),
    NA(3, "NA"),
    UNKNOWN(4,"UNKNOWN");
    int code;
    String value;

    private EnumWithinBudget(int code, String value) {
        this.code = code;
        this.value = value;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
    
}
