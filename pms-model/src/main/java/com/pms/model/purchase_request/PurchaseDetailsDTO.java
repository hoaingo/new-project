/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.pms.model.purchase_request;

import com.pms.jdbc.orm.Key;
import java.util.Date;

/**
 *
 * @author katy.trinh
 */
public class PurchaseDetailsDTO {
    
    @Key(value = "prd_id")
    private long prdId; 
    
    @Key(value = "pr_id")
    private int prId; 
    
    @Key (value = "item_id")
    private int itemId;
    
    @Key (value = "vendor_id")
    private int vendorId;
    
    @Key (value = "gl_id")
    private int glId;
    
   
    @Key (value = "unit_price")
    private float unitPrice;
    
    @Key (value = "quantity")
    private int quantity;
    
    @Key(value = "shipping_id")
    private int shippingId;
    
    @Key(value = "created_date")
    private Date createdDate;
    
    @Key(value = "created_by")
    private String createdBy;
    
    @Key (value = "updated_date")
    private Date updatedDate;
    
    @Key (value = "updated_by")
    private String updatedBy;

    @Key (value = "vendor_name")
    private String vendorName;
    
    @Key (value = "gl_name")
    private  String glName;

    public long getPrdId() {
        return prdId;
    }

    public void setPrdId(long prdId) {
        this.prdId = prdId;
    }

    public int getPrId() {
        return prId;
    }

    public void setPrId(int prId) {
        this.prId = prId;
    }

    public int getItemId() {
        return itemId;
    }

    public void setItemId(int itemId) {
        this.itemId = itemId;
    }

    public int getVendorId() {
        return vendorId;
    }

    public void setVendorId(int vendorId) {
        this.vendorId = vendorId;
    }

    public int getGlId() {
        return glId;
    }

    public void setGlId(int glId) {
        this.glId = glId;
    }

    public float getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(float unitPrice) {
        this.unitPrice = unitPrice;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getShippingId() {
        return shippingId;
    }

    public void setShippingId(int shippingId) {
        this.shippingId = shippingId;
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

    public String getVendorName() {
        return vendorName;
    }

    public void setVendorName(String vendorName) {
        this.vendorName = vendorName;
    }

    public String getGlName() {
        return glName;
    }

    public void setGlName(String glName) {
        this.glName = glName;
    }

  
}
