package com.pms.enumeration;

import com.pms.jdbc.orm.BaseEnum;

public enum PRStatusEnum implements BaseEnum {
    PR_SUBMITTED(0, "Purchase_Request_Submitted"),
    PR_IN_PROGRESS(1, "Purchase_Request_In_Progress"),
    PR_PENDING_APPROVAL(2, "Purchase_Request_Pending_Approval"),
    PR_APPROVED(3, "Purchase_Request_Approved"),
    PR_REJECTED(4, "Purchase_Request_Rejected"),
    PR_VOIDED(5, "Purchase_Request_Voided");

    private final int value;
    private final String code;

    private PRStatusEnum(int value, String code) {
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
