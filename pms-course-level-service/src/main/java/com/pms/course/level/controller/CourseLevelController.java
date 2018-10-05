package com.pms.course.level.controller;

import com.pms.model.AccountDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.pms.model.DepartmentDTO;
import com.pms.model.NotificationDTO;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import com.pms.model.CourseDTO;
import com.pms.model.paging.PagingResult;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import com.pms.course.level.dao.CourseLevelDAO;
import com.pms.model.BranchDTO;
import com.pms.model.CourseLevelDTO;
import com.pms.model.ListCourseNameDTO;
import com.pms.model.ListUserDTO;
import com.pms.model.RoomDTO;
import com.pms.model.TimeSheetDTO;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

/**
 *
 * @author Conan
 */
@RestController
@RequestMapping("/scm/course-level")
public class CourseLevelController {

    @Autowired
    DiscoveryClient client;

    @Autowired
    CourseLevelDAO courseLevelDAO;

//    @RequestMapping("/get-all-course")
//    public List<CourseDTO> getAllCourse() {
//        return courseDAO.getAllCourse();
//    
//    } 
    @RequestMapping(value = "/get-all-course-level-paging-filter", method = GET)
    public PagingResult<CourseLevelDTO> getAllCourseLevel(
            @RequestParam("page") int page,
            @RequestParam("limit") int limit,
            @RequestParam("courseName") String courseName,
            @RequestParam("courseLevelName") String courseLevelName) {
        return courseLevelDAO.getAllCourseLevel(page, limit, courseName, courseLevelName);
    }
    
    @RequestMapping(value = "/get-time-sheet", method = GET)
    public List<TimeSheetDTO> getTimeSheet(@RequestParam("courseLevelId") long courseLevelId) {
        return courseLevelDAO.getTimeSheet(courseLevelId);
    }

    @RequestMapping(value = "/add-course-level", method = POST)
    public boolean addCourseLevel(@RequestBody CourseLevelDTO courseLevel) {
        return courseLevelDAO.addCourseLevel(courseLevel);

    }

    @RequestMapping(value = "/delete-course-level", method = POST)
    public boolean deleteCourseLevel(@RequestParam("courseLevelId") long courseLevelId) {
        return courseLevelDAO.deleteCourseLevel(courseLevelId);
    }

    @RequestMapping(value = "/update-course-level", method = POST)
    public boolean updateCourseLevel(@RequestBody CourseLevelDTO courseLevel) {
        return courseLevelDAO.updateCourseLevel(courseLevel);

    }

    @RequestMapping("/get-list-user-name")
    public List<ListUserDTO> getListUserName() {
        return courseLevelDAO.getListUserName();
    }

    @RequestMapping("/get-list-course-name")
    public List<ListCourseNameDTO> getListCourseName() {
        return courseLevelDAO.getListCourseName();
    }

    @RequestMapping(value = "/get-list-room", method = GET)
    public PagingResult<RoomDTO> getListRoom(
            @RequestParam("page") int page,
            @RequestParam("limit") int limit,
            @RequestParam("roomName") String roomName) {
        return courseLevelDAO.getListRoom(page, limit, roomName);
    }

    @RequestMapping(value = "/add-room", method = POST)
    public boolean addRoom(@RequestBody RoomDTO roomDTO) {
        return courseLevelDAO.addRoom(roomDTO);
    }

    @RequestMapping(value = "/delete-room", method = POST)
    public boolean deleteRoom(@RequestBody RoomDTO roomDTO) {
        return courseLevelDAO.deleteRoom(roomDTO);
    }

    @RequestMapping(value = "/update-room", method = POST)
    public boolean updateRoom(@RequestBody RoomDTO roomDTO) {
        return courseLevelDAO.updateRoom(roomDTO);
    }

    @RequestMapping("/get-list-branch")
    public PagingResult<BranchDTO> getListBranch(
            @RequestParam("page") int page,
            @RequestParam("limit") int limit,
            @RequestParam("branchName") String branchName) {
        return courseLevelDAO.getListBranch(page, limit, branchName);
    }

    @RequestMapping(value = "/add-branch", method = POST)
    public boolean addBranch(@RequestBody BranchDTO branchDTO) {
        return courseLevelDAO.addBranch(branchDTO);
    }

    @RequestMapping(value = "/delete-branch", method = POST)
    public boolean deleteBranch(@RequestBody BranchDTO branchDTO) {
        return courseLevelDAO.deleteBranch(branchDTO);
    }

    @RequestMapping(value = "/update-branch", method = POST)
    public boolean updateBranch(@RequestBody BranchDTO branchDTO) {
        return courseLevelDAO.updateBranch(branchDTO);
    }
}
