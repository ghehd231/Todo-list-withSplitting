import React, { Component } from 'react';
import Logo from '../logo.svg';
class Home extends Component {
    render() {
        return (
            <div style={{display:'flex',justifyContent:'center',alignItems:'center', minHeight:'500px'}}>
                <img src={Logo} style={{maxWidth:'200px',display:'flex',justifyContent:'center',alignItems:'center'}}/>
                <ul>
                    <li><a href='./todo'>Todo</a></li>
                    <li><a href='./about'>About</a></li>
                </ul>
            </div>
        );
    }
}

export default Home;