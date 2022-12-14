import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./CourseCard.css";

const CourseCard = ({ course }) => {
  const { course_id, image_url, details } = course;
  return (
    <div>
      <Card className="bg-secondary text-white">
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{course.title}</Card.Title>
          <Card.Text>
            {details.length > 100 ? (
              <>
                {details.slice(0, 150) + "..."}
                <Link className="text-white" to={`/course/${course_id}`}>
                  Read More
                </Link>
              </>
            ) : (
              <>{details}</>
            )}
          </Card.Text>
          <Link to="/">
            <Button variant="dark">Home page</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseCard;
