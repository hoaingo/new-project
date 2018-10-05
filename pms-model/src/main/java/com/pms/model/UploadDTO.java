package com.pms.model;

import com.pms.jdbc.orm.Key;
import java.util.Date;

/**
 *
 * @author katy.intern
 */
public class UploadDTO {
    
    @Key(value = "document_id")
    private int documentId;
    @Key(value = "data")
    private byte[] data;
    @Key (value ="file_name")
    private String filename;
    @Key (value ="file_type")
    private String filetype;
    @Key(value = "created_date")
    private Date createdDate;
    @Key(value = "created_by")
    private String createdBy;

    public int getDocumentId() {
        return documentId;
    }

    public void setDocumentId(int documentId) {
        this.documentId = documentId;
    }

    public byte[] getData() {
        return data;
    }

    public void setData(byte[] data) {
        this.data = data;
    }

    public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    public String getFiletype() {
        return filetype;
    }

    public void setFiletype(String filetype) {
        this.filetype = filetype;
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

