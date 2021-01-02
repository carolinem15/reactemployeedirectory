import React, { Component } from "react";
import SearchBar from "./SearchBar";
import API from "../utils/API"

// class component to render API results
class EmployeeListItem extends Component {
  state = {
    search: "",
    results: []
  }

// using this lifecycle method now so that the first render completes before this is executed
componentDidMount() {
  this.searchRandomUser("Ben")
}

// why is it res.data.data in the class activity?
searchRandomUser(query) {
  API.search(query)
  .then (res => {
    console.log(res)
    this.setState({
    results: res.data.data })
  })
  .catch (error => console.log(error))
}

// custom methods to handle input change and form submit
handleInputChange = event => {
  const name = event.target.name;
  const value = event.target.value;
  this.setState({
    [name]: value
  });
};

handleFormSubmit = event => {
  event.preventDefault();
  this.searchRandomUser(this.state.search);
};

render() {
  return (
  // learned my lesson -- since i am returning two components, they must be wrapped in div tags
    <div>
      <SearchBar
      search={this.state.search}
      handleFormSubmit={this.handleFormSubmit}
      handleInputChange={this.handleInputChange}
      />
      <EmployeeList results={this.state.results} />
    </div>
  )
}

}


export default EmployeeListItem;
