package com.pms.model;

import com.pms.jdbc.orm.Key;
import java.util.Date;

/**
 *
 * @author darik.intern
 */
public class ShippingDTO extends PagingDTO{
    
    @Key(value = "shipping_address_id")
    int shippingAddressId;
    @Key(value = "country")
    String country;
    @Key(value = "company_name")
    String companyName;
    @Key(value = "address_1")
    String Address_1;
    @Key(value = "address_2")
    String Address_2;
    @Key(value = "address_3")
    String address_3;
    @Key(value = "contact_name")
    String contactName;
    @Key(value = "contact_email")
    String contactEmail;
    @Key(value = "contact_phone")
    String contactPhone;
    @Key(value = "additional_information")
    String additionalInformation;
    @Key(value = "postal_code")
    int postalCode;
    @Key(value = "city")
    String city;
    @Key(value = "state")
    String state;
    @Key(value = "office_location")
    String officeLocation;
    @Key(value = "updated_date")
    Date updatedDate;
    @Key(value = "updated_by")
    String updatedBy;
    @Key(value = "created_date")
    Date createdDate;
    
    @Key(value = "created_by")
    String created_by;
    @Key(value = "status")
    String status;
    public int getShippingAddressId() {
        return shippingAddressId;
    }

    public void setShippingAddressId(int shippingAddressId) {
        this.shippingAddressId = shippingAddressId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getAddress_1() {
        return Address_1;
    }

    public void setAddress_1(String Address_1) {
        this.Address_1 = Address_1;
    }

    public String getAddress_2() {
        return Address_2;
    }

    public void setAddress_2(String Address_2) {
        this.Address_2 = Address_2;
    }

    public String getAddress_3() {
        return address_3;
    }

    public void setAddress_3(String address_3) {
        this.address_3 = address_3;
    }

    public String getContactName() {
        return contactName;
    }

    public void setContactName(String contactName) {
        this.contactName = contactName;
    }

    public String getContactEmail() {
        return contactEmail;
    }

    public void setContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
    }

    public String getContactPhone() {
        return contactPhone;
    }

    public void setContactPhone(String contactPhone) {
        this.contactPhone = contactPhone;
    }

    public String getAdditionalInformation() {
        return additionalInformation;
    }

    public void setAdditionalInformation(String additionalInformation) {
        this.additionalInformation = additionalInformation;
    }

    public int getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(int postalCode) {
        this.postalCode = postalCode;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getOfficeLocation() {
        return officeLocation;
    }

    public void setOfficeLocation(String officeLocation) {
        this.officeLocation = officeLocation;
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

    public String getCreated_by() {
        return created_by;
    }

    public void setCreated_by(String created_by) {
        this.created_by = created_by;
    }
 
}
