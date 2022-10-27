import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../../CourseCard/CourseCard";
import './courses.css';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSideNav from "../../Shared/LeftSideNav/LeftSideNav";

const Courses = () => {
  const allCourse = useLoaderData();
  console.log(allCourse);
  return (
    
    <div>
      <Container>
                <Row>
                    <Col lg='3' className='d-md-flex d-lg-block'>
                    <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg='9'>
                    <div  className="course-container">
                    {allCourse.map((course) => (
        <CourseCard key={course._id} course={course}></CourseCard>
      ))}
                    </div>
                    </Col>
                </Row>
            </Container>
      
    </div>
  );
};

export default Courses;
