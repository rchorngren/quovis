import React, { Component } from 'react';
import axios from 'axios';
import './Login.css';

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            showLogin: false
        
        };
        this.login = this.login.bind(this);
        this.displayLogin = this.displayLogin.bind(this);
    }

    displayLogin(e) {
        e.preventDefault();
        this.setState({
            showLogin: !this.state.showLogin
        }); 
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
        var display = this.state.showLogin ? 'block' : 'none';
        var style = {display: display}
        return (

            <div className="backi">
                <button onClick={this.displayLogin} className="buto">Logga in </button>
                <div className="login-background" style={style} >
                    <div className="login-container well" style={style}>
                        <form action="" className="form-control">
                        <input ref={node => this.inputName = node} />
                        <input ref={node => this.inputPassword = node} />
                        <button onClick={this.login}>Logga in</button>
                        <button onClick={this.displayLogin}>X</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
};