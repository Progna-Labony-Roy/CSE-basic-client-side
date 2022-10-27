import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../../CourseCard/CourseCard";
import './courses.css'

const Courses = () => {
  const allCourse = useLoaderData();
  console.log(allCourse);
  return (
    <div className="course-container">
      {allCourse.map((course) => (
        <CourseCard key={course._id} course={course}></CourseCard>
      ))}
    </div>
  );
};

export default Courses;
