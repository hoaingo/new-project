package com.pms.portal.controller;

import com.pms.model.ClassDTO;
import com.pms.model.paging.PagingResult;
import com.pms.portal.auth.AuthenticationService;
import com.pms.portal.feign.ClassClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping(value = "/scm/class")
public class ClassController {
    @Autowired
    ClassClient client;
    @Autowired
    AuthenticationService authService;


    
    
    @RequestMapping(value = "/get-all-class-paging-filter", method = GET)
    public PagingResult<ClassDTO> getAllClass( @RequestParam("page") int page
                                                ,@RequestParam("limit") int limit 
                                                ,@RequestParam("courseLevelName") String courseLevelName
                                                ,@RequestParam("classId") long classId
                                                ,@RequestParam("userId") long userId
                                                 ) {
        return client.getAllClass(page,limit,courseLevelName,classId,userId);
    }
    @RequestMapping(value = "/add-class", method = POST)
    public boolean addClass(@RequestBody ClassDTO ClassDTO) {
        return  client.addClass(ClassDTO);
      
    }
    
    @RequestMapping(value = "/delete-class", method = POST)
    public boolean deleteClass(@RequestParam("classId") long classId) {
        return client.deleteClass(classId);
    }  
    @RequestMapping(value = "/update-class", method = POST)
    public  boolean updateClass(@RequestBody ClassDTO ClassDTO) {
        return  client.updateClass(ClassDTO);
        
    }
    
    

}