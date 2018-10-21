import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">
          My Cart{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCounter}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
