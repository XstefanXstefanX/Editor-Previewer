import './NavBar.css';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faUser, faMagnifyingGlass, faFlag} from '@fortawesome/free-solid-svg-icons';

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
                        <li>EN|US <FontAwesomeIcon icon={faFlag}/></li>
                        <li><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
                        <li><FontAwesomeIcon icon={faUser} /> Sign in</li>
                        <li><FontAwesomeIcon icon={faBagShopping} /> 0</li>
                    </ul>
                <div id='drop-menu'></div>
            </div>
        );
    }
}


export default NavBar;