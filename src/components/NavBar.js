import { Routes, Route, Link } from 'react-router-dom';

import Game from "../components/Game";
import GameHistory from "../components/GameHistory";
import Rules from './Rules';

import '../styling/nav-bar.css'

function NavBar() {


    // left navbar 
    return (
        <div className='navbar'>
            <span className='span-1'>  <Link to={'/history'} style={{ textDecoration: 'none' }} >Game History</Link>  </span>
            <span className='span-2'>  <Link to={'/rules'} style={{ textDecoration: 'none' }}>Game Rules</Link> </span>



        </div>
    )
}

export default NavBar;