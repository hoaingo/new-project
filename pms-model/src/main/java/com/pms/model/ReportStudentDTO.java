/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.pms.model;

import com.pms.jdbc.orm.Key;

/**
 *
 * @author User
 */
public class ReportStudentDTO {
    @Key(value = "month")
    private String month;
    
    @Key(value = "total")
    private long total;

    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {
        this.month = month;
    }

    public long getTotal() {
        return total;
    }

    public void setTotal(long total) {
        this.total = total;
    }
    
}
