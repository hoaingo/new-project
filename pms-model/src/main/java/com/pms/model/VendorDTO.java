package com.pms.model;

import com.pms.jdbc.orm.Key;
import java.util.Date;

/**
 *
 * @author ivy.bui
 */
public class VendorDTO {

    @Key(value = "vendor_id")
    private int vendorId;

    @Key(value = "vendor_name")
    private String vendorName;

    @Key(value = "vendor_score")
    private double vendorScore;
    
    @Key(value = "product_type")
    private String productType;
    
    @Key(value = "vendor_address")
    private String address;
    
    @Key(value = "vendor_contact")
    private String contact;

    @Key(value = "created_date")
    private Date createdDate;

    @Key(value = "created_by")
    private String createdBy;

//    @Key(value = "currency")
//    private String currency; 
//    @Key(value = "description")
//    private String description; 
//   
//    @Key(value = "city")
//    private String city; 
//    @Key(value = "state")
//    private String state; 
//    @Key(value = "country")
//    private String country; 
//    @Key(value = "postal_code")
//    private String postal_code; 
    @Key(value = "email")
    private String email; 
    
    @Key(value = "phone")
    private String phone; 
    
    @Key(value = "fax")
    private String fax; 
    
    @Key(value = "web_url")
    private String web_url; 
    
    @Key(value="id_company_tax")
    private int id_company_tax;
    
    @Key(value="tax_code")
    private String tax_code;
    
    @Key(value="vat")
    private int vat;
    
     @Key(value="status")
    private String status;

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
    
  
    
   
    public int getId_company_tax() {
        return id_company_tax;
    }

    public void setId_company_tax(int id_company_tax) {
        this.id_company_tax = id_company_tax;
    }

    public String getTax_code() {
        return tax_code;
    }

    public void setTax_code(String tax_code) {
        this.tax_code = tax_code;
    }

    public int getVat() {
        return vat;
    }

    public void setVat(int vat) {
        this.vat = vat;
    }

//    public String getCurrency() {
//        return currency;
//    }
//
//    public void setCurrency(String currency) {
//        this.currency = currency;
//    }
//
//    public String getDescription() {
//        return description;
//    }
//
//    public void setDescription(String description) {
//        this.description = description;
//    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

//    public String getCity() {
//        return city;
//    }
//
//    public void setCity(String city) {
//        this.city = city;
//    }
//
//    public String getState() {
//        return state;
//    }

//    public void setState(String state) {
//        this.state = state;
//    }
//
//    public String getCountry() {
//        return country;
//    }
//
//    public void setCountry(String country) {
//        this.country = country;
//    }
//
//    public String getPostal_code() {
//        return postal_code;
//    }
//
//    public void setPostal_code(String postal_code) {
//        this.postal_code = postal_code;
//    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getFax() {
        return fax;
    }

    public void setFax(String fax) {
        this.fax = fax;
    }

    public String getWeb_url() {
        return web_url;
    }

    public void setWeb_url(String web_url) {
        this.web_url = web_url;
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

    public double getVendorScore() {
        return vendorScore;
    }

    public void setVendorScore(double vendorScore) {
        this.vendorScore = vendorScore;
    }

    public String getProductType() {
        return productType;
    }

    public void setProductType(String productType) {
        this.productType = productType;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
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
