import React, { Component } from 'react';
import axios from 'axios';
import './Login.css';

var session = "";

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showLogin: false,
            showUser: '',
            loggedIn: false,
            loginFail: ''
        };
        this.login = this.login.bind(this);
        this.displayLogin = this.displayLogin.bind(this);
        this.logout = this.logout.bind(this);
    }

    displayLogin(e) {
        e.preventDefault();
        this.setState({ showLogin: !this.state.showLogin });
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
            const username = response.data.user_name;
            session = "&token=" + response.data.session;
            if (username === null) {
                this.setState({ loginFail: 'Användarnamnet eller lösenordet är fel' });
                return;
            } else {
                sessionStorage.setItem('token', response.data.session);
                sessionStorage.setItem('username', response.data.user_name);
                this.setState({
                    showUser: `Hej ${response.data.user_name}`,
                    showLogin: !this.state.showLogin,
                    loggedIn: !this.state.loggedIn,
                });
            }
        });
    }

    logout(e) {
        e.preventDefault();
        axios.delete('http://localhost/quovis/src/api/?/login', {
            logout: true
        }).then((response) => {
            session = "&token=" + response.data.session;
            sessionStorage.clear();
            console.log(session);
            this.setState({
                loggedIn: !this.state.loggedIn,
                showUser: '',
                storage: null
            });
        });
    }

    render() {
        var display = this.state.showLogin ? 'block' : 'none';
        var style = { display: display };
        var errorTxt = this.state.loginFail;
        var error = this.state.loginFail ? 'error' : '';
        const activeSession = window.sessionStorage.getItem('token');
        const activeUsername = window.sessionStorage.getItem('username');
        var sessionBtn = activeSession ?
            (<button className='login-btn' onClick={this.logout}>Logga ut</button>) :
            (<button className='login-btn' onClick={this.displayLogin}>Logga in</button>);


        return (
            <div>
                {sessionBtn}
                <div className='username'>{activeUsername}</div>
                <div className='login-background' style={style}>
                    <div className='login-container form-control' style={style}>
                        <form action="">
                            <button className="btn btn-danger" onClick={this.displayLogin}>x</button>
                            <h2>Logga in</h2>
                            <input ref={node => this.inputName = node} className="form-control top" /> <br />
                            <input ref={node => this.inputPassword = node} className="form-control" type="password"/><br />
                            <button className="btn btn-success" onClick={this.login}>Logga in</button><br />
                        </form>
                        <span className={error}>{errorTxt}</span>
                    </div>
                </div>
            </div>
        );
    };
}
