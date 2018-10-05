package com.pms.enumeration;

import com.pms.jdbc.orm.BaseEnum;

/**
 *
 * @author Conan
 */
public enum PermissionEnum implements BaseEnum {

    SUPER_USER(1, "SUPER_USER"),
    ADMIN(2, "ADMIN"),
    APPROVER_RIVEWER(3, "APPROVER_RIVEWER"),
    BUDGET_OWNER(4, "BUDGET_OWNER"),
    BUYER(5, "BUYER")
    ;

    private final int value;
    private final String code;

    private PermissionEnum(int value, String code) {
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
