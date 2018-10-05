package com.pms.model.purchase_request;

import com.fasterxml.jackson.annotation.JsonFormat;
//import com.pms.enumeration.PriorityEnum;
import com.pms.jdbc.orm.Key;
import java.math.BigDecimal;
import java.util.Date;

/**
 *
 * @author Conan
 */
public class PRReviewDTO {

    @Key(value = "pr_id")
    long prId;
    @Key(value = "pr_code")
    String prCode;
    @Key(value = "total_tax")
    BigDecimal taxAmount;
    @Key(value = "total_price")
    BigDecimal totalAmount;
//    @Key(value = "priority")
//    PriorityEnum priority;
    @Key(value = "status")
    PurchaseRequestStatus status;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT-4")
    @Key(value = "required_by")
    Date requiredBy;
   
    @Key(value = "purpose")
    String purpose;
    @Key(value = "level_processing")
    int levelProcessing;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT-4")
    @Key(value = "created_date")
    Date createdDate;
    @Key(value = "created_by")
    String createdBy;
    
    public enum PurchaseRequestStatus {
        Purchase_Request_Submitted,
        Purchase_Request_In_Progress,
        Purchase_Request_Pending,
        Purchase_Request_Approved,
        Purchase_Request_Rejected,
        Purchase_Request_Voided;
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

    public BigDecimal getTaxAmount() {
        return taxAmount;
    }

    public void setTaxAmount(BigDecimal taxAmount) {
        this.taxAmount = taxAmount;
    }

    public BigDecimal getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(BigDecimal totalAmount) {
        this.totalAmount = totalAmount;
    }

    public PurchaseRequestStatus getStatus() {
        return status;
    }

    public void setStatus(PurchaseRequestStatus status) {
        this.status = status;
    }

    public Date getRequiredBy() {
        return requiredBy;
    }

    public void setRequiredBy(Date requiredBy) {
        this.requiredBy = requiredBy;
    }

    public String getPurpose() {
        return purpose;
    }

    public void setPurpose(String purpose) {
        this.purpose = purpose;
    }

    public int getLevelProcessing() {
        return levelProcessing;
    }

    public void setLevelProcessing(int levelProcessing) {
        this.levelProcessing = levelProcessing;
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
