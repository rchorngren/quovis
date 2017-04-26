import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Link } from 'react-router';
import Login from './Login.js';
/*import User from './pages/User/User.js';*/



export default class App extends Component {

  render() {

    return (
      <div>
        <h3>Quovis</h3>
        <Login />
        <Link to="signuplink" className="signin">Registrera</Link>

        <hr className="hr" />
        <div className="navbar">
          <Link to="/" className="linkies">Hem</Link>
          <Link to="/contact" className="linkies">Kontakt</Link>
          <Link to="/asdf" className="linkies">Bad link</Link>
          <hr />
        </div>
        {this.props.children}

      </div>
    );
  };
};
