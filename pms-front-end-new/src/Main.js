import React from 'react';
import { Switch, Route ,Link} from 'react-router-dom';
import Home from './Home';
import Shift from './components/shift-component/Shift';
import Account from './components/account-component/Account';
import Student from './components/student-component/Student';
import Schedule from './components/schedule-component/Schedule';
import Class from './components/class-component/Index';
import Course from './components/course-component/Index';
import CourseLevel from './components/course-level-component/Index';
import CourseLevelSheet from './components/time-sheet-component/CourseLevelSheet';

const Main = () =>(
 

 
      <main>
       
        <Switch>
          
          <Route exact path="/" component={Home}  />
          <Route path="/teacher/shift/:userId" component={Shift} />
          <Route path="/teacher" component={Account} />
          <Route path="/student/schedule/:studentId" component={Schedule} />
          <Route path="/student" component={Student} />
          <Route path="/class" component={Class} />
          <Route path="/course" component={Course} />
          <Route path="/course-level/time-sheet/:courseLevelId" component={CourseLevelSheet} />
          <Route path="/course-level" component={CourseLevel} />
        </Switch>
        </main>
    )
export default Main
