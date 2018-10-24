import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './scenes/Layout'

import HomePage from './scenes/HomePage'
import MobileMessage from './scenes/MobileMessage'

export const routes = <Layout>
    <Switch>
        <Route exact path='/' component={() => <HomePage />} />
        <Route path='/message' component={() => <MobileMessage />} />
    </Switch>
</Layout>;