package com.pms.Class.controller;

import com.pms.model.AccountDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import com.pms.model.paging.PagingResult;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import com.pms.Class.dao.ClassDAO;
import com.pms.model.ClassDTO;

/**
 *
 * @author Conan
 */
@RestController
@RequestMapping("/scm/class")
public class ClassController {

    @Autowired
    DiscoveryClient client;

    @Autowired
    ClassDAO classDAO;
    
//    @RequestMapping("/get-all-course")
//    public List<CourseDTO> getAllCourse() {
//        return courseDAO.getAllCourse();
//    
//    } 
    
    @RequestMapping(value="/get-all-class-paging-filter",method = GET)
    public PagingResult<ClassDTO> getAllClass(
                                                 
                                                 @RequestParam("page") int page
                                                ,@RequestParam("limit") int limit 
                                                ,@RequestParam("courseLevelName") String courseLevelName
                                                ,@RequestParam("classId") long classId
                                                ,@RequestParam("userId") long userId
                                                 ) {
        return classDAO.getAllClass(page, limit , courseLevelName ,classId,userId);
    }
    @RequestMapping(value = "/add-class", method = POST)
    public boolean addClass(@RequestBody ClassDTO classDTO) {
        return  classDAO.addClass(classDTO);
      
    }
    
    @RequestMapping(value = "/delete-class", method = POST)
    public boolean deleteClass(@RequestParam("classId") long classId) {
        return classDAO.deleteClass(classId);
    }  
    @RequestMapping(value = "/update-class", method = POST)
    public  boolean updateClass(@RequestBody ClassDTO ClassDTO) {
        return  classDAO.updateClass(ClassDTO);
        
    }
    
    

}
