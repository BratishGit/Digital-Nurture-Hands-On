import React from "react";
import Course from "./Course";

function CourseDetails(){
    const courses=[
        new Course(1,"Java","Scott"),
        new Course(2,"React","Andrew"),
        new Course(3,"Spring Boot","David")
    ];
    return(
        <div>
            <h2>Course Deatils</h2>

            <ul>
                {courses.map(course=>(
                    <li key={course.id}>
                        {course.name}-{course.trainer}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default CourseDetails;