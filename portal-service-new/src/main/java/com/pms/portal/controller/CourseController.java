package com.pms.portal.controller;

import com.pms.model.CourseDTO;
import com.pms.model.ListCourseLevelNameDTO;
import com.pms.model.ListUserDTO;
import com.pms.model.paging.PagingResult;
import com.pms.portal.auth.AuthenticationService;
import com.pms.portal.feign.CourseClient;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping(value = "/scm/course")
public class CourseController {

    @Autowired
    CourseClient client;
    @Autowired
    AuthenticationService authService;

    @RequestMapping(value = "/get-list-course-level-name", method = GET)
    public List<ListCourseLevelNameDTO> getListCourseLevelName() {
        return client.getListCourseLevelName();
    }

    @RequestMapping(value = "/get-list-user-name", method = GET)
    public List<ListUserDTO> getListUserName() {
        return client.getListUserName();
    }

    @RequestMapping(value = "/get-all-course-paging-filter", method = GET)
    public PagingResult<CourseDTO> getAllCourse(
            @RequestParam("page") int page,
             @RequestParam("limit") int limit,
             @RequestParam("courseName") String courseName
    ) {
        return client.getAllCourse(page, limit, courseName);
    }

    @RequestMapping(value = "/add-course", method = POST)
    public boolean addCourse(@RequestBody CourseDTO course) {
        return client.addCourse(course);
    }

    @RequestMapping(value = "/delete-course", method = POST)
    public boolean deleteCourse(@RequestParam("courseId") long courseId) {
        return client.deleteCourse(courseId);
    }

    @RequestMapping(value = "/update-course", method = POST)
    public boolean updateCourse(@RequestBody CourseDTO course) {
        return client.updateCourse(course);
    }
}
