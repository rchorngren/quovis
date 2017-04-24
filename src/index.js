import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { URLProvider } from 'react-url';
import Routes from './routes.js';
import './index.css';




ReactDOM.render(
    <Routes history={browserHistory} />,
    document.getElementById('root')
);