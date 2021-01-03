import React from "react";

function EmployeeDetail(props) {
  return (
  <div className="text-center">
      <li className="list-group-item" key={result.id}>
                    <img alt="Employee" className="img-fluid" src={result.picture.thumbnail} style={{ margin: "0 auto" }} />
                    <h3>{result.name.first} {result.name.last}</h3>
                    <h3>Call Office {result.phone}</h3>
                    <h3>Call Mobile {result.cell}</h3>
                    <h3>Email {result.email}</h3>
                </li>
    </div>  
  );
}

export default EmployeeDetail;
