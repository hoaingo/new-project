package com.pms.model.paging;

/**
 *
 * @author Conan
 */
public class PageUtils {

    /**
     * Return the offset of record in MySQL
     * @param pageNumber is positive numeric: 1, 2, 3,...
     * @param limit is positive numeric: 10, 20, 30,...
     * @return numeric is offset of record in MySQL
        For example:
        pageNumber = 1, limit = 10 -> offset = 0
        pageNumber = 2, limit = 10 -> offset = 10
     */
    public static final int convertToOffset(int pageNumber, int limit) {
        int page = pageNumber < 1? 0: pageNumber;
        return (page - 1) * limit;
    }
}
