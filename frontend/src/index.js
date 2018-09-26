import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css'

// pages
import App from './App'


// code
ReactDOM.render(<App />, document.getElementById('outer-container'));
registerServiceWorker();
