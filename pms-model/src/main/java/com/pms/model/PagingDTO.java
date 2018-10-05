package com.pms.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.pms.jdbc.orm.Key;

/**
 *
 * @author Conan
 */
public class PagingDTO {
    @JsonIgnore
    @Key(value = "total_found", required = false)
    private int totalFound;

    public int getTotalFound() {
        return totalFound;
    }

    public void setTotalFound(int totalFound) {
        this.totalFound = totalFound;
    }
    
}
