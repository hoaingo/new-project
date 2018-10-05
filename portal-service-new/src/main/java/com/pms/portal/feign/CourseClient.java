package com.pms.portal.feign;

import java.util.List;
import com.pms.model.CourseDTO;
import com.pms.model.ListCourseLevelNameDTO;
import com.pms.model.ListUserDTO;
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
public interface CourseClient {

    @RequestMapping(value = "/scm/course/get-all-course-paging-filter", method = GET)
    PagingResult<CourseDTO> getAllCourse(
            @RequestParam("page") int page,
             @RequestParam("limit") int limit,
             @RequestParam("courseName") String courseName
    );

    @RequestMapping(value = "/scm/course/get-list-course-level-name", method = GET)
    List<ListCourseLevelNameDTO> getListCourseLevelName();

    @RequestMapping(value = "/scm/course/get-list-user-name", method = GET)
    List<ListUserDTO> getListUserName();

    @RequestMapping(value = "/scm/course/add-course", method = POST)
    boolean addCourse(@RequestBody CourseDTO course);

    @RequestMapping(value = "/scm/course/delete-course", method = POST)
    boolean deleteCourse(@RequestParam("courseId") long courseId);

    @RequestMapping(value = "/scm/course/update-course", method = POST)
    boolean updateCourse(@RequestBody CourseDTO course);
}
