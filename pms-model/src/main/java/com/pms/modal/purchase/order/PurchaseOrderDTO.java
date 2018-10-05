package com.pms.modal.purchase.order;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.pms.enumeration.PurchaseOrderEnum;
import com.pms.jdbc.orm.Key;
import java.util.Date;

public class PurchaseOrderDTO {
    
    @Key(value = "po_id")
    private int poId;
    
    @Key(value = "po_code")
    private String poCode;
    
    @Key(value = "pr_id")
    private int prId;
    
    @Key(value = "comment")
    private String comment;
    
    @Key(value = "vendor_id")
    private int vendorId;
    
    @Key(value = "shipping_id")
    private int shippingId;
    
    @Key(value = "billing_id")
    private int billingId;
    
    @Key(value = "gl_id")
    private int glId;
    
    @Key(value = "petty_id")
    private int pettyId;
    
    @Key(value = "cc_id")
    private String ccId;
    
    @Key(value = "invoice_id")
    private int invoiceId;
  
    @Key(value = "sub_total")
    private float subTotal;
    
    @Key(value = "tax")
    private float tax;
    
    @Key(value = "total_tax")
    private float totalTax;
    
    @Key(value = "total_price")
    private float totalPrice;
    
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
  
    @Key(value = "level_processing")
    private int levelProcessing;
    
    @Key(value = "status")
    private PurchaseOrderEnum status;

    public int getPoId() {
        return poId;
    }

    public void setPoId(int poId) {
        this.poId = poId;
    }

    public String getPoCode() {
        return poCode;
    }

    public void setPoCode(String poCode) {
        this.poCode = poCode;
    }

    public int getPrId() {
        return prId;
    }

    public void setPrId(int prId) {
        this.prId = prId;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public int getVendorId() {
        return vendorId;
    }

    public void setVendorId(int vendorId) {
        this.vendorId = vendorId;
    }

    public int getShippingId() {
        return shippingId;
    }

    public void setShippingId(int shippingId) {
        this.shippingId = shippingId;
    }

    public int getBillingId() {
        return billingId;
    }

    public void setBillingId(int billingId) {
        this.billingId = billingId;
    }

    public int getGlId() {
        return glId;
    }

    public void setGlId(int glId) {
        this.glId = glId;
    }

    public int getPettyId() {
        return pettyId;
    }

    public void setPettyId(int pettyId) {
        this.pettyId = pettyId;
    }

    public String getCcId() {
        return ccId;
    }

    public void setCcId(String ccId) {
        this.ccId = ccId;
    }

   

    public int getInvoiceId() {
        return invoiceId;
    }

    public void setInvoiceId(int invoiceId) {
        this.invoiceId = invoiceId;
    }

    public float getSubTotal() {
        return subTotal;
    }

    public void setSubTotal(float subTotal) {
        this.subTotal = subTotal;
    }

    public float getTax() {
        return tax;
    }

    public void setTax(float tax) {
        this.tax = tax;
    }

    public float getTotalTax() {
        return totalTax;
    }

    public void setTotalTax(float totalTax) {
        this.totalTax = (subTotal*tax)/100;
    }
    
    public float getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(float totalPrice) {
        this.totalPrice = totalPrice;
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

    public int getLevelProcessing() {
        return levelProcessing;
    }

    public void setLevelProcessing(int levelProcessing) {
        this.levelProcessing = levelProcessing;
    }

    public PurchaseOrderEnum getStatus() {
        return status;
    }

    public void setStatus(PurchaseOrderEnum status) {
        this.status = status;
    }
}
