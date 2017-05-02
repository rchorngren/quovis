
import React, { Component } from 'react';
import axios from 'axios';
import './Register.css';



export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showRegister: false
        };
        this.register = this.register.bind(this);
        this.displayRegister = this.displayRegister.bind(this);
    }


    displayRegister(e) {
        e.preventDefault();
        this.setState({ showRegister: !this.state.showRegister });
    }

    register(e) {
        e.preventDefault();
        var username = this.inputName.value;
        var password = this.inputPassword.value;
        var mail = this.inputEmail.value;
        axios.post(
            'http://localhost/quovis/src/api/?/user',
            {
                user_name: username,
                user_password: password
            }
        ).then((response) => {
            console.log(response.data);
            
        });

    }
    render() {
        var display = this.state.showRegister ? 'block' : 'none';
        var style = { display: display };
        return (
            <div>
                <button className='login-btn' onClick={this.displayRegister}>Registrera</button>
                <div className='register-background' style={style}>
                    <div className='register-container form-control' style={style}>
                        <form action="">
                            <button className="btn btn-danger" onClick={this.displayRegister}>x</button>
                            <h2>Ny användare</h2>
                            <input ref={node => this.inputName = node} placeholder="Användarnamn" className="form-control top" /><br/>
                            <input ref={node => this.inputPassword = node} placeholder="Lösenord" className="form-control"/><br/>
                            {/*<input ref={node => this.inputConfirmPass = node} placeholder="Bekräfta lösenord"/><br/>*/}
                            <input ref={node => this.inputMail = node} placeholder="E-mailadress" className="form-control"/><br/>
                            <button className="btn btn-success" onClick={this.register}>Registrera ny användare</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
};