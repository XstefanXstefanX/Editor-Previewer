import './NavBar.css';
import React from 'react';

class NavBar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div id='nav-bar'>
                    <ul id='list-menu'>
                        <li>MyMarshall</li>
                        <li>Local Retailers</li>
                        <li>EN/US <i>Flag</i></li>
                        <li><i>Search</i></li>
                        <li><i>Guy</i> Sign in</li>
                        <li><i>Cart</i> 0</li>
                    </ul>
                <div id='drop-menu'></div>
            </div>
        );
    }
}


export default NavBar;