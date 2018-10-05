package com.pms.model;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.pms.jdbc.orm.Key;
import java.util.Date;


/**
 *
 * @author john.intern
 */
public class ProjectInfoDTO {
    
    @Key(value = "project_id")
    long projectId;
    @Key(value = "project_name")
    String projectName;
    @Key(value = "project_owner")
    long projectOwner;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT-4")
    @Key(value = "created_date")
    Date createdDate;
    @Key(value = "created_by")
    String createdBy;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT-4")
    @Key(value = "update_date")
    Date updatedDate;
    @Key(value = "update_by")
    String updatedBy;
    @Key(value = "user_name" ,required = false)
    String userName;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
    
    public long getProjectId() {
        return projectId;
    }

    public String getProjectName() {
        return projectName;
    }

    public long getProjectOwner() {
        return projectOwner;
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

    public void setProjectId(long projectId) {
        this.projectId = projectId;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public void setProjectOwner(long projectOwner) {
        this.projectOwner = projectOwner;
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
        
}
