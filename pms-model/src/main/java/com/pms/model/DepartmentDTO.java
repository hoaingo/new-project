package com.pms.model;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.pms.enumeration.DepartmentTypeEnum;
import com.pms.jdbc.orm.Key;
import java.util.Date;


/**
 *
 * @author john.intern
 */
public class DepartmentDTO {
    
    @Key(value = "department_id")
    long departmentId;
    
    @Key(value = "department_name")
    String departmentName;
    
    @Key(value = "department_description")
    String departmentDescription;
    
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT-4")
    @Key(value = "created_date")
    Date createdDate;
    
    @Key(value = "created_by")
    String createdBy;
    
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT-4")
    @Key(value = "updated_date")
    Date updatedDate;
    
    @Key(value = "updated_by")
    String updatedBy;
    
    @Key(value = "department_type")
    DepartmentTypeEnum deptType;

    public long getDepartmentId() {
        return departmentId;
    }

    public String getDepartmentName() {
        return departmentName;
    }

    public String getDepartmentDescription() {
        return departmentDescription;
    }

    public Date getUpdatedDate() {
        return updatedDate;
    }

    public String getUpdatedBy() {
        return updatedBy;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setDepartmentId(long departmentId) {
        this.departmentId = departmentId;
    }

    public void setDepartmentName(String departmentName) {
        this.departmentName = departmentName;
    }

    public void setDepartmentDescription(String departmentDescription) {
        this.departmentDescription = departmentDescription;
    }

    public void setUpdatedDate(Date updatedDate) {
        this.updatedDate = updatedDate;
    }

    public void setUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public DepartmentTypeEnum getDeptType() {
        return deptType;
    }

    public void setDeptType(DepartmentTypeEnum deptType) {
        this.deptType = deptType;
    }
}
