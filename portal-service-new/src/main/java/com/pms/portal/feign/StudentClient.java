/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.pms.portal.feign;

import com.pms.model.ListStudentDTO;
import com.pms.model.StudentDTO;
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
 * @author User
 */
@EnableFeignClients
@FeignClient("admin-service")
public interface StudentClient {

    @RequestMapping(value = "/scm/students/get-all-student", method = GET)
    public PagingResult<ListStudentDTO> getListStudent(
            @RequestParam("page") int page,
            @RequestParam("limit") int limit,
            @RequestParam("studentName") String studentName,
            @RequestParam("className") String className);

    @RequestMapping(value = "/scm/students/update-student", method = POST)
    boolean updateStudent(@RequestBody StudentDTO studentObj);

    @RequestMapping(value = "/scm/students/insert-student", method = POST)
    boolean insertStudent(@RequestBody StudentDTO studentObj);

    @RequestMapping(value = "/scm/students/delete-student", method = POST)
    boolean deleteStudent(@RequestBody StudentDTO studentObj);
    
    @RequestMapping(value = "/scm/students/get-student-schedule", method = POST)
    StudentDTO getStudentSchedule(@RequestBody StudentDTO studentObj);
}
