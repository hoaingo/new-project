package com.pms.model;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.pms.jdbc.orm.Key;
import java.text.DecimalFormat;
import java.util.Date;


/**
 *
 * @author john.intern
 */
public class CurrencyDTO {
    @Key(value = "currency_code")
    String currencyCode;
    @Key(value = "currency_name")
    String currencyName;
    @Key(value = "rate")
    float rate;
    @Key(value = "pending_rate")
    float pendingRate;
    @Key(value = "is_enabled")
    int isEnabled;
    @Key(value = "is_base")
    int isBase;
    @Key(value = "unit")
    long unit;
    @Key(value = "batch_id")
    long batchId;
    @Key(value = "last_update_by")
    String lastUpdateBy;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT-4")
    @Key(value = "last_update_date")
    Date lastUpdateDate;

    public String getCurrencyCode() {
        return currencyCode;
    }

    public void setCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
    }

    public String getCurrencyName() {
        return currencyName;
    }

    public void setCurrencyName(String currencyName) {
        this.currencyName = currencyName;
    }

    public float getRate() {
        return rate;
    }

    public void setRate(float rate) {
        this.rate = rate;
    }

    public float getPendingRate() {
        return pendingRate;
    }

    public void setPendingRate(float pendingRate) {
        this.pendingRate = pendingRate;
    }

   

    public int getIsEnabled() {
        return isEnabled;
    }

    public void setIsEnabled(int isEnabled) {
        this.isEnabled = isEnabled;
    }

    public int getIsBase() {
        return isBase;
    }

    public void setIsBase(int isBase) {
        this.isBase = isBase;
    }

    public long getUnit() {
        return unit;
    }

    public void setUnit(long unit) {
        this.unit = unit;
    }

    public long getBatchId() {
        return batchId;
    }

    public void setBatchId(long batchId) {
        this.batchId = batchId;
    }

    public String getLastUpdateBy() {
        return lastUpdateBy;
    }

    public void setLastUpdateBy(String lastUpdateBy) {
        this.lastUpdateBy = lastUpdateBy;
    }

    public Date getLastUpdateDate() {
        return lastUpdateDate;
    }

    public void setLastUpdateDate(Date lastUpdateDate) {
        this.lastUpdateDate = lastUpdateDate;
    }
    
  
}
