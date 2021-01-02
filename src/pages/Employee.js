import React from "react";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import Header from "../components/Header";
import Nav from "../components/Nav";



function Employee() {
  return (
    <div>
      <Header >
        <h1 className="text-center">Employee</h1>
        <Nav />
      </Header>
      <Container>
        <ListGroup>
          <Col size="md-12">
            <h1>Hello!</h1>
          </Col>
        </div>
        <ListGroup.Item>
          <Col size="md-12">
            <p>Call Office</p>
          </Col>
        </ListGroup.Item>
        <ListGroup.Item>
          <Col size="md-12">
            <p>Call Mobile</p>
          </Col>
        </ListGroup.Item>
        <ListGroup.Item>
          <Col size="md-12">
            <p>SMS</p>
          </Col>
        </ListGroup.Item>
        <ListGroup.Item>
          <Col size="md-12">
            <p>Email</p>
          </Col>
        </ListGroup.Item>
        </ListGroup>
      </Container>
    </div>
  );
}

export default Employee;
