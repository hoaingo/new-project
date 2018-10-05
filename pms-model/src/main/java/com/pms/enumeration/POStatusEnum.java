package com.pms.enumeration;

import com.pms.jdbc.orm.BaseEnum;

public enum POStatusEnum implements BaseEnum{

    PO_SUBMITTED(0, "PURCHASE_ORDER_SUBMITTED"), 
    PO_IN_PROGRESS(1, "PURCHASE_ORDER_IN_PROGRESS"), 
    PO_PENDING_APPROVAL(2, "PURCHASE_ORDER_PENDING_APPROVAL"),
    PO_APPROVED(3, "PURCHASE_ORDER_APPROVED"),
    PO_REJECTED(4, "PURCHASE_ORDER_REJECTED"), 
    PO_VOIDED(5, "PURCHASE_ORDER_VOIDED"), 
    PO_DELIVERED(6, "PURCHASE_ORDER_DELIVERED"), 
    PO_RECEIPT_INVOICE(7, "RECEIPT_INVOICE"),
    PO_PAYMENT_INVOICE(8, "PAYMENT_INVOICE");
    
    private final int value;
    private final String code;

    private POStatusEnum(int value, String code) {
        this.code = code;
        this.value = value;
    }

    @Override
    public int getValue() {
        return value;
    }

    @Override
    public String getCode() {
        return code;
    }

    @Override
    public String getName() {
        return name();
    }

    @Override
    public long getId() {
        return value;
    }
}
