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
        this.checkLogin = this.checkLogin.bind(this);
    }


    checkLogin() {
        console.log(session);

        axios.get('http://localhost/quovis/src/api/?/login' + session).then((response) => {
            console.log(response.data);
        });
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
            console.log(response.data);
            console.log(response.data.user_name);
            const username = response.data.user_name;
            session = "&token=" + response.data.session;
            if (username === null) {
                this.setState({ loginFail: 'Användarnamnet eller lösenordet är fel' });
                return;
            } else {
                this.setState({
                    showUser: `Hej ${response.data.user_name}`,
                    showLogin: !this.state.showLogin,
                    loggedIn: !this.state.loggedIn
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
            console.log(session);
            this.setState({
                loggedIn: !this.state.loggedIn,
                showUser: ''
            });
        });
    }

    render() {
        var display = this.state.showLogin ? 'block' : 'none';
        var style = { display: display };
        var errorTxt = this.state.loginFail;
        var error = this.state.loginFail ? 'error' : '';
        var sessionBtn = this.state.loggedIn ?
            (<button className='login-btn' onClick={this.logout}>Logga ut</button>) :
            (<button className='login-btn' onClick={this.displayLogin}>Logga in</button>);


        return (
            <div>
                {sessionBtn}
                {/*<button className='login-btn' onClick={this.displayLogin}>Logga in</button>*/}
                <div className='username'>{this.state.showUser}</div>
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
