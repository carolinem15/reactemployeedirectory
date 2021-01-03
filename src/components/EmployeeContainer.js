import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import API from "../utils/API";

class EmployeeContainer extends Component {
  state = {
    results: [{}],
    filteredUsers:[],
    search: ""
  };

  componentDidMount() {
    API.getRandomUsers()
      .then(res => {
        console.log(res.data.results)
        this.setState({ results: res.data.results, filteredUsers: res.data.results})
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
    console.log(this.state.results.results)
    let filteredUsers;

    if (this.state.search)
    filteredUsers = this.state.results.filter(results =>
      results.name.first.startsWith(this.state.search)
      );
      console.log(filteredUsers)
      console.log(this.state.search)
      this.setState({
        filteredUsers: filteredUsers
      })
      
    // filteredUsers.map(result => {
    //   console.log(result)
    // });
  };

  render() {

        return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading="Employee"
            >
                 {this.state.filteredUsers ? (
                  this.state.filteredUsers.map((result) =>
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
