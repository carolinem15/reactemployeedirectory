import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';


function EmployeeList(props) {
  return (
    // mapping out the objects that we are receiving from API call
    <div>
    <ListGroup>
      {props.results.map(result => (
        <ListGroup.Item key={result.id}>
          <img src={result.picture.thumbnail} className="img-thumbnail" alt="Employee image" />
          <h1>{result.name.first} {result.name.last}</h1>
          <p>Call Office</p>
          <p>{result.phone}</p>
          <p>Call Mobile</p>
          <p>{result.cell}</p>
          <p>SMS</p>
          <p>{result.cell}</p>
          <p>Email</p>
          <p>{result.email}</p>
        </ListGroup.Item>
      ))}
    </ListGroup>
    </div>
  );
}

export default EmployeeList;
