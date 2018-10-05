package com.pms.Class.dao;

import com.pms.jdbc.orm.RowMapperUtils;

import com.pms.model.ClassDTO;
import com.pms.user.auth.UserSession;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.beans.factory.annotation.Value;
import com.pms.model.paging.PageUtils;
import com.pms.model.paging.PagingResult;
import java.util.Collections;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.stream.Collectors;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Conan
 */
@Repository
public class ClassDAOImpl implements ClassDAO {

    private static final Logger logger = Logger.getLogger(ClassDAOImpl.class.getName());
    @Autowired
    private JdbcTemplate jdbcTemplate;

   

    @Value("${up_pms_get_all_class}")
    String up_pms_get_all_class;
    
    @Value("${up_pms_insert_class}")
    String up_pms_insert_class;
    
    @Value("${up_pms_delete_class}")
    String up_pms_delete_class;
    
    @Value("${up_pms_update_class}")
    String up_pms_update_class;
    
    
    
    @Autowired
    UserSession userSession;

    @Override
    public PagingResult<ClassDTO> getAllClass(int page, int limit , String courseLevelName,long classId,long userId ) {
        List<ClassDTO> listCourse = jdbcTemplate.query(up_pms_get_all_class
                , RowMapperUtils.getRowMapper(ClassDTO.class)
                , PageUtils.convertToOffset(page, limit)
                , limit , courseLevelName,classId,userId );
        return new PagingResult<>(listCourse, page, limit);
        
    }
    @Override
    public boolean addClass(ClassDTO classDTO) {
        
        boolean isSuccess = false;      
        try {
        isSuccess =jdbcTemplate.update(up_pms_insert_class
                ,classDTO.getCourseLevelId()
                ,classDTO.getUserId()
                ,classDTO.getClassName()
                ,classDTO.getQuantity()
                ,classDTO.getStartDate()
                ,classDTO.getEndDate()
                ,classDTO.getClassStatus()
                ,userSession.getUserName())>0;
     
        }
        catch (Exception e) 
        {  
             logger.log(Level.SEVERE,"Cannot add class",e);
        } 
        return isSuccess;
    }
    @Override
    public boolean deleteClass(long classId) {
        boolean isSuccess = false;
        try
        {
            isSuccess = jdbcTemplate.update(up_pms_delete_class, classId) > 0;
        }
        catch (Exception e) 
        {  
            logger.log(Level.SEVERE,"Cannot delete class",e);
        } 
        return isSuccess;
    }
    @Override
    public boolean updateClass(ClassDTO classDTO) {
        boolean isSuccess = false;
        try
        {
            isSuccess = jdbcTemplate.update(up_pms_update_class
                    ,classDTO.getClassId()
                    ,classDTO.getCourseLevelId()
                    ,classDTO.getUserId()
                    ,classDTO.getClassName()
                    ,classDTO.getQuantity()
                    ,classDTO.getStartDate()
                    ,classDTO.getEndDate()
                    ,classDTO.getClassStatus()
                    ,userSession.getUserName()) > 0;    
            }
        catch (Exception e) 
        {  
            logger.log(Level.SEVERE,"Cannot class",e);
        } 
        return isSuccess;   
    }
    
}
