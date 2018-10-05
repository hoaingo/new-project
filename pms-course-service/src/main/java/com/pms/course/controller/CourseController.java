package com.pms.course.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import com.pms.course.dao.CourseDAO;
import com.pms.model.CourseDTO;
import com.pms.model.ListCourseLevelNameDTO;
import com.pms.model.ListUserDTO;
import com.pms.model.paging.PagingResult;
import static org.springframework.web.bind.annotation.RequestMethod.GET;

/**
 *
 * @author Conan
 */
@RestController
@RequestMapping("/scm/course")
public class CourseController {

    @Autowired
    DiscoveryClient client;

    @Autowired
    CourseDAO courseDAO;

//    @RequestMapping("/get-all-course")
//    public List<CourseDTO> getAllCourse() {
//        return courseDAO.getAllCourse();
//    
//    } 
    @RequestMapping(value = "/get-all-course-paging-filter", method = GET)
    public PagingResult<CourseDTO> getAllCourse(
            @RequestParam("page") int page,
            @RequestParam("limit") int limit,
            @RequestParam("courseName") String courseName
    ) {
        return courseDAO.getAllCourse(page, limit, courseName);
    }

    @RequestMapping("/get-list-course-level-name")
    public List<ListCourseLevelNameDTO> getListCourseLevelName() {
        return courseDAO.getListCourseLevelName();
    }

    @RequestMapping("/get-list-user-name")
    public List<ListUserDTO> getListUserName() {
        return courseDAO.getListUserName();
    }

    @RequestMapping(value = "/add-course", method = POST)
    public boolean addCourse(@RequestBody CourseDTO course) {
        return courseDAO.addCourse(course);

    }

    @RequestMapping(value = "/delete-course", method = POST)
    public boolean deleteCourse(@RequestParam("courseId") long courseId) {
        return courseDAO.deleteCourse(courseId);
    }

    @RequestMapping(value = "/update-course", method = POST)
    public boolean updateCourse(@RequestBody CourseDTO course) {
        return courseDAO.updateCourse(course);

    }

}
