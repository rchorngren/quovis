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
    let { hidemenu } = this.state;
    window.scrollY > this.prev ?
      !hidemenu && this.setState({ hidemenu: true })
      :
      hidemenu && this.setState({ hidemenu: false })

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
        <div className={'navbar-show ' + hide}>
          <div className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <ul className="nav navbar-nav">
                  <li><Link to="/" className="linkies">Hem</Link></li>
                  <li><Link to="/contact" className="linkies">Om Quovis</Link></li>
                  <li><Link to="/mypage" className="linkies">Mina Sidor</Link></li>
                </ul>
                <div className="links"><Login /></div>
                <div className="links"><Register /></div>
              </div>
            </div>
          </div>
        </div>
        {this.props.children}
        
      </div>
    );
  };
};
