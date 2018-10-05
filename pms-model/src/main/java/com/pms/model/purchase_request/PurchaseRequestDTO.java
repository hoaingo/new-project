package com.pms.model.purchase_request;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.pms.enumeration.PurchaseRequestEnum;
import com.pms.jdbc.orm.Key;
import java.util.ArrayList;
import java.util.Date;

public class PurchaseRequestDTO {

    @Key(value = "pr_id")
    private long prId;

    @Key(value = "pr_code")
    private String prCode;

    @Key(value = "level_processing", required = false)
    private int levelProcessing;

    @Key(value = "purchase_type", required = false)
    private boolean purchaseType;

    @Key(value = "purpose", required = false)
    private String purpose;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone = "GMT-4")
    @Key(value = "required_by", required = false)
    private Date requiredBy;

    @Key(value = "within_budget", required = false)
    private boolean withinBudget;

    @Key(value = "location_used", required = false)
    private String locationUsed;

    @Key(value = "single_tender", required = false)
    private boolean singleTender;

    @Key(value = "vendor_suggest_id", required = false)
    private int vendorSuggestId;

    @Key(value = "priority", required = false)
    private String priority;

    @Key(value = "project_id", required = false)
    private int projectId;

    @Key(value = "cost_center_id", required = false)
    private String costCenterId;

    @Key(value = "gl_id", required = false)
    private int glId;

    @Key(value = "billing_id", required = false)
    private int billingId;

    @Key(value = "shipping_id", required = false)
    private int shippingId;

    @Key(value = "additional_comment", required = false)
    private String additionalComment;

    @Key(value = "document_id", required = false)
    private int documentId;


    @Key(value = "status", required = false)
    private PurchaseRequestEnum status;

    private ArrayList<ItemDetail> itemsSelected;
//    private UploadDTO document;

    @Key(value = "file_name", required = false)
    private String fileName;

    @Key(value = "vendor_name", required = false)
    private String vendorName;

    @Key(value = "gl_name", required = false)
    private String glName;

    @Key(value = "contact_name", required = false)
    private String contactName;

    @Key(value = "company_name", required = false)
    private String companyName;

    @Key(value = "cc_name", required = false)
    private String ccName;
    
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT-4")
    @Key(value = "updated_date", required = false)
    Date updatedDate;
    
    @Key(value = "updated_by", required = false)
    String updatedBy;
    
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT-4")
    @Key(value = "created_date", required = false)
    Date createdDate;
    
    @Key(value = "created_by", required = false)
    String createdBy;

    @Override
    public String toString() {
        return "PurchaseRequestDTO{" + "prId=" + prId + ", pr_code=" + prCode + ", level_processing=" + levelProcessing
                + ", purchase_type=" + purchaseType + ", purpose=" + purpose + ", required_by=" + requiredBy + ", within_budget="
                + withinBudget + ", location_used=" + locationUsed + ", single_tender=" + singleTender + ", vendor_suggest_id="
                + vendorSuggestId + ", priority=" + priority + ", project_id=" + projectId + ", cost_center_id="
                + costCenterId + ", gl_id=" + glId + ", billing_id=" + billingId + ", shipping_id=" + shippingId + ", additional_comment="
                + additionalComment + ", document_id=" + documentId +",status"+ status +", items_selected=" + itemsSelected + ", fileName=" + fileName
                + ", vendorName=" + vendorName + ", glName=" + glName + ", contactName=" + contactName + ", companyName=" + companyName + ", ccName=" + ccName + '}';
    }

    public long getPrId() {
        return prId;
    }

    public void setPrId(long prId) {
        this.prId = prId;
    }

    public String getPrCode() {
        return prCode;
    }

    public void setPrCode(String prCode) {
        this.prCode = prCode;
    }

    public int getLevelProcessing() {
        return levelProcessing;
    }

    public void setLevelProcessing(int levelProcessing) {
        this.levelProcessing = levelProcessing;
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

    public int getVendorSuggestId() {
        return vendorSuggestId;
    }

    public void setVendorSuggestId(int vendorSuggestId) {
        this.vendorSuggestId = vendorSuggestId;
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

    public String getCostCenterId() {
        return costCenterId;
    }

    public void setCostCenterId(String costCenterId) {
        this.costCenterId = costCenterId;
    }

    public int getGlId() {
        return glId;
    }

    public void setGlId(int glId) {
        this.glId = glId;
    }

    public int getBillingId() {
        return billingId;
    }

    public void setBillingId(int billingId) {
        this.billingId = billingId;
    }

    public int getShippingId() {
        return shippingId;
    }

    public void setShippingId(int shippingId) {
        this.shippingId = shippingId;
    }

    public String getAdditionalComment() {
        return additionalComment;
    }

    public void setAdditionalComment(String additionalComment) {
        this.additionalComment = additionalComment;
    }

    public int getDocumentId() {
        return documentId;
    }

    public void setDocumentId(int documentId) {
        this.documentId = documentId;
    }

    public PurchaseRequestEnum getStatus() {
        return status;
    }

    public void setStatus(PurchaseRequestEnum status) {
        this.status = status;
    }

    public ArrayList<ItemDetail> getItemsSelected() {
        return itemsSelected;
    }

    public void setItemsSelected(ArrayList<ItemDetail> itemsSelected) {
        this.itemsSelected = itemsSelected;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
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

    public String getContactName() {
        return contactName;
    }

    public void setContactName(String contactName) {
        this.contactName = contactName;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getCcName() {
        return ccName;
    }

    public void setCcName(String ccName) {
        this.ccName = ccName;
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


  

}
