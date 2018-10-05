package com.pms.model;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.pms.jdbc.orm.Key;
import java.util.Date;


/**
 *
 * @author john.intern
 */
public class ProductTypeDTO {
    
    @Key(value = "product_type_id")
    long productTypeId;
    @Key(value = "product_type_name")
    String productTypeName;
    @Key(value = "product_type_description")
    String productTypeDescription;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT-4")
    @Key(value = "update_date")
    Date updatedDate;
    @Key(value = "update_by")
    String updatedBy;

    public void setProductTypeId(long productTypeId) {
        this.productTypeId = productTypeId;
    }

    public void setProductTypeName(String productTypeName) {
        this.productTypeName = productTypeName;
    }

    public void setProductTypeDescription(String productTypeDescription) {
        this.productTypeDescription = productTypeDescription;
    }

    public void setUpdatedDate(Date updatedDate) {
        this.updatedDate = updatedDate;
    }

    public void setUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
    }

    public long getProductTypeId() {
        return productTypeId;
    }

    public String getProductTypeName() {
        return productTypeName;
    }

    public String getProductTypeDescription() {
        return productTypeDescription;
    }

    public Date getUpdatedDate() {
        return updatedDate;
    }

    public String getUpdatedBy() {
        return updatedBy;
    }
    
      
    
}
