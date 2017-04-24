import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import { Link } from 'react-router';


export default class App extends Component {

  render() {
        return (
        <div>
          <h3>Quovis</h3>
          <Link to="futurelink" className="signin">Logga in / Registrera</Link>
          <hr className="hr"/>
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