import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import Nav from "react-bootstrap/Nav"
// import "./style.css";

function Navbar() {
  return (
    <Nav.Item>
    <Link
        to="/Home"
        className={window.location.pathname === "/Home" ? "nav-link active" : "nav-link"}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </Link>
  </Nav.Item>
  );
}

export default Navbar;
