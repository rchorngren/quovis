import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Link } from 'react-router';
import Login from './Login.js';
<<<<<<< HEAD
/*import User from './pages/User/User.js';*/
=======
import Register from './Register.js';
>>>>>>> master



export default class App extends Component {

  render() {

    return (
      <div>
        <h3>Quovis</h3>
        <Login />
        <Register />

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
