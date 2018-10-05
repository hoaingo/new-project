/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.pms.portal.controller;

import com.pms.model.AccountDTO;
import com.pms.model.ListStudentDTO;
import com.pms.model.StudentDTO;
import com.pms.model.paging.PagingResult;
import com.pms.portal.auth.AuthenticationService;
import com.pms.portal.feign.StudentClient;
import com.pms.portal.model.WebSocket;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author User
 */
@RestController
@RequestMapping("/scm/students")
public class StudentController {

    @Autowired
    StudentClient client;
    @Autowired
    AuthenticationService authService;
    @Autowired
    WebSocket websocket;

    @RequestMapping("/get-all-student")
    public PagingResult<ListStudentDTO> getListStudent(
            @RequestParam("page") int page,
            @RequestParam("limit") int limit,
            @RequestParam("studentName") String studentName,
            @RequestParam("className") String className) {
        return client.getListStudent(page, limit, studentName, className);
    }

    @RequestMapping(value = "/update-student", method = POST)
    public boolean updateStudent(@RequestBody StudentDTO studentObj) {
        return client.updateStudent(studentObj);
    }
    @RequestMapping(value = "/insert-student", method = POST)
    public boolean insertStudent(@RequestBody StudentDTO studentObj) {
        return client.insertStudent(studentObj);
    }
    @RequestMapping(value = "/delete-student", method = POST)
    public boolean deleteStudent(@RequestBody StudentDTO studentObj) {
        return client.deleteStudent(studentObj);
    }
    @RequestMapping(value = "/get-student-schedule" ,method = POST)
    public StudentDTO getStudentSchedule(@RequestBody StudentDTO studentObj) {
        return client.getStudentSchedule(studentObj);
    }
}
