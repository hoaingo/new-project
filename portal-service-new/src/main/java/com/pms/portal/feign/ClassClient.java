package com.pms.portal.feign;

import com.pms.model.ClassDTO;
import com.pms.model.paging.PagingResult;
import org.springframework.cloud.netflix.feign.EnableFeignClients;
import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *
 * @author dell
 */
@EnableFeignClients
@FeignClient("admin-service")
public interface ClassClient {
       

        @RequestMapping(value = "/scm/class/get-all-class-paging-filter", method = GET)
        PagingResult<ClassDTO> getAllClass(  @RequestParam("page") int page
                                                ,@RequestParam("limit") int limit 
                                                ,@RequestParam("courseLevelName") String courseLevelName
                                                ,@RequestParam("classId") long classId
                                                ,@RequestParam("userId") long userId
                                                 ) ;
        
        @RequestMapping(value = "/scm/class/add-class", method = POST)
        boolean addClass(@RequestBody ClassDTO ClassDTO) ;
        
       
        @RequestMapping(value = "/scm/class/delete-class", method = POST)
        boolean deleteClass(@RequestParam("classId") long classId);
        
        
        @RequestMapping(value = "/scm/class/update-class", method = POST)
        boolean updateClass(@RequestBody ClassDTO ClassDTO) ;
        
}
