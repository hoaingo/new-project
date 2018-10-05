package com.pms.Class.dao;

import com.pms.model.ClassDTO;
import com.pms.model.paging.PagingResult;

/**
 *
 * @author Conan
 */
public interface ClassDAO {

    
    PagingResult<ClassDTO> getAllClass(int page, int limit , String courseLevelName , long classId,long userId );
    boolean addClass(ClassDTO ClassDTO);
    boolean deleteClass(long classId);
    boolean updateClass(ClassDTO ClassDTO);
   
}
