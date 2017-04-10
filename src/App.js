import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import { Link } from 'react-router';


export default class App extends Component {

  render() {
    return (
      <div className="well">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/asdf">Bad link</Link>
        {this.props.children}
      </div>
    );
  }
}






