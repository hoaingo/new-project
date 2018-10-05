package com.pms.portal.controller;

import com.pms.model.BranchDTO;
import com.pms.model.CourseDTO;
import com.pms.model.CourseLevelDTO;
import com.pms.model.ListCourseNameDTO;
import com.pms.model.ListUserDTO;
import com.pms.model.RoomDTO;
import com.pms.model.TimeSheetDTO;
import com.pms.model.paging.PagingResult;
import com.pms.portal.auth.AuthenticationService;
import com.pms.portal.feign.CourseClient;
import com.pms.portal.feign.CourseLevelClient;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping(value = "/scm/course-level")
public class CourseLevelController {

    @Autowired
    CourseLevelClient client;
    @Autowired
    AuthenticationService authService;

//    
//    @RequestMapping(value = "/get-all-course", method = GET)
//    public List<CourseDTO> getAllCourse() {
//        return client.getAllCourse();
//    }
    @RequestMapping(value = "/get-all-course-level-paging-filter", method = GET)
    public PagingResult<CourseLevelDTO> getAllCourseLevel(
            @RequestParam("page") int page,
            @RequestParam("limit") int limit,
            @RequestParam("courseName") String courseName,
            @RequestParam("courseLevelName") String courseLevelName) {
        return client.getAllCourseLevel(page, limit, courseName, courseLevelName);
    }
    
    @RequestMapping(value = "/get-time-sheet", method = GET)
    public List<TimeSheetDTO> getTimeSheet(@RequestParam("courseLevelId") long courseLevelId) {
        return client.getTimeSheet(courseLevelId);
    }

    @RequestMapping(value = "/add-course-level", method = POST)
    public boolean addCourseLevel(@RequestBody CourseLevelDTO courseLevel) {
        return client.addCourseLevel(courseLevel);

    }

    @RequestMapping(value = "/delete-course-level", method = POST)
    public boolean deleteCourseLevel(@RequestParam("courseLevelId") long courseLevelId) {
        return client.deleteCourseLevel(courseLevelId);
    }

    @RequestMapping(value = "/update-course-level", method = POST)
    public boolean updateCourseLevel(@RequestBody CourseLevelDTO courseLevel) {
        return client.updateCourseLevel(courseLevel);

    }

    @RequestMapping("/get-list-user-name")
    public List<ListUserDTO> getListUserName() {
        return client.getListUserName();
    }

    @RequestMapping("/get-list-course-name")
    public List<ListCourseNameDTO> getListCourseName() {
        return client.getListCourseName();
    }

    @RequestMapping("/get-list-room")
    public PagingResult<RoomDTO> getListRoom(
            @RequestParam("page") int page,
            @RequestParam("limit") int limit,
            @RequestParam("roomName") String roomName) {
        return client.getListRoom(page, limit, roomName);
    }

    @RequestMapping(value = "/add-room", method = POST)
    public boolean addRoom(@RequestBody RoomDTO roomDTO) {
        return client.addRoom(roomDTO);

    }

    @RequestMapping(value = "/delete-room", method = POST)
    public boolean deleteRoom(@RequestBody RoomDTO roomDTO) {
        return client.deleteRoom(roomDTO);
    }

    @RequestMapping(value = "/update-room", method = POST)
    public boolean updateRoom(@RequestBody RoomDTO roomDTO) {
        return client.updateRoom(roomDTO);

    }

    @RequestMapping("/get-list-branch")
    public PagingResult<BranchDTO> getListBranch(
            @RequestParam("page") int page,
            @RequestParam("limit") int limit,
            @RequestParam("branchName") String branchName) {
        return client.getListBranch(page, limit, branchName);
    }

    @RequestMapping(value = "/add-branch", method = POST)
    public boolean addBranch(@RequestBody BranchDTO branchDTO) {
        return client.addBranch(branchDTO);

    }

    @RequestMapping(value = "/delete-branch", method = POST)
    public boolean deleteBranch(@RequestBody BranchDTO branchDTO) {
        return client.deleteBranch(branchDTO);
    }

    @RequestMapping(value = "/update-branch", method = POST)
    public boolean updateBranch(@RequestBody BranchDTO branchDTO) {
        return client.updateBranch(branchDTO);
    }
}
