import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Employee from "./pages/Employee";
// import Wrapper from "./components/Wrapper";
import EmployeeListItem from "./components/EmployeeListItem"

function App() {
  return <EmployeeListItem />;
}

export default App;

{/* <Router>
      <div>
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/employee" component={Employee} />
        </Wrapper>
      </div>
    </Router> */}