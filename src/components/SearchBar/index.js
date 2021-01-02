import React from "react";
import Form from 'react-bootstrap/Form'; 
import "./style.css";

function SearchBar(props) {
  return (
    <Form>
      <Form.Group>
        <Form.Label>
          Search: 
        </Form.Label>
        <Form.Control type="text" name="search" placeholder="Enter employee name here" onChange={props.handleInputChange}
          value={props.search} id="search"/>
        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button>
      </Form.Group>
      </Form>
  );
}

// now build out handleInputChange and handleFormSubmit

export default SearchBar;
