import React from "react";

function EmployeeDetail(props) {
  return (
  <div className="text-center">
      
      {props.results.map(result => (
        <ul className="list-group search-results">
          
        </ul>
      ))}
    
    </div>  
  );
}

export default EmployeeDetail;
