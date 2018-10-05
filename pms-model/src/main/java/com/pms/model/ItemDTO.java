package com.pms.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.pms.jdbc.orm.Key;
import java.util.Date;


public class ItemDTO {
    @Key(value = "id")
    private int itemId;
    
    @Key(value="product_type_name")
    private String productTypeName;
    
    @Key(value="name")
    private String name;

    @Key(value = "description")
    private String description;

    @Key(value = "type")
    private int type;
    
    @Key(value = "sub_type")
    private int subType;
    
    @Key(value = "unit_measurement")
    private int unitMeasurement;
    
    @Key(value = "created_by")
    private String created_by;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT-4")
    @Key(value = "created_date")
    private Date createdDate;
    
    @Key(value = "updated_by")
    private String updatedBy;
     @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT-4")
    @Key(value = "updated_date")
    private Date updatedDate;
    @Key(value = "sub_type_name",required = false )
    private String subTypeName;

    public int getItemId() {
        return itemId;
    }

    public void setItemId(int itemId) {
        this.itemId = itemId;
    }

    public String getProductTypeName() {
        return productTypeName;
    }

    public void setProductTypeName(String productTypeName) {
        this.productTypeName = productTypeName;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public int getSubType() {
        return subType;
    }

    public void setSubType(int subType) {
        this.subType = subType;
    }

    public int getUnitMeasurement() {
        return unitMeasurement;
    }

    public void setUnitMeasurement(int unitMeasurement) {
        this.unitMeasurement = unitMeasurement;
    }

    public String getCreated_by() {
        return created_by;
    }

    public void setCreated_by(String created_by) {
        this.created_by = created_by;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public String getUpdatedBy() {
        return updatedBy;
    }

    public void setUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
    }

    public Date getUpdatedDate() {
        return updatedDate;
    }

    public void setUpdatedDate(Date updatedDate) {
        this.updatedDate = updatedDate;
    }

    public String getSubTypeName() {
        return subTypeName;
    }

    public void setSubTypeName(String subTypeName) {
        this.subTypeName = subTypeName;
    }
    
 
   
}
