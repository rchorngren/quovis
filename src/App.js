import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import { Link } from 'react-router';


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showUser: []
    };
    this.login = this.login.bind(this);
  }
  login(e) {
    e.preventDefault();
    var username = this.inputName.value;
    var password = this.inputPassword.value;
    axios.post(
      'http://localhost/quovis/src/api/?/login',
      {
        user_name: username,
        user_password: password
      }
    ).then((response) => {
      console.log(response.data);
      /* var showUsers = response.data.users.map((obj) => {
         var users = [obj.user_name, obj.user_password].join(" : ");
         return users;
       });*/

      /*this.setState({ showUser: showUsers });*/
    });

  }
  render() {

    return (
      <div>
        <h3>Quovis</h3>
        <Link to="futurelink" className="signin">Logga in / Registrera</Link>
        <hr className="hr" />
        <div className="navbar">
          <Link to="/" className="linkies">Hem</Link>
          <Link to="/contact" className="linkies">Kontakt</Link>
          <Link to="/asdf" className="linkies">Bad link</Link>
          <hr />
        </div>
        {this.props.children}
        <form action="">
          <input ref={node => this.inputName = node} />
          <input ref={node => this.inputPassword = node} />
          <button onClick={this.login}>logga in</button>
        </form>
      </div>
    );
  };
};
