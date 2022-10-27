import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Course = () => {
    const courseInfo=useLoaderData();
    const {intro,description,image_url,details}=courseInfo;
    return (
        <div>
            <div className='d-flex justify-content-between'>
            <h3 className='fst-italic w-75'>{intro}</h3>
            <Button>DownLoad pdf</Button>
            </div>
            <p>{description}</p>
            <p>{details}</p>
            <p><img className='w-25' src={image_url} alt="" /></p>
            <div>
                <h5>Another subjects related to computer science</h5>
                <ul>
                    <li>Artificial Intelligence</li>
                    <li>Cloud Computing</li>
                    <li>OOP</li>
                    <li>Deep Learning</li>
                </ul>
            </div>
            <div className='d-flex'>
            <Link to='/courses'>
          <Button className='mb-5 me-3' variant="primary">All course</Button>
          </Link>
          <Link to={`/details/${courseInfo._id}`}>
          <Button className='mb-5' variant="primary">Get Premium Access</Button>
          </Link>
            </div>
        </div>
    );
};

export default Course;