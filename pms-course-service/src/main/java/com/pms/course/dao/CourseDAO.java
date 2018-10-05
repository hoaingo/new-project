package com.pms.course.dao;

import com.pms.model.CourseDTO;
import com.pms.model.ListCourseLevelNameDTO;
import com.pms.model.ListUserDTO;
import com.pms.model.paging.PagingResult;
import java.util.List;

/**
 *
 * @author Conan
 */
public interface CourseDAO {

    PagingResult<CourseDTO> getAllCourse(int page, int limit , String courseName );
    boolean addCourse(CourseDTO course);
    boolean deleteCourse(long courseId);
    boolean updateCourse(CourseDTO course);
    List<ListCourseLevelNameDTO> getListCourseLevelName();
    List<ListUserDTO> getListUserName();
   
}
