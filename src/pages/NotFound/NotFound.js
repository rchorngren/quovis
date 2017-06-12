import React, { Component } from 'react';
import axios from 'axios';
import './NotFound.css';

export default class NotFound extends Component {

    render() {
        return (
            <div className="container1">
                <div className="col-xs-12">
                    <h1>Mina Sidor</h1>

                    <nav className="collapse navbar-collapse" role="navigation">
                        <ul className="mypageul">
                            <li className="active"><a href="../css" className="active">Kurser</a></li>
                            <li><a href="../components">Saldo</a></li>
                            <li><a href="../javascript">My Account</a></li>
                        </ul>
                    </nav>

                    <div className="col-xs-6">
                        <div className="container2">
                            <div className="row">
                                <h3>HTML 5</h3>
                                <img src="http://www.iclarified.com/images/news/7261/25745/25745-500.png" alt="" className="video" />
                                <img src="http://www.techbeamers.com/wp-content/uploads/2016/10/HTML-CSS-Quiz-20-Questions-for-Web-Developers.png" alt="" className="quiz" />
                            </div>
                        </div>
                    </div>


                    <div className="col-xs-6">
                        <div className="row">
                            <h2 className="wi">Vad är HTML ?</h2>
                            <p className="ptag">
                                "On the other hand, we denounce with righteous indignation and dislike men who are so
                                beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire,
                                that they cannot foresee the pain and trouble that are bound to ensue; and equal blame
                                belongs to those who fail in their duty through weakness of will, which is the same as
                                saying through shrinking from toil and pain. These cases are perfectly simple and easy to
                                distinguish. In a free hour, when our power of choice is untrammelled and when nothing
                                prevents our being able to do what we like best, every pleasure is to be welcomed and every
                                 pain avoided. But in certain circumstances and owing to the claims of duty or the
                                 obligations of business it will frequently occur that pleasures have to be repudiated
                                 and annoyances accepted."
                                 </p>
                            <h3 className="wi">Hur fungerar det?</h3>
                            <p className="ptag">

                                he endures pains to avoid worse pains.The wise man therefore always holds in these matters to this
                                 principle of selection: he rejects pleasures to secure other greater pleasures, or else
                                 he endures pains to avoid worse pains.The wise man therefore always holds in these matters to this
                                 principle of selection: he rejects pleasures to secure other greater pleasures, or else
                                 he endures pains to avoid worse pains."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}






