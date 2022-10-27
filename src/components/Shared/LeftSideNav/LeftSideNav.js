import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [courses, setCourses]= useState([]);

    useEffect( () =>{
        fetch('https://server-side-lyart.vercel.app/courses')
        .then(res =>res.json())
        .then(data =>setCourses(data))
    }, [])

    return (
        <div>
            <h4 className='mb-4 fst-italic'>View course details</h4>
            <div>
                {
                    courses.map(course => <p key={course.course_id}>
                    <Link to={`/course/${course.course_id}`}><Button variant="secondary"> {course.name}</Button></Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;