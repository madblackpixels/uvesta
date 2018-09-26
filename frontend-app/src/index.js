import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from "react-router-dom";

import registerServiceWorker from './registerServiceWorker';
import './index.css'

// include
import App from './App'

// code
ReactDOM.render((
    <Router>
        <App />
    </Router>
), document.getElementById('outer-container'));
registerServiceWorker();
