'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/stylesheets/fonts.scss';
import BeastsList from "./components/BeastsList.jsx";
import BeastPage from './components/BeastPage.jsx'

import {createBrowserHistory} from 'history';

import {Route, Router} from 'react-router';

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Route path='/' component={BeastsList}>
            <Route path='beast' component={BeastPage}/>
        </Route>
    </Router>
    ,
    document.getElementById('react-root'));