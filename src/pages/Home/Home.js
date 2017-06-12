import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import './Home.css';
import './testp.png';
import './js.png';
import './php.png';
import './css.png';


export default class Home extends Component {

    render() {
        return (
            <div>

                        
                    <div className="col-12 specific-class">
                    <div className="t">
                        <div className="td">
                            <img src="http://pngimages.net/sites/default/files/code-png-image-19423.png" className="img3" width="370" height="370"/>
                        </div>
                        <div className="td">
                            <h1>Lär dig koda </h1>
                            <h3>Bygg din framtid, rad-för-rad</h3>
                            <h3><Link to="/contact">Läs mer </Link></h3>   
                        </div>    
                    </div>
                </div>
                

                    <div className="container one">
                        <div className="row">
                            <div className="col-sm-4 col-md-4">
                                <div className="post">
                                    <div className="post-img-content">
                                        <img src="http://ekodesolutions.com/wp-content/uploads/2015/05/data-entry21.png" className="img-responsive"/>
                                        <span className="post-title"><b>Skrivbord</b><br /></span>
                                    </div>
                                    <div className="content">
                                        <div>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                            Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                            unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </div>
                                        <div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-4">
                                <div className="post">
                                    <div className="post-img-content">
                                        <img src="https://www.sayonetech.com/static/assets/images/logos/javascript.png" className="img-responsive" />
                                        <span className="post-title"><b>JavaScript är ett programmeringsspråk</b><br /></span>
                                    </div>
                                    <div className="content">
                                        <div>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                            Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                            unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </div>
                                        <div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-4">
                                <div className="post">
                                    <div className="post-img-content">
                                        <img src="https://www.sayonetech.com/static/assets/images/logos/react.png" className="img-responsive" />
                                        <span className="post-title"><b>Den här sidan är byggt på React</b><br /></span>
                                    </div>
                                    <div className="content">
                                        <div>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                            Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                            unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </div>
                                        <div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


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

