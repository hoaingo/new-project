package com.pms.modal.purchase.order;

import com.pms.jdbc.orm.Key;

public class POItemDetailDTO {
    
    @Key(value = "po_code" ,required = false)
    private String poCode;
    
    @Key(value = "item_id")
    private int itemId;
    
    @Key(value = "item_name")
    private String item;
    
    @Key(value = "item_description")
    private String itemDesp;
    
    @Key(value = "product_type")
    private String productType;
    
    @Key(value = "product_sub_type")
    private String subType;
    
    @Key(value = "vendor_id")
    private int vendorId;
    
    @Key(value = "vendor_name")
    private String vendorName;
    
    @Key(value = "currency_code")
    private String currencyCode;
    
    @Key(value = "unit_price")
    private float unitPrice;
    
    @Key(value = "quantity")
    private int quantity;
    
    private float itemTotal;

    public String getPoCode() {
        return poCode;
    }

    public void setPoCode(String poCode) {
        this.poCode = poCode;
    }

    public int getItemId() {
        return itemId;
    }

    public void setItemId(int itemId) {
        this.itemId = itemId;
    }

    public String getItem() {
        return item;
    }

    public void setItem(String item) {
        this.item = item;
    }

    public String getItemDesp() {
        return itemDesp;
    }

    public void setItemDesp(String itemDesp) {
        this.itemDesp = itemDesp;
    }

    public String getProductType() {
        return productType;
    }

    public void setProductType(String productType) {
        this.productType = productType;
    }

    public String getSubType() {
        return subType;
    }

    public void setSubType(String subType) {
        this.subType = subType;
    }

    public int getVendorId() {
        return vendorId;
    }

    public void setVendorId(int vendorId) {
        this.vendorId = vendorId;
    }

    public String getVendorName() {
        return vendorName;
    }

    public void setVendorName(String vendorName) {
        this.vendorName = vendorName;
    }
    
    public String getCurrencyCode() {
        return currencyCode;
    }

    public void setCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
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

    public float getItemTotal() {
        return itemTotal;
    }

    public void setItemTotal(float itemTotal) {
        this.itemTotal = itemTotal;
    }
}
