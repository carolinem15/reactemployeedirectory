import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import EmployeeDetail from "./EmployeeDetail";
import API from "../utils/API";

class EmployeeContainer extends Component {
  state = {
    results: [{}]
  };

  componentDidMount() {
    API.getRandomUsers()
      .then(res => this.setState({ results: res.data }))
      .catch(err => console.log(err));
   
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // // When the form is submitted, search the Employee API for the value of `this.state.search`
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   this.searchEmployees(this.state.search);
  // };

  // dont need submitbtn bc when i get to .filter() it will do that dynamically as i type

  render() {
  console.log(this.state.results.results)

  // map something in here
  // ill want to pass all of the users (results) to employeedetail and then in employeedetail component is where ill map over these results
  // look up ternary statements in react
        return (

      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading={this.state.results.name.first}
            >

                <EmployeeDetail
                  title={this.state.results.name}
                  src={this.state.results.picture.thumbnail}
                  phone={this.state.results.phone}
                  cell={this.state.result.cell}
                  email={this.state.result.email}
                />
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
        )
  }
}

export default EmployeeContainer;
