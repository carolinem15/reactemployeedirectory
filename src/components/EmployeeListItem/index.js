import React, { Component } from "react";
import SearchBar from "./SearchBar";
import API from "..utils/API"

// class component to render API results
class EmployeeListItem extends Component {
  state = {
    search: "",
    results: []
  }

// using this lifecycle method now so that the first render completes before this is executed
componentDidMount() {
  this.searchRandomUser("")
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


}


export default EmployeeListItem;
