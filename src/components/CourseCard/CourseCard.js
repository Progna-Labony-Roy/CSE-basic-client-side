import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './CourseCard.css'

const CourseCard = ({course}) => {
    const {category_id,image_url,details}=course;
    return (
        <div >
          <Card>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
              <Card.Title>{course.title}</Card.Title>
              <Card.Text>
              {details.length > 200 ? (
            <p>
              {details.slice(0, 250) + "..."}
              <Link to={`/course/${category_id}`}>Read More</Link>
            </p>
          ) : (
            <>{details}</>
          )}
              </Card.Text>
              <Button variant="primary">Details</Button>
            </Card.Body>
          </Card>
        </div>
    );
};

export default CourseCard;