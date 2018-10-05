package com.pms.portal.feign;

import com.pms.model.BranchDTO;
import java.util.List;
import com.pms.model.CourseLevelDTO;
import com.pms.model.ListCourseNameDTO;
import com.pms.model.ListUserDTO;
import com.pms.model.RoomDTO;
import com.pms.model.TimeSheetDTO;
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
 * @author dell
 */
@EnableFeignClients
@FeignClient("admin-service")
public interface CourseLevelClient {

    @RequestMapping(value = "/scm/course-level/get-all-course-level-paging-filter", method = GET)
    PagingResult<CourseLevelDTO> getAllCourseLevel(
            @RequestParam("page") int page,
            @RequestParam("limit") int limit,
            @RequestParam("courseName") String courseName,
            @RequestParam("courseLevelName") String courseLevelName);

    @RequestMapping(value = "/scm/course-level/get-time-sheet", method = GET)
    public List<TimeSheetDTO> getTimeSheet(@RequestParam("courseLevelId") long courseLevelId);

    @RequestMapping(value = "/scm/course-level/add-course-level", method = POST)
    boolean addCourseLevel(@RequestBody CourseLevelDTO courseLevel);

    @RequestMapping(value = "/scm/course-level/delete-course-level", method = POST)
    boolean deleteCourseLevel(@RequestParam("courseLevelId") long courseLevelId);

    @RequestMapping(value = "/scm/course-level/update-course-level", method = POST)
    boolean updateCourseLevel(@RequestBody CourseLevelDTO courseLevel);

    @RequestMapping("/scm/course-level/get-list-user-name")
    List<ListUserDTO> getListUserName();

    @RequestMapping("/scm/course-level/get-list-course-name")
    List<ListCourseNameDTO> getListCourseName();

    @RequestMapping(value = "/scm/course-level/get-list-room", method = GET)
    PagingResult<RoomDTO> getListRoom(
            @RequestParam("page") int page,
            @RequestParam("limit") int limit,
            @RequestParam("roomName") String roomName);

    @RequestMapping(value = "/scm/course-level/add-room", method = POST)
    boolean addRoom(@RequestBody RoomDTO roomDTO);

    @RequestMapping(value = "/scm/course-level/delete-room", method = POST)
    boolean deleteRoom(@RequestBody RoomDTO roomDTO);

    @RequestMapping(value = "/scm/course-level/update-room", method = POST)
    boolean updateRoom(@RequestBody RoomDTO roomDTO);

    @RequestMapping(value = "/scm/course-level/get-list-branch", method = GET)
    PagingResult<BranchDTO> getListBranch(
            @RequestParam("page") int page,
            @RequestParam("limit") int limit,
            @RequestParam("branchName") String branchName);

    @RequestMapping(value = "/scm/course-level/add-branch", method = POST)
    boolean addBranch(@RequestBody BranchDTO branchDTO);

    @RequestMapping(value = "/scm/course-level/delete-branch", method = POST)
    boolean deleteBranch(@RequestBody BranchDTO branchDTO);

    @RequestMapping(value = "/scm/course-level/update-branch", method = POST)
    boolean updateBranch(@RequestBody BranchDTO branchDTO);
}
