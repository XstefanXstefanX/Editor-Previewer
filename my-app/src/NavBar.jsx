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
                        <li><LanguageSelector /></li>
                        <li><FontAwesomeIcon icon={faMagnifyingGlass} className='icon'/></li>
                        <li><FontAwesomeIcon icon={faUser}  className='icon'/> Sign in</li>
                        <li><FontAwesomeIcon icon={faBagShopping}  className='icon'/> 0</li>
                    </ul>
                <div id='drop-menu'></div>
            </div>
        );
    }
}
const LanguageSelector = () => {
    return (
        <div>EN|US <FontAwesomeIcon icon={faFlag}  className='icon'/></div>
    );
}


export default NavBar;