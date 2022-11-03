import React, { Component } from "react";
import "../Home.css";

export default class Footer extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <footer>
          <p>Kadesea Agency Copyright &copy; 2022 all rights reserved</p>
        </footer>
      </div>
    );
  }
}
