import * as React from 'react';
import HomePage from './scenes/HomePage'
import { Route, Switch } from 'react-router-dom';
import Layout from './scenes/Layout'

export const routes = <Layout>
    <Switch>
        <Route exact path='/' component={() => <HomePage />} />
        <Route path='/user' component={() => <h3> Bakayoko </h3>} />
    </Switch>
</Layout>;