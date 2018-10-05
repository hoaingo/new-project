package com.pms.model;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.pms.enumeration.InvoiceEnum;
import com.pms.jdbc.orm.Key;
import java.util.Date;


/**
 *
 * @author john.intern
 */
public class InvoiceDTO {
    @Key(value = "invoice_id")
    long invoiceId;
    @Key(value = "status")
    InvoiceEnum status;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT-4")
    @Key(value = "created_date")
    Date createdDate;
    @Key(value = "created_by")
    String createdBy;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT-4")
    @Key(value = "updated_date")
    Date updatedDate;
    @Key(value = "updated_by")
    String updatedBy;
    @Key(value = "invoice_number")
    long invoiceNumber;
//    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT-4")
    @Key(value = "invoice_received_date")
    Date invoiceReceivedDate;
//    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT-4")
    @Key(value = "invoice_due_date")
    Date invoiceDueDate;
//    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT-4")
    @Key(value = "payment_terms")
    Date paymentTerms;
    @Key(value = "invoice_amount")
    long invoiceAmount;
    @Key(value = "invoice_currency")
    String invoiceCurrency;

    public long getInvoiceId() {
        return invoiceId;
    }

    public InvoiceEnum getStatus() {
        return status;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public Date getUpdatedDate() {
        return updatedDate;
    }

    public String getUpdatedBy() {
        return updatedBy;
    }

    public long getInvoiceNumber() {
        return invoiceNumber;
    }

    public Date getInvoiceReceivedDate() {
        return invoiceReceivedDate;
    }

    public Date getInvoiceDueDate() {
        return invoiceDueDate;
    }

    public Date getPaymentTerms() {
        return paymentTerms;
    }

    public long getInvoiceAmount() {
        return invoiceAmount;
    }

    public String getInvoiceCurrency() {
        return invoiceCurrency;
    }

    public void setInvoiceId(long invoiceId) {
        this.invoiceId = invoiceId;
    }

    public void setStatus(InvoiceEnum status) {
        this.status = status;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public void setUpdatedDate(Date updatedDate) {
        this.updatedDate = updatedDate;
    }

    public void setUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
    }

    public void setInvoiceNumber(long invoiceNumber) {
        this.invoiceNumber = invoiceNumber;
    }

    public void setInvoiceReceivedDate(Date invoiceReceivedDate) {
        this.invoiceReceivedDate = invoiceReceivedDate;
    }

    public void setInvoiceDueDate(Date invoiceDueDate) {
        this.invoiceDueDate = invoiceDueDate;
    }

    public void setPaymentTerms(Date paymentTerms) {
        this.paymentTerms = paymentTerms;
    }

    public void setInvoiceAmount(long invoiceAmount) {
        this.invoiceAmount = invoiceAmount;
    }

    public void setInvoiceCurrency(String invoiceCurrency) {
        this.invoiceCurrency = invoiceCurrency;
    }

 
}
