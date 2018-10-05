/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.pms.student.dao;

import com.pms.model.StudentDTO;
import com.pms.model.ListStudentDTO;
import com.pms.model.paging.PagingResult;

/**
 *
 * @author User
 */
public interface StudentDAO {

    boolean updateStudent(StudentDTO account);

    boolean insertStudent(StudentDTO account);

    PagingResult<ListStudentDTO> getListStudent(int page, int limit, String studentName, String className);

    StudentDTO getStudentSchedule(StudentDTO objStudent);

    boolean deleteStudent(StudentDTO objStudent);
}
