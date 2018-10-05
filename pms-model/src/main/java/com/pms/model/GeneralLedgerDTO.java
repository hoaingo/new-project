package com.pms.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.pms.enumeration.ExpenseType;
import com.pms.jdbc.orm.Key;
import java.util.Date;


public class GeneralLedgerDTO {
    @Key(value = "gl_id")
    private int glId;
    
    @Key(value = "gl_code")
    private String glCode;
    
    @Key(value = "gl_name")
    private String glName;
    
    @Key(value = "gl_description")
    private String glDescription;
    
    @Key(value = "gl_budget")
    private double glBudget;
    
    @Key(value = "gl_owner")
    private String glOwner;
    
    @Key(value = "expense_type")
    private ExpenseType expenseType;
    
    @Key(value = "additional_budget")
    private double addBudget;
    
    @Key(value = "relocate_budget")
    private double relocateBudget;
    
    @Key(value = "year")
    private double year;
    
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT-4")
    @Key(value = "created_date")
    private Date createdDate;
    
    @Key(value = "created_by")
    private String createdBy;
    
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT-4")
    @Key(value = "updated_date")
    private Date updatedDate;
    
    @Key(value = "updated_by")
    private String updatedBy;

    public int getGlId() {
        return glId;
    }

    public void setGlId(int glId) {
        this.glId = glId;
    }

    public String getGlName() {
        return glName;
    }

    public void setGlName(String glName) {
        this.glName = glName;
    }

    public String getGlCode() {
        return glCode;
    }

    public void setGlCode(String glCode) {
        this.glCode = glCode;
    }
    
    public String getGlDescription() {
        return glDescription;
    }

    public void setGlDescription(String glDescription) {
        this.glDescription = glDescription;
    }

    public double getGlBudget() {
        return glBudget;
    }

    public void setGlBudget(double glBudget) {
        this.glBudget = glBudget;
    }

    public String getGlOwner() {
        return glOwner;
    }

    public void setGlOwner(String glOwner) {
        this.glOwner = glOwner;
    }

    public ExpenseType getExpenseType() {
        return expenseType;
    }

    public void setExpenseType(ExpenseType expenseType) {
        this.expenseType = expenseType;
    }

    public double getAddBudget() {
        return addBudget;
    }

    public void setAddBudget(double addBudget) {
        this.addBudget = addBudget;
    }

    public double getRelocateBudget() {
        return relocateBudget;
    }

    public void setRelocateBudget(double relocateBudget) {
        this.relocateBudget = relocateBudget;
    }

    public double getYear() {
        return year;
    }

    public void setYear(double year) {
        this.year = year;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public Date getUpdatedDate() {
        return updatedDate;
    }

    public void setUpdatedDate(Date updatedDate) {
        this.updatedDate = updatedDate;
    }
    
    public String getUpdatedBy() {
        return updatedBy;
    }

    public void setUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
    }
}
