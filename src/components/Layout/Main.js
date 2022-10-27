import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';

const s = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg='3' className='d-md-flex d-lg-block'>
                    <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg='9'>
                    <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default s;