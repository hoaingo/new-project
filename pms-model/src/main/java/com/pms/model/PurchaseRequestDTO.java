package com.pms.model;

import com.pms.enumeration.PurchaseRequestEnum;
import com.pms.jdbc.orm.Key;
import com.pms.model.purchase_request.ItemDetail;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;


public class PurchaseRequestDTO {

    @Key(value = "pr_id")
    private int pr_id;
    @Key(value = "pr_code")
    private String pr_code;
    @Key(value = "pr_description")
    private String pr_description;
    @Key(value = "level_processing")
    private int level_processing;
    @Key(value = "total_price")
    private BigDecimal total_price;
    @Key(value = "remarks")
    private String remarks;
    
    @Key(value = "status")
    private PurchaseRequestEnum status;
    
    @Key(value = "gl_id")
    private int gl_id;
    @Key(value = "created_by")
    private String created_by;
    @Key(value = "created_date")
    private Date created_date;
    @Key(value = "updated_date")
    private Date updated_date;
    @Key(value = "updated_by")
    private String updated_by;
    @Key(value = "total_tax")
    private BigDecimal total_tax;
    @Key(value = "postal_code")
    private int postal_code;
    @Key(value = "required_by")
    private Date required_by;
    @Key(value = "priority")
    private String priority;
    @Key(value = "product_type")
    private String product_type;
    @Key(value = "product_sub_type")
    private String product_sub_type;
    @Key(value = "additional_comment")
    private String additional_comment;
    @Key(value = "sub_total")
    private BigDecimal sub_total;
    @Key(value = "purpose")
    private String purpose;
    @Key(value = "shipping_address_id")
    private int shipping_address_id;
    @Key(value = "vendor_id")
    private int vendor_id;
    @Key(value="cc_id")
    private int cc_id;
    @Key(value="billing_id")
    private int billing_id;
    @Key(value="document_id")
    private int document_id;
     private ArrayList<ItemDetail> items_selected;

    public ArrayList<ItemDetail> getItems_selected() {
        return items_selected;
    }

    public void setItems_selected(ArrayList<ItemDetail> items_selected) {
        this.items_selected = items_selected;
    }

    //approvers list
//    private String[] approvers_selected;
//
//    private PurchaseRequestEnum prStatus;
//
//    private ArrayList<ItemDetail> items_selected;

    public int getPr_id() {
        return pr_id;
    }

    public void setPr_id(int pr_id) {
        this.pr_id = pr_id;
    }

    public String getPr_code() {
        return pr_code;
    }

    public void setPr_code(String pr_code) {
        this.pr_code = pr_code;
    }

    public String getPr_description() {
        return pr_description;
    }

    public void setPr_description(String pr_description) {
        this.pr_description = pr_description;
    }

    public int getLevel_processing() {
        return level_processing;
    }

    public void setLevel_processing(int level_processing) {
        this.level_processing = level_processing;
    }

    public BigDecimal getTotal_price() {
        return total_price;
    }

    public void setTotal_price(BigDecimal total_price) {
        this.total_price = total_price;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public PurchaseRequestEnum getStatus() {
        return status;
    }

    public void setStatus(PurchaseRequestEnum status) {
        this.status = status;
    }

    

    public int getGl_id() {
        return gl_id;
    }

    public void setGl_id(int gl_id) {
        this.gl_id = gl_id;
    }

    public String getCreated_by() {
        return created_by;
    }

    public void setCreated_by(String created_by) {
        this.created_by = created_by;
    }

    public Date getCreated_date() {
        return created_date;
    }

    public void setCreated_date(Date created_date) {
        this.created_date = created_date;
    }

    public Date getUpdated_date() {
        return updated_date;
    }

    public void setUpdated_date(Date updated_date) {
        this.updated_date = updated_date;
    }

    public String getUpdated_by() {
        return updated_by;
    }

    public void setUpdated_by(String updated_by) {
        this.updated_by = updated_by;
    }

    public BigDecimal getTotal_tax() {
        return total_tax;
    }

    public void setTotal_tax(BigDecimal total_tax) {
        this.total_tax = total_tax;
    }

    public int getPostal_code() {
        return postal_code;
    }

    public void setPostal_code(int postal_code) {
        this.postal_code = postal_code;
    }

    public Date getRequired_by() {
        return required_by;
    }

    public void setRequired_by(Date required_by) {
        this.required_by = required_by;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public String getProduct_type() {
        return product_type;
    }

    public void setProduct_type(String product_type) {
        this.product_type = product_type;
    }

    public String getProduct_sub_type() {
        return product_sub_type;
    }

    public void setProduct_sub_type(String product_sub_type) {
        this.product_sub_type = product_sub_type;
    }

    public String getAdditional_comment() {
        return additional_comment;
    }

    public void setAdditional_comment(String additional_comment) {
        this.additional_comment = additional_comment;
    }

    public BigDecimal getSub_total() {
        return sub_total;
    }

    public void setSub_total(BigDecimal sub_total) {
        this.sub_total = sub_total;
    }

    public String getPurpose() {
        return purpose;
    }

    public void setPurpose(String purpose) {
        this.purpose = purpose;
    }

    public int getShipping_address_id() {
        return shipping_address_id;
    }

    public void setShipping_address_id(int shipping_address_id) {
        this.shipping_address_id = shipping_address_id;
    }

    public int getVendor_id() {
        return vendor_id;
    }

    public void setVendor_id(int vendor_id) {
        this.vendor_id = vendor_id;
    }

    public int getCc_id() {
        return cc_id;
    }

    public void setCc_id(int cc_id) {
        this.cc_id = cc_id;
    }

    public int getBilling_id() {
        return billing_id;
    }

    public void setBilling_id(int billing_id) {
        this.billing_id = billing_id;
    }

    public int getDocument_id() {
        return document_id;
    }

    public void setDocument_id(int document_id) {
        this.document_id = document_id;
    }

     
   }
