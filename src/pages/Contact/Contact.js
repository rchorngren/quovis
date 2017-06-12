import React, { Component } from 'react';
import axios from 'axios';
import './Contact.css';
import './coding.png';

export default class Contact extends Component {

    render() {
        return (
            <div className="hej">
                <h1>Om Quovis</h1>
                <p>
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum 
                deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, 
                similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. 
                Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi 
                optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, 
                omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe 
                eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a 
                sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus 
                asperiores repellat."
                </p>
                <img src={require("./coding.png")} width="412" height="412" className="img-responsive" />
            </div>
        );
    }
}






