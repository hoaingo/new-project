package com.pms.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.pms.jdbc.orm.Key;
import java.util.Date;

/**
 *
 * @author katy.intern
 */
public class EmailDTO {
    @Key(value ="email_template_id")
    private int emailTemplateId;
    
    @Key(value ="email_template_name")
    private String emailTemplateName;
    
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT-4")
    @Key(value = "updated_date")
    private Date updatedDate;
    
    @Key(value = "updated_by")
    private String updatedBy;
    
     @Key(value = "subject")   
    private String subject;
     
    @Key(value = "message")
    private String message; 
    
    private String receiver; 
    
    private String name;
    
    private String company;
    
    private String yob;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getYob() {
        return yob;
    }

    public void setYob(String yob) {
        this.yob = yob;
    }

    public String getReceiver() {
        return receiver;
    }

    public void setReceiver(String receiver) {
        this.receiver = receiver;
    }

    public int getEmailTemplateId() {
        return emailTemplateId;
    }

    public void setEmailTemplateId(int emailTemplateId) {
        this.emailTemplateId = emailTemplateId;
    }

    public String getEmailTemplateName() {
        return emailTemplateName;
    }

    public void setEmailTemplateName(String emailTemplateName) {
        this.emailTemplateName = emailTemplateName;
    }    

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
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
      
    
}
