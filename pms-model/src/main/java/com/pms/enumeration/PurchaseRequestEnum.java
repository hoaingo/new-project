package com.pms.enumeration;


public enum PurchaseRequestEnum {
    PURCHASE_REQUEST_SUBMITTED(0, "Purchase_Request_Submitted"), 
    PURCHASE_REQUEST_PENDING(1, "Purchase_Request_Pending"),
    PURCHASE_REQUEST_IN_PROGRESS(2, "Purchase_Request_In_Progress"),
    PURCHASE_REQUEST_APPROVED(3, "Purchase_Request_Approved"),
    PURCHASE_REQUEST_REJECTED(4, "Purchase_Request_Rejected"),
    PURCHASE_REQUEST_VOIDED(5, "Purchase_Request_Voided")

    ;

    int code;
    String value;

    private PurchaseRequestEnum(int code, String value) {
        this.code = code;
        this.value = value;
    }

    public int getCode() {
        return code;
    }

    public String getValue() {
        return value;
    }
}