import React from "react";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import Header from "../components/Header";
import EmployeeList from "../components/EmployeeList"
import SearchBar from "../components/SearchBar"
import EmployeeListItem from "../components/EmployeeListItem"

function Home() {
  return (
    <div>
      <Header >
        <h1 className="text-center">Employee Directory</h1>
      </Header>
      <Container >
      <SearchBar />
      <EmployeeList />
      <EmployeeListItem />
      </Container>
    </div>
  );
}

export default Home;
