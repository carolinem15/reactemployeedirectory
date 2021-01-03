import React from "react";

function EmployeeDetail(props) {
  return (
    <div className="text-center">
      <img alt="Employee" className="img-fluid" src={props.results.picture.thumbnail} style={{ margin: "0 auto" }} />
      <h3>{props.results.name.first} {props.results.name.last}</h3>
      <h3>Call Office {props.results.phone}</h3>
      <h3>Call Mobile {props.results.cell}</h3>
      <h3>Email {props.results.email}</h3>
    </div>
  );
}

export default EmployeeDetail;
