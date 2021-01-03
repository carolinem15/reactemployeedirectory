import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
// import EmployeeDetail from "./EmployeeDetail";
import API from "../utils/API";

class EmployeeContainer extends Component {
  state = {
    results: [{}]
  };

  componentDidMount() {
    API.getRandomUsers()
      .then(res => {
        console.log(res.data.results)
        this.setState({ results: res.data })
      })
      .catch(err => console.log(err));
   
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

  };

  // dont need submitbtn bc when i get to .filter() it will do that dynamically as i type

  render() {
  console.log(this.state.results.results)
    let filteredUsers;

    if (this.state.search)
      filteredUsers = this.state.results.results.filter(results =>
        results.name.first.startsWith(this.state.search)
      );
      console.log(filteredUsers)
      console.log(this.state.search)

    // filteredUsers.map(result => {
    //   console.log(result)
    //   return {result};
    // });
        return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading="Employee"
            >
                {this.state.results.results ? (
                  this.state.results.results.map((result) =>
                    <li className="list-group-item" key={result.id}>
                    <img alt="Employee" className="img-fluid" src={result.picture.thumbnail} style={{ margin: "0 auto" }} />
                    <h3>{result.name.first} {result.name.last}</h3>
                    <h3>Call Office {result.phone}</h3>
                    <h3>Call Mobile {result.cell}</h3>
                    <h3>Email {result.email}</h3>
                </li>
                  )
                  ) : (
                    <p>No results</p>
                  )}
                 ) : (
                  <p>No results</p>
                )
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
