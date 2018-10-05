package com.pms.course.level.dao;

import com.pms.jdbc.orm.RowMapperUtils;
import com.pms.model.AccountDTO;
import com.pms.model.BranchDTO;
import com.pms.model.CourseDTO;
import com.pms.model.CourseLevelDTO;
import com.pms.model.ListCourseNameDTO;
import com.pms.model.ListUserDTO;
import com.pms.user.auth.UserSession;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import com.pms.model.NotificationDTO;
import com.pms.model.RoleDTO;
import com.pms.model.RoomDTO;
import com.pms.model.TimeSheetDTO;
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
public class CourseLevelDAOImpl implements CourseLevelDAO {

    private static final Logger logger = Logger.getLogger(CourseLevelDAOImpl.class.getName());
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Value("${up_pms_get_list_course}")
    String upPmsGetAllCourse;

    @Value("${up_pms_get_course_level_paging_filter}")
    String up_pms_get_course_level_paging_filter;

    @Value("${up_pms_insert_course_level}")
    String up_pms_insert_course_level;

    @Value("${up_pms_delete_course_level}")
    String up_pms_delete_course_level;

    @Value("${up_pms_update_course_level}")
    String up_pms_update_course_level;

    @Value("${up_pms_get_list_all_user_name}")
    String up_pms_get_list_all_user_name;

    @Value("${up_pms_get_list_all_course_name}")
    String up_pms_get_list_all_course_name;

    @Value("${up_pms_get_list_room}")
    String up_pms_get_list_room;
    @Value("${up_pms_insert_room}")
    String up_pms_insert_room;
    @Value("${up_pms_update_room}")
    String up_pms_update_room;
    @Value("${up_pms_delete_room}")
    String up_pms_delete_room;

    @Value("${up_pms_get_list_branch}")
    String up_pms_get_list_branch;
    @Value("${up_pms_insert_branch}")
    String up_pms_insert_branch;
    @Value("${up_pms_update_branch}")
    String up_pms_update_branch;
    @Value("${up_pms_delete_branch}")
    String up_pms_delete_branch;
    @Value("${up_pms_get_time_sheet}")
    String up_pms_get_time_sheet;

    @Autowired
    UserSession userSession;

    @Override
    public PagingResult<CourseLevelDTO> getAllCourseLevel(int page, int limit, String courseName, String courseLevelName) {
        List<CourseLevelDTO> listCourse = jdbcTemplate.query(up_pms_get_course_level_paging_filter, RowMapperUtils.getRowMapper(CourseLevelDTO.class), PageUtils.convertToOffset(page, limit), limit, courseName, courseLevelName);
        return new PagingResult<>(listCourse, page, limit);

    }

    @Override
    public List<TimeSheetDTO> getTimeSheet(long courseLevelId) {
        return jdbcTemplate.query(up_pms_get_time_sheet, RowMapperUtils.getRowMapper(TimeSheetDTO.class), courseLevelId);
    }

//    @Override
//    public List<CourseDTO> getAllCourse() {
//        return jdbcTemplate.query(upPmsGetAllCourse, RowMapperUtils.getRowMapper(CourseDTO.class));
//    }
    @Override
    public boolean addCourseLevel(CourseLevelDTO courseLevel) {

        boolean isSuccess = false;
        try {
            isSuccess = jdbcTemplate.update(up_pms_insert_course_level,
                    courseLevel.getCourseId(),
                    courseLevel.getCourseLevelName(),
                    courseLevel.getCurriculum(),
                    courseLevel.getDuration(),
                    courseLevel.getCost(),
                    courseLevel.getStatus(),
                    userSession.getUserName(),
                    courseLevel.getRoomId(),
                    courseLevel.getDay(),
                    courseLevel.getStartTime(),
                    courseLevel.getEndTime()) > 0;

        } catch (Exception e) {
            logger.log(Level.SEVERE, "Cannot add course level address", e);
        }
        return isSuccess;
    }

    @Override
    public boolean deleteCourseLevel(long courseLevelId) {
        boolean isSuccess = false;
        try {
            isSuccess = jdbcTemplate.update(up_pms_delete_course_level, courseLevelId) > 0;
        } catch (Exception e) {
            logger.log(Level.SEVERE, "Cannot delete course address", e);
        }
        return isSuccess;
    }

    @Override
    public boolean updateCourseLevel(CourseLevelDTO courseLevel) {
        boolean isSuccess = false;
        try {
            isSuccess = jdbcTemplate.update(up_pms_update_course_level,
                    courseLevel.getCourseLevelId(),
                    courseLevel.getCourseId(),
                    courseLevel.getCourseLevelName(),
                    courseLevel.getCurriculum(),
                    courseLevel.getDuration(),
                    courseLevel.getCost(),
                    courseLevel.getStatus(),
                    userSession.getUserName()) > 0;
        } catch (Exception e) {
            logger.log(Level.SEVERE, "Cannot update course level", e);
        }
        return isSuccess;
    }

    @Override
    public List<ListUserDTO> getListUserName() {
        return jdbcTemplate.query(up_pms_get_list_all_user_name, RowMapperUtils.getRowMapper(ListUserDTO.class));

    }

    @Override
    public List<ListCourseNameDTO> getListCourseName() {
        return jdbcTemplate.query(up_pms_get_list_all_course_name, RowMapperUtils.getRowMapper(ListCourseNameDTO.class));

    }

    @Override
    public PagingResult<RoomDTO> getListRoom(int page, int limit, String roomName) {
        List<RoomDTO> listCourse = jdbcTemplate.query(up_pms_get_list_room, RowMapperUtils.getRowMapper(RoomDTO.class), PageUtils.convertToOffset(page, limit), limit, roomName);
        return new PagingResult<>(listCourse, page, limit);
    }

    @Override
    public boolean addRoom(RoomDTO roomDTO) {
        boolean isSuccess = false;
        try {
            isSuccess = jdbcTemplate.update(up_pms_insert_room,
                    roomDTO.getBranchId(),
                    roomDTO.getRoomName(),
                    roomDTO.getFloor(),
                    roomDTO.getCapacity(),
                    roomDTO.getRoomStatus()) > 0;

        } catch (Exception e) {
            logger.log(Level.SEVERE, "Cannot add course level address", e);
        }
        return isSuccess;
    }

    @Override
    public boolean deleteRoom(RoomDTO roomDTO) {
        boolean isSuccess = false;
        try {
            isSuccess = jdbcTemplate.update(up_pms_delete_room, roomDTO.getRoomId()) > 0;
        } catch (Exception e) {
            logger.log(Level.SEVERE, "Cannot delete course address", e);
        }
        return isSuccess;
    }

    @Override
    public boolean updateRoom(RoomDTO roomDTO) {
        boolean isSuccess = false;
        try {
            isSuccess = jdbcTemplate.update(up_pms_update_room,
                    roomDTO.getRoomId(),
                    roomDTO.getBranchId(),
                    roomDTO.getRoomName(),
                    roomDTO.getFloor(),
                    roomDTO.getCapacity(),
                    roomDTO.getRoomStatus()) > 0;
        } catch (Exception e) {
            logger.log(Level.SEVERE, "Cannot update course level", e);
        }
        return isSuccess;
    }

    @Override
    public PagingResult<BranchDTO> getListBranch(int page, int limit, String branchName) {
        List<BranchDTO> listCourse = jdbcTemplate.query(up_pms_get_list_branch,
                RowMapperUtils.getRowMapper(BranchDTO.class),
                PageUtils.convertToOffset(page, limit),
                limit, branchName);
        return new PagingResult<>(listCourse, page, limit);
    }

    @Override
    public boolean addBranch(BranchDTO branchDTO) {
        boolean isSuccess = false;
        try {
            isSuccess = jdbcTemplate.update(up_pms_insert_branch,
                    branchDTO.getBranchName(),
                    branchDTO.getBranchAddress()) > 0;

        } catch (Exception e) {
            logger.log(Level.SEVERE, "Cannot add course level address", e);
        }
        return isSuccess;
    }

    @Override
    public boolean deleteBranch(BranchDTO branchDTO) {
        boolean isSuccess = false;
        try {
            isSuccess = jdbcTemplate.update(up_pms_delete_branch, branchDTO.getBranchId()) > 0;
        } catch (Exception e) {
            logger.log(Level.SEVERE, "Cannot delete course address", e);
        }
        return isSuccess;
    }

    @Override
    public boolean updateBranch(BranchDTO branchDTO) {
        boolean isSuccess = false;
        try {
            isSuccess = jdbcTemplate.update(up_pms_update_branch,
                    branchDTO.getBranchId(),
                    branchDTO.getBranchName(),
                    branchDTO.getBranchAddress()) > 0;
        } catch (Exception e) {
            logger.log(Level.SEVERE, "Cannot update course level", e);
        }
        return isSuccess;
    }

}
