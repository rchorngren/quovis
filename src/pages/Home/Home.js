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
            <div>
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
                    <img src={require("./testp.png")} className="startimg" />
                </div>
                <div className="col-xs-6">
                    <h4 className="pop">Populära kurser just nu</h4>
                    <img src={require("./js.png")} width="200" height="200" className="popc" /><br />
                    <img src={require("./css.png")} width="200" height="200" className="popc" /><br />
                    <img src={require("./php.png")} width="200" height="200" className="popc" />
                </div>
            </div>
        );
    }
}

