package com.pms.model;

import com.pms.jdbc.orm.Key;

/**
 *
 * @author katy.intern
 */
public class VariableDTO {
     @Key(value = "variable_name")
    private String variable_name;

    public VariableDTO(String variable_name) {
        this.variable_name = variable_name;
    }

    public VariableDTO() {
    }

    public String getVariable_name() {
        return variable_name;
    }

    public void setVariable_name(String variable_name) {
        this.variable_name = variable_name;
    }
    
}
