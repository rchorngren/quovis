
import React, { Component } from 'react';
import axios from 'axios';
import './Home.css';
import './testp.png';
import './js.png';
import './php.png';
import './css.png';


export default class Home extends Component {

    render() {
        return (
            <div className="wrapper">
                <div className="col-xs-6 start">
                    <h2 className="headline">Programmera med Quovis </h2>
                    <p className="starttext">"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                     ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                     voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                     Excepteur sint occaecat cupidatat non proident, sunt in
                     culpa qui officia deserunt mollit anim id est laborum."
                      nostrud exercitation ullamco laboris nisi ut aliquip"</p>
                      <p className="starttext">"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                     ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                     voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                     Excepteur sint occaecat cupidatat non proident, sunt in
                     culpa qui officia deserunt mollit anim id est laborum."
                      nostrud exercitation ullamco laboris nisi ut aliquip"</p>
                    <img src={require("./testp.png")} className="startimg" />
                </div>
                <div className="col-xs-6">
                    <h4 className="pop">Populära kurser just nu</h4>
                    <img src={require("./js.png")} width="200" height="200" className="popc" /><br />
                    <img src={require("./css.png")} width="200" height="200" className="popc" /><br />
                    <img src={require("./php.png")} width="200" height="200" className="popc" />
                </div>
                <div className="col-xs-12 ad1">
                    <h3>Vi har flera olika kurser att välja mellan</h3>
                    <p>1. Börja med att registrera dig</p>
                    <p>2. Välj vilka kurser du önskar att lära dig</p>
                    <p>3. Följ videos och gör övningar</p>
                    <p>4. Programmera och bli ett proffs!</p>
                </div>
                <div className="col-xs-12 ad2"></div>
                <div className="col-xs-12 ad3"></div>
            </div>
        );
    }
}