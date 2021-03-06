import React from "react";
import "./style.css"

function NavResult({messages, msgCode, currScore, maxScore}) {
  return (
    <nav className="navbar fixed-top navbar-expand-sm navbar-light bg-light">
      <div className="container">
        <a 
          href=""
          className="navbar-brand"
        >
          Animal Crossing <br/> Clicky Game
        </a>

        <span className="navbar-text text-center mx-auto d-none d-sm-block">{messages[msgCode].msg}</span>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <div className="navbar-text mr-1">
              <strong>Score:</strong> {currScore}
            </div>
          </li>
          <li className="nav-item">
            <div className="navbar-text">
              <strong>Top Score:</strong> {maxScore}
            </div>
          </li>
        </ul>

        <div className="navbar-text text-center mx-auto d-block d-sm-none">
          <h5>{messages[msgCode].msg}</h5>
        </div>
        
      </div>
    </nav>
  );
}

export default NavResult;