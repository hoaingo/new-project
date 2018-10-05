package com.pms.model.paging;

import com.pms.model.PagingDTO;
import java.util.List;

/**
 *
 * @author Conan
 * @param <T>
 */
public class PagingResult<T extends PagingDTO>{

    private double limit;
    private int page;
    private double totalPage;
    private int totalRecord;
    private List<T> records;

    public PagingResult() {}

    public PagingResult(List<T> records, int page, int limit) {
        this.limit = limit;
        this.page = page;
        this.records = records;
        this.totalPage = records.isEmpty()? 0: (Math.ceil(records.get(0).getTotalFound() / limit));
        this.totalRecord = records.size();
    }
    
    public int getPage() {
        return page;
    }

    public void setPage(int page) {
        this.page = page;
    }

    public int getTotalRecord() {
        return totalRecord;
    }

    public void setTotalRecord(int totalRecord) {
        this.totalRecord = totalRecord;
    }

    public List<T> getRecords() {
        return records;
    }

    public void setRecords(List<T> records) {
        this.records = records;
    }

    public double getLimit() {
        return limit;
    }

    public void setLimit(double limit) {
        this.limit = limit;
    }

    public double getTotalPage() {
        return totalPage;
    }

    public void setTotalPage(double totalPage) {
        this.totalPage = totalPage;
    }

    
}
