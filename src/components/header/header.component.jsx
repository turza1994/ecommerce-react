import React from 'react'

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss'

const Header = () => {
    return (
        <div className="Header">
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>

            <ul className="nav-item">
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/shop">Shop</Link> </li>
                <li> <Link to="/signin">Sign in</Link> </li>
            </ul>     
        </div>
    )
}

export default Header;