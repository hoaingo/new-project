/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.pms.student.dao;

import com.pms.jdbc.orm.RowMapperUtils;
import com.pms.model.StudentDTO;
import com.pms.model.ListStudentDTO;
import com.pms.model.NotificationDTO;
import com.pms.model.ShiftDTO;
import com.pms.model.paging.PageUtils;
import com.pms.model.paging.PagingResult;
import com.pms.user.auth.UserSession;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;
import org.springframework.util.StringUtils;
import org.springframework.jdbc.core.JdbcTemplate;

/**
 *
 * @author User
 */
@Repository
public class StudentDAOImpl implements StudentDAO {

    private static final Logger logger = Logger.getLogger(StudentDAOImpl.class.getName());
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Value("${up_scm_get_list_student}")
    String getListStudent;

    @Value("${up_scm_insert_student}")
    String upScmInsertStudent;

    @Value("${up_scm_update_student}")
    String upScmUpdateStudent;

    @Value("${up_scm_delete_student}")
    String upScmDeleteStudent;
    
    @Value("${up_scm_get_student_schedule}")
    String upScmGetStudentSchedule;

    @Autowired
    UserSession userSession;

    @Override
    public boolean updateStudent(StudentDTO student) {
        boolean isSuccess = false;
        try {
            isSuccess = jdbcTemplate.update(upScmUpdateStudent,
                    student.getStudentId(),
                    student.getStudentName(),
                    student.getStudentDateOfBirth(),
                    student.getStudentGender().toString(),
                    student.getStudentPhone(),
                    student.getStudentAddress(),
                    student.getStudentMail(),
                    student.getStudentStatus().toString(),
                    userSession.getUserName()) > 0;
        } catch (DataAccessException e) {
            logger.log(Level.SEVERE, "Cannot update user", e);
        }
        return isSuccess;
    }

    @Override
    public boolean insertStudent(StudentDTO student) {

        boolean isSuccess = false;
        try {
            isSuccess = jdbcTemplate.update(upScmInsertStudent,
                    student.getStudentName(),
                    student.getStudentDateOfBirth(),
                    student.getStudentGender().toString(),
                    student.getStudentPhone(),
                    student.getStudentAddress(),
                    student.getStudentMail(),
                    student.getStudentStatus().toString(),
                    userSession.getUserName()) > 0;

        } catch (DataAccessException e) {
            logger.log(Level.SEVERE, "Cannot insert user", e);
            isSuccess = false;
        }
        return isSuccess;
    }

    @Override
    public boolean deleteStudent(StudentDTO student) {
        boolean isSuccess = false;
        try {
            isSuccess = jdbcTemplate.update(upScmDeleteStudent, student.getStudentId()) > 0;
        } catch (Exception e) {
            logger.log(Level.SEVERE, "Cannot delete user", e);
            isSuccess = false;
        }
        return isSuccess;
    }

    @Override
    public PagingResult<ListStudentDTO> getListStudent(int page, int limit, String studentName, String className) {
        List<ListStudentDTO> listStudent = jdbcTemplate.query(getListStudent,
                RowMapperUtils.getRowMapper(ListStudentDTO.class
                ),
                PageUtils.convertToOffset(page, limit),
                limit, studentName, className);

        return new PagingResult<>(listStudent, page, limit);
    }

    @Override
    public StudentDTO getStudentSchedule(StudentDTO objStudent) {
        StudentDTO student = new StudentDTO();

        try {
            List<ShiftDTO> listShift = jdbcTemplate.query(upScmGetStudentSchedule, RowMapperUtils.getRowMapper(ShiftDTO.class
            ), objStudent.getStudentId());
            student.setListShift(listShift);
        } catch (Exception e) {
            logger.log(Level.SEVERE, "Cannot get user schedule", e);
        }
        return student;
    }
}
