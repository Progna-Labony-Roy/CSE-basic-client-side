import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import { Container } from "react-bootstrap";
const s = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Outlet></Outlet>
      </Container>
    </div>
  );
};

export default s;
