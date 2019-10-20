import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import {Home, About, Todo} from 'pages';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/todo' component={Todo}/>
            </div>
        );
    }
}

export default App;