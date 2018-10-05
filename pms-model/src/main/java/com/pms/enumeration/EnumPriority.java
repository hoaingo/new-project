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
public enum EnumPriority {
    NONE(0,"NONE"),
    MEDIUM_LOW(1,"MEDIUM_LOW"),
    MEDIUM(2,"MEDIUM"),
    MEDIUM_HIGH(3,"MEDIUM_HIGH"),
    HIGH(4,"HIGH");
   
    int code;
    String value;
    
    private EnumPriority(int code, String value) {
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
