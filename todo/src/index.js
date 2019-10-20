import React from 'react';
import ReactDOM from 'react-dom';
// import Root from './client/Root';
import { BrowserRouter } from 'react-router-dom';
import App from 'shared/App';

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    , document.getElementById('root'));
