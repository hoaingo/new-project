package com.pms.modal.purchase.order;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.pms.jdbc.orm.Key;
import java.util.Date;

public class PODetailDTO {
    
    @Key(value = "po_id")
    private int poId;
    
    @Key(value = "pr_id" , required = false)
    private int prId;
    
    @Key(value = "po_code")
    private String poCode;
    
    @Key(value = "pr_code")
    private String prCode;

    @Key(value = "purchase_type")
    private boolean purchaseType;
    
    @Key(value = "purpose")
    private String purpose;
    
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT-4")
    @Key(value = "required_by")
    private Date requiredBy;
    
    @Key(value = "within_budget")
    private boolean withinBudget;
    
    @Key(value = "location_used")
    private String locationUsed;
    
    @Key(value = "single_tender")
    private boolean singleTender;
    
    @Key(value = "priority")
    private String priority;
    
    @Key(value = "project_id")
    private int projectId;
    
    @Key(value = "vendor_id")
    private int vendorId;
    
    @Key(value = "vendor_name")
    private String vendorName;
    
    @Key(value = "shipping_id")
    private int shippingId;
    
    @Key(value = "shipping_company")
    private String shippingCompany;
    
    @Key(value = "billing_id")
    private int billingId;
    
    @Key(value = "billing_company")
    private String billingCompany;
    
    @Key(value = "gl_id")
    private int glId;
    
    @Key(value = "gl_name")
    private String glName;
    
    @Key(value = "petty_id")
    private int pettyId;
    
    @Key(value = "petty_name")
    private String pettyAccount;
    
    @Key(value = "cc_id")
    private String ccId;
    
    @Key(value = "cc_name")
    private String costCenter;
    
    @Key(value = "document_id")
    private int documentId;
    
    @Key(value = "sub_total")
    private float subTotal;
    
    @Key(value = "tax")
    private float tax;
    
    @Key(value = "total_tax")
    private float totalTax;
    
    @Key(value = "total_price")
    private float totalPrice;
            
    @Key(value = "comment")
    private String comment;
    
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT-4")
    @Key(value = "updated_date")
    private Date updatedDate;
    
    @Key(value = "updated_by")
    private String updatedBy;

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

    public String getPrCode() {
        return prCode;
    }

    public void setPrCode(String prCode) {
        this.prCode = prCode;
    }

    public boolean isPurchaseType() {
        return purchaseType;
    }

    public void setPurchaseType(boolean purchaseType) {
        this.purchaseType = purchaseType;
    }

    public String getPurpose() {
        return purpose;
    }

    public void setPurpose(String purpose) {
        this.purpose = purpose;
    }

    public Date getRequiredBy() {
        return requiredBy;
    }

    public void setRequiredBy(Date requiredBy) {
        this.requiredBy = requiredBy;
    }

    public boolean isWithinBudget() {
        return withinBudget;
    }

    public void setWithinBudget(boolean withinBudget) {
        this.withinBudget = withinBudget;
    }

    public String getLocationUsed() {
        return locationUsed;
    }

    public void setLocationUsed(String locationUsed) {
        this.locationUsed = locationUsed;
    }

    public boolean isSingleTender() {
        return singleTender;
    }

    public void setSingleTender(boolean singleTender) {
        this.singleTender = singleTender;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public int getProjectId() {
        return projectId;
    }

    public void setProjectId(int projectId) {
        this.projectId = projectId;
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

    public int getShippingId() {
        return shippingId;
    }

    public void setShippingId(int shippingId) {
        this.shippingId = shippingId;
    }

    public String getShippingCompany() {
        return shippingCompany;
    }

    public void setShippingCompany(String shippingCompany) {
        this.shippingCompany = shippingCompany;
    }

    public int getBillingId() {
        return billingId;
    }

    public void setBillingId(int billingId) {
        this.billingId = billingId;
    }

    public String getBillingCompany() {
        return billingCompany;
    }

    public void setBillingCompany(String billingCompany) {
        this.billingCompany = billingCompany;
    }

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

    public int getPettyId() {
        return pettyId;
    }

    public void setPettyId(int pettyId) {
        this.pettyId = pettyId;
    }

    public String getPettyAccount() {
        return pettyAccount;
    }

    public void setPettyAccount(String pettyAccount) {
        this.pettyAccount = pettyAccount;
    }

    public String getCcId() {
        return ccId;
    }

    public void setCcId(String ccId) {
        this.ccId = ccId;
    }

    public String getCostCenter() {
        return costCenter;
    }

    public void setCostCenter(String costCenter) {
        this.costCenter = costCenter;
    }

    public int getDocumentId() {
        return documentId;
    }

    public void setDocumentId(int documentId) {
        this.documentId = documentId;
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
    
    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
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

    public int getPrId() {
        return prId;
    }

    public void setPrId(int prId) {
        this.prId = prId;
    }
    
    
}
