package com.pms.course.level.dao;

import com.pms.model.AccountDTO;
import com.pms.model.BranchDTO;
import com.pms.model.CourseDTO;
import com.pms.model.CourseLevelDTO;
import com.pms.model.ListCourseNameDTO;
import com.pms.model.ListUserDTO;
import com.pms.model.NotificationDTO;
import com.pms.model.RoomDTO;
import com.pms.model.TimeSheetDTO;
import com.pms.model.paging.PagingResult;
import java.util.List;

/**
 *
 * @author Conan
 */
public interface CourseLevelDAO {

//    List<CourseDTO> getAllCourse();
    PagingResult<CourseLevelDTO> getAllCourseLevel(int page, int limit, String courseName, String courseLevelName);

    List<TimeSheetDTO> getTimeSheet(long courseLevelId);

    boolean addCourseLevel(CourseLevelDTO courseLevel);

    boolean deleteCourseLevel(long courseLevelId);

    boolean updateCourseLevel(CourseLevelDTO courseLevel);

    List<ListUserDTO> getListUserName();

    List<ListCourseNameDTO> getListCourseName();

    PagingResult<RoomDTO> getListRoom(int page, int limit, String roomName);

    boolean addRoom(RoomDTO roomDTO);

    boolean deleteRoom(RoomDTO roomDTO);

    boolean updateRoom(RoomDTO roomDTO);

    PagingResult<BranchDTO> getListBranch(int page, int limit, String branchName);

    boolean addBranch(BranchDTO branchDTO);

    boolean deleteBranch(BranchDTO branchDTO);

    boolean updateBranch(BranchDTO branchDTO);
}
