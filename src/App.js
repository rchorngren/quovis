import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Link } from 'react-router';
import Login from './Login.js';
import Register from './Register.js';



export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidemenu: false
    };
    this.scrollMenu = this.scrollMenu.bind(this);
  }

  scrollMenu() {
    window.scrollY > this.prev ?
      this.setState({ hidemenu: true }) :
      this.setState({ hidemenu: false })

    this.prev = window.scrollY;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollMenu);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollMenu);
  }

  render() {
    var hide = this.state.hidemenu ? 'navbar-close' : '';


    return (
      <div>
        <h3>Quovis</h3>
        <Login />
        <Register />
        <hr className="hr" />
        <div className={'navbar-show ' + hide}>
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
