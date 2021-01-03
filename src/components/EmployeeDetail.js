import React from "react";

function EmployeeDetail(props) {
  return (
  <div className="text-center">
      <img alt={props.name} className="img-fluid" src={props.picture.thumbnail} style={{ margin: "0 auto" }} />
        <h3>{props.name.first} {props.name.last}</h3>
        <h3>Call Office {props.phone}</h3>
        <h3>Call Mobile {props.cell}</h3>
        <h3>Email {props.email}</h3>
    </div>  
  );
}

export default EmployeeDetail;
