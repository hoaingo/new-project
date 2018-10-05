package com.pms.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.pms.enumeration.PurchaseType;
import com.pms.jdbc.orm.Key;

    
import java.util.Date;

/**
 *
 * @author katy.trinh
 */
public class PrApproveDTO {

    @Key(value = "pr_id")
    private int purchaseRequestId;
    
    
  
    @Key(value = "level_approve")
    private int levelApprove;

    @Key(value = "purchase_type")
    private PurchaseType purchaseType;

    @Key(value = "user_approver_id")
    private int userApproverId;
    
  @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT-4")
    @Key(value = "update_date")
    private Date updateDate;

    @Key(value = "update_by")
    private String updateBy;

       
    @Key(value = "total_price")
    private String totalPrice;
 
    @Key(value = "pr_code")
    private String prCode;
    
    @Key(value = "billing_id")
    private String billingId;
    
     @Key(value = "shipping_id")
    private String shippingId;
    
    
//    @Key(value = "user_name")
//    private int userName;

    public int getPurchaseRequestId() {
        return purchaseRequestId;
    }

    public void setPurchaseRequestId(int purchaseRequestId) {
        this.purchaseRequestId = purchaseRequestId;
    }

    public int getLevelApprove() {
        return levelApprove;
    }

    public void setLevelApprove(int levelApprove) {
        this.levelApprove = levelApprove;
    }

    public PurchaseType getPurchaseType() {
        return purchaseType;
    }

    public void setPurchaseType(PurchaseType purchaseType) {
        this.purchaseType = purchaseType;
    }

    public int getUserApproverId() {
        return userApproverId;
    }

    public void setUserApproverId(int userApproverId) {
        this.userApproverId = userApproverId;
    }

    public Date getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(Date updateDate) {
        this.updateDate = updateDate;
    }

    public String getUpdateBy() {
        return updateBy;
    }

    public void setUpdateBy(String updateBy) {
        this.updateBy = updateBy;
    }

    public String getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(String totalPrice) {
        this.totalPrice = totalPrice;
    }

    public String getPrCode() {
        return prCode;
    }

    public void setPrCode(String prCode) {
        this.prCode = prCode;
    }

    public String getBillingId() {
        return billingId;
    }

    public void setBillingId(String billingId) {
        this.billingId = billingId;
    }

    public String getShippingId() {
        return shippingId;
    }

    public void setShippingId(String shippingId) {
        this.shippingId = shippingId;
    }
    
    

    
}
