'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/stylesheets/fonts.scss';
import '../assets/stylesheets/main.scss';
import BeastsList from "./components/BeastsList.jsx";
import BeastPage from "./components/BeastPage.jsx";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={BeastsList}/>
            <Route path='/beast/:id' component={BeastPage}/>
        </Switch>
    </BrowserRouter>
    ,
    document.getElementById('react-root'));