package com.pms.enumeration;

public enum GLStatusEnum {
    ACTIVE(0,"ACTIVE"), 
    INACTIVE(1, "INACTIVE"),
    PENDING(2, "PENDING");
    int code;
    String value;
    
    private GLStatusEnum(int code, String value) {
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

