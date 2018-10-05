package com.pms.enumeration;

public enum ExpenseType {
    CAPEX(0,"CAPEX"), 
    OPEX(1, "OPEX");
    
    int code;
    String value;
    
    private ExpenseType(int code, String value) {
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

