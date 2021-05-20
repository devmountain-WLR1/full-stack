import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Compose from './components/Compose';
import Landing from './components/Landing';
import Main from './components/Main';

export default (
    <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/compose" component={Compose}/>
        <Route path="/main" component={Main}/>
    </Switch>
)