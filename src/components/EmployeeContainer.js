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
        return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading="Employee"
            >
              {this.state.results.results ? (
                <EmployeeDetail
                {...this.state.results.results.map((result) =>
                  <li className="list-group-item" key={result.id}>
                  <img alt="Employee" className="img-fluid" src={result.picture.thumbnail} style={{ margin: "0 auto" }} />
                  <h3>{result.name.first} {result.name.last}</h3>
                  <h3>Call Office {result.phone}</h3>
                  <h3>Call Mobile {result.cell}</h3>
                  <h3>Email {result.email}</h3>
              </li>
                )}
                /> ) : (
                  <p>No results</p>
                )}
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
