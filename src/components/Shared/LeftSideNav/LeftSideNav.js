import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [courses, setCourses]= useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/courses')
        .then(res =>res.json())
        .then(data =>setCourses(data))
    }, [])

    return (
        <div>
            <h4>View course details</h4>
            <div>
                {
                    courses.map(course => <p key={course.course_id}>
                    <Link to={`/course/${course.course_id}`}><Button variant="outline-dark"> {course.name}</Button></Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;