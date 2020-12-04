import React from 'react'
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss'

const Header = ({currentUser}) => {
    return (
        <div className="Header">
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>

            <ul className="nav-item">
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/shop">Shop</Link> </li>
                {
                    currentUser==null ? 
                   (<li> <Link to='/signin'>Sign in</Link> </li>)
                   :
                   (<li> <Link to='#' onClick={() => auth.signOut()}>Sign out</Link> </li>)
                }
                
                
            </ul>     
        </div>
    )
}

const mapStateToProps = (state) => (
    {
        currentUser: state.user.currentUser
    }
)
export default connect(mapStateToProps)(Header);