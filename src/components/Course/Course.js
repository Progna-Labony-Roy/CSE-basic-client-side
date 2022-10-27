import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Course = () => {
    const courseInfo=useLoaderData();
    console.log(courseInfo)
    const {image_url,details,title}=courseInfo;
    return (
        <div>
            <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
          {details}
          </Card.Text>
          <Link to='/'>
          <Button variant="primary">Home page</Button>
          </Link>
       </Card.Body>
      </Card>
        </div>
    );
};

export default Course;