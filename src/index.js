import React from 'react';
import ReactDOM from 'react-dom'
import Layout from './scenes/Layout';
import App from './app.js'
import {render} from 'react-dom';


function renderApp() {
    // This code starts up the React app when it runs in a browser. It sets up the routing
    // configuration and injects the app into a DOM element.
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
}

renderApp();