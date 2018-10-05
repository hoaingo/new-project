package com.pms.model;


import com.pms.jdbc.orm.Key;
import java.util.Date;


/**
 *
 * @author john.intern
 */
public class SubTypeDTO {
    @Key(value = "sub_type_id")
    long subTypeId;
    @Key(value = "sub_type_name")
    String subTypeName;
    @Key(value = "sub_type_description")
    String subTypeDescription;
    @Key(value = "updated_date")
    Date updatedDate;
    @Key(value = "updated_by")
    String updatedBy;
    @Key(value = "created_by")
    Date createdBy;
    @Key(value = "create_date")
    String createDate;

    public long getSubTypeId() {
        return subTypeId;
    }

    public void setSubTypeId(long subTypeId) {
        this.subTypeId = subTypeId;
    }

    public String getSubTypeName() {
        return subTypeName;
    }

    public void setSubTypeName(String subTypeName) {
        this.subTypeName = subTypeName;
    }

    public String getSubTypeDescription() {
        return subTypeDescription;
    }

    public void setSubTypeDescription(String subTypeDescription) {
        this.subTypeDescription = subTypeDescription;
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

    public Date getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(Date createdBy) {
        this.createdBy = createdBy;
    }

    public String getCreateDate() {
        return createDate;
    }

    public void setCreateDate(String createDate) {
        this.createDate = createDate;
    }
      
}
