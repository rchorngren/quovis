import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Link } from 'react-router';
import Login from './Login.js';
import Register from './Register.js';
import Headroom from 'react-headroom';  



export default class App extends Component {  

  render() {

    return (
      <div>
        <Headroom>
            <nav className="navbar navbar-default" id="nav1">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand">Quovis</a>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li><Link to="/">Hem</Link></li>
                  <li><Link to="contact">Kontakt</Link></li>
                  <li><Link to="/asdf">Bad link</Link></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li><Login /></li>
                  <li><Register /></li>
              </ul>
              </div>
            </div>
          </nav> 
          </Headroom>
          {this.props.children}
      </div>
    );
  };
};