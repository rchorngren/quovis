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

    var showUser = this.state.showUser;
    return (
      <div className="well">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/asdf">Bad link</Link>
        {this.props.children}
        <form action="">
          <input ref={node => this.inputName = node} />
          <input ref={node => this.inputPassword = node} />
          <button onClick={this.login}>logga in</button>
        </form>
        <div>{showUser}</div>
      </div>
    );
  }
}







