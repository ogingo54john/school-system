import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "../Home.css";

import logo from "../img/kadesealogo.png";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <div class="container">
            <div id="branding">
              <h1>
                <img src={logo} width="220" />
                {/* <span class="highlight">BRIGHT</span> NERD */}
              </h1>
            </div>
            {/* <div class="Kadesea" style={{color: '#e8491d'}}>KADESEA AGENCY LIMITED</div> */}
            <nav>
              <ul>
                <li class="current">
                  <Link to="/" style={{color: '#e8491d'}}> Home </Link>
                </li>
                <li>
                  <Link to="/signup" style={{color: '#e8491d'}}> Sign Up </Link>{" "}
                </li>{" "}
                <li>
                  <Link to="/mainsignin" style={{color: '#e8491d'}}> Sign In </Link>{" "}
                </li>{" "}
              </ul>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}
