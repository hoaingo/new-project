package com.pms.enumeration;

import com.pms.jdbc.orm.BaseEnum;

/**
 *
 * @author Conan
 */
public enum PurchaseRoute implements BaseEnum {
    REGULAR_ROUTE( "REGULAR_ROUTE",1),
    NON_PO("NON_PO",2);

    private final String code;
    private final int value;

    private PurchaseRoute( String code ,int value) {
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
