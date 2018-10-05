package com.pms.course.dao;

import com.pms.jdbc.orm.RowMapperUtils;
import com.pms.model.CourseDTO;
import com.pms.model.ListCourseLevelNameDTO;
import com.pms.model.ListUserDTO;
import com.pms.user.auth.UserSession;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.beans.factory.annotation.Value;
import com.pms.model.paging.PageUtils;
import com.pms.model.paging.PagingResult;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Conan
 */
@Repository
public class CourseDAOImpl implements CourseDAO {

    private static final Logger logger = Logger.getLogger(CourseDAOImpl.class.getName());
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Value("${up_pms_get_list_course}")
    String upPmsGetAllCourse;

    @Value("${up_pms_get_course_paging_filter}")
    String up_pms_get_course_paging_filter;

    @Value("${up_pms_insert_course}")
    String up_pms_insert_course;

    @Value("${up_pms_delete_course}")
    String up_pms_delete_course;

    @Value("${up_pms_update_course}")
    String up_pms_update_course;

    @Value("${up_pms_get_all_schedule}")
    String up_pms_get_all_schedule;

    @Value("${up_pms_get_schedule_id}")
    String up_pms_get_schedule_id;

    @Value("${up_pms_update_schedule}")
    String up_pms_update_schedule;

    @Value("${up_pms_insert_schedule}")
    String up_pms_insert_schedule;

    @Value("${up_pms_get_list_all_course_level_name}")
    String up_pms_get_list_all_course_level_name;

    @Value("${up_pms_get_list_class_name_by_course_level}")
    String up_pms_get_list_class_name_by_course_level;

    @Value("${up_pms_get_list_all_room_name}")
    String up_pms_get_list_all_room_name;

    @Value("${up_pms_get_list_all_teacher_name}")
    String up_pms_get_list_all_teacher_name;

    @Value("${up_pms_get_calendar}")
    String up_pms_get_calendar;

    @Autowired
    UserSession userSession;

    @Override
    public PagingResult<CourseDTO> getAllCourse(int page, int limit, String courseName) {
        List<CourseDTO> listCourse = jdbcTemplate.query(up_pms_get_course_paging_filter,
                 RowMapperUtils.getRowMapper(CourseDTO.class),
                 PageUtils.convertToOffset(page, limit),
                 limit, courseName);
        return new PagingResult<>(listCourse, page, limit);

    }

    @Override
    public List<ListCourseLevelNameDTO> getListCourseLevelName() {
        return jdbcTemplate.query(up_pms_get_list_all_course_level_name, RowMapperUtils.getRowMapper(ListCourseLevelNameDTO.class));
    }

    @Override
    public List<ListUserDTO> getListUserName() {
        return jdbcTemplate.query(up_pms_get_list_all_teacher_name, RowMapperUtils.getRowMapper(ListUserDTO.class));
    }

    @Override
    public boolean addCourse(CourseDTO course) {

        boolean isSuccess = false;
        try {
            isSuccess = jdbcTemplate.update(up_pms_insert_course,
                     course.getCourseName(),
                     course.getDescription(),
                     userSession.getUserName()) > 0;

        } catch (Exception e) {
            logger.log(Level.SEVERE, "Cannot add course address", e);
        }
        return isSuccess;
    }

    @Override
    public boolean deleteCourse(long courseId) {
        boolean isSuccess = false;
        try {
            isSuccess = jdbcTemplate.update(up_pms_delete_course, courseId) > 0;
        } catch (Exception e) {
            logger.log(Level.SEVERE, "Cannot delete course address", e);
        }
        return isSuccess;
    }

    @Override
    public boolean updateCourse(CourseDTO course) {
        boolean isSuccess = false;
        try {
            isSuccess = jdbcTemplate.update(up_pms_update_course,
                     course.getCourseId(),
                     course.getCourseName(),
                     course.getDescription(),
                     userSession.getUserName()) > 0;
        } catch (Exception e) {
            logger.log(Level.SEVERE, "Cannot update course", e);
        }
        return isSuccess;
    }
}
