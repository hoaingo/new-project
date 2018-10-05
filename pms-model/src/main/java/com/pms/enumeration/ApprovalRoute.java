package com.pms.enumeration;

import com.pms.jdbc.orm.BaseEnum;

/**
 *
 * @author Conan
 */
public enum ApprovalRoute implements BaseEnum {

    DEFAULT(1, "DEFAULT"),
    OVER_BUDGET(2, "OVER_BUDGET"),
    ADDITIONAL_APPROVE(3, "ADDITIONAL_APPROVE"),;

    private final int value;
    private final String code;

    private ApprovalRoute(int value, String code) {
        this.value = value;
        this.code = code;
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
