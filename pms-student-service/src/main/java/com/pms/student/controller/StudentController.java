/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.pms.student.controller;

import com.pms.model.StudentDTO;
import com.pms.model.ListStudentDTO;
import com.pms.model.paging.PagingResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.pms.student.dao.StudentDAO;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import static org.springframework.web.bind.annotation.RequestMethod.GET;

/**
 *
 * @author User
 */
@RestController
@RequestMapping("/scm/students")
public class StudentController {

    @Autowired
    StudentDAO studentDAO;

    @RequestMapping(value = "/get-all-student", method = GET)
    public PagingResult<ListStudentDTO> getListStudent(
            @RequestParam("page") int page,
            @RequestParam("limit") int limit,
            @RequestParam("studentName") String studentName,
            @RequestParam("className") String className) {
        return studentDAO.getListStudent(page, limit, studentName, className);
    }

    @RequestMapping(value = "/update-student", method = POST)
    public boolean updateStudent(@RequestBody StudentDTO student) {
        return studentDAO.updateStudent(student);
    }

    @RequestMapping(value = "/insert-student", method = POST)
    public boolean insertStudent(@RequestBody StudentDTO student) {
        return studentDAO.insertStudent(student);
    }

    @RequestMapping(value = "/delete-student", method = POST)
    public boolean deleteStudent(@RequestBody StudentDTO student) {
        return studentDAO.deleteStudent(student);
    }

    @RequestMapping(value = "/get-student-schedule", method = POST)
    public StudentDTO getStudentSchedule(@RequestBody StudentDTO objStudent) {
        return studentDAO.getStudentSchedule(objStudent);
    }
}
