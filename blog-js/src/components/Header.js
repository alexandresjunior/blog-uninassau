import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <div className="col text-start">
          <a className="navbar-brand" href="https://www.uninassau.edu.br">
            <img
              src={require("../assets/images/uninassau-logo-small.png")}
              alt="UNINASSAU"
              className="d-inline-block align-text-top"
            />
          </a>
        </div>

        <div className="col text-end">
          <Link className="btn btn-primary" to={`/article`}>
            Add New Article
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
