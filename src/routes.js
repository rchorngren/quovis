import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './App';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';

const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={App}>
            <IndexRoute path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="*" component={NotFound} />
        </Route>
    </Router>
);
export default Routes;