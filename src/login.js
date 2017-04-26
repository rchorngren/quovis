import React, { Component } from 'react';
import axios from 'axios';
import './Login.css';
import { Link } from 'react-router';


export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showLogin: false
        };
        this.Login = this.Login.bind(this);
        this.displayLogin = this.displayLogin.bind(this);
    }


    displayLogin(e) {
        e.preventDefault();
        this.setState({ showLogin: !this.state.showLogin });
    }

    Login(e) {
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
        var style = { display: display };
        return (
            <div>
                <button className='login-btn' onClick={this.displayLogin}>Logga in</button>
                <div className='login-background' style={style}>
                    <div className='login-container well' style={style}>
                        <form action="">
                            <input ref={node => this.inputName = node} />
                            <input ref={node => this.inputPassword = node} />
                            <button><Link to="/user">logga in</Link></button>
                            <button onClick={this.displayLogin}>Avbryt</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
};