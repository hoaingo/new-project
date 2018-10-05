package com.pms.model.purchase_request;

import com.pms.jdbc.orm.Key;
import java.util.Date;

public class ItemDetail {
    @Key(value="prd_id")
    private long prdId;
    @Key(value="pr_id")
    private long prId;
    @Key(value="item_id")
    private int itemId;
    @Key(value="gl_id")
    private int glId;
    @Key (value = "currency_code")
    private  String currencyCode;
    @Key(value="vendor_id")
    private int vendorId;
    @Key(value="unit_price")
    private float unitPrice;
    @Key(value="quantity")
    private int quantity;
    @Key(value="shipping_id")
    private int shippingId;
    @Key(value = "created_date")
    private Date createdDate;
    @Key(value = "created_by")
    private String createdBy;
    @Key(value = "updated_date")
    private Date updatedDate;
    @Key(value = "updated_by")
    private String updatedBy;

    public long getPrdId() {
        return prdId;
    }

    public void setPrdId(long prdId) {
        this.prdId = prdId;
    }

    
    public long getPrId() {
        return prId;
    }

    public void setPrId(long prId) {
        this.prId = prId;
    }

    public int getItemId() {
        return itemId;
    }

    public void setItemId(int itemId) {
        this.itemId = itemId;
    }

    public int getGlId() {
        return glId;
    }

    public void setGlId(int glId) {
        this.glId = glId;
    }

    public String getCurrencyCode() {
        return currencyCode;
    }

    public void setCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
    }

    public int getVendorId() {
        return vendorId;
    }

    public void setVendorId(int vendorId) {
        this.vendorId = vendorId;
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

    
}
