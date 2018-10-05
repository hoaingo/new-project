package com.pms.enumeration;

public enum PurchaseOrderEnum {

    PURCHASE_ORDER_SUBMITTED(0, "PURCHASE_ORDER_SUBMITTED"), 
    PURCHASE_ORDER_PENDING(1, "PURCHASE_ORDER_PENDING"),
    PURCHASE_ORDER_IN_PROGRESS(2, "PURCHASE_ORDER_IN_PROGRESS"), 
    PURCHASE_ORDER_APPROVED(3, "PURCHASE_ORDER_APPROVED"),
    PURCHASE_ORDER_REJECTED(4, "PURCHASE_ORDER_REJECTED"), 
    PURCHASE_ORDER_VOIDED(5, "PURCHASE_ORDER_VOIDED"), 
    PURCHASE_ORDER_DELIVERED(6, "PURCHASE_ORDER_DELIVERED"), 
    RECEIPT_INVOICE(7, "RECEIPT_INVOICE"),
    PAYMENT_INVOICE(8, "PAYMENT_INVOICE");

    int code;
    String value;

    private PurchaseOrderEnum(int code, String value) {
        this.code = code;
        this.value = value;
    }

    @Override
    public String toString(){
        return value;
    }
    public int getCode() {
        return code;
    }

    public String getValue() {
        return value;
    }
}
