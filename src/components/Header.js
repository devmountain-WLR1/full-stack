import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logoutUser, getUser} from '../redux/userReducer.js';
import {useEffect} from 'react';
import axios from 'axios';

const Header = (props) => {
    useEffect(() => {
        props.getUser()
    }, [])

    const logout = () => {
        axios.post("/auth/logout")
        .then( res => {
            props.history.push('/')
        }).catch( err => {
            console.log(err)
            alert("There was an issue logging out. Please try again.")
        })
    }

    return <div className="header-container">
        <header>
            <img className="logo" alt='logo' src="https://i.redd.it/q1m9lpl5kpxz.jpg"/>
            {props.isLoggedIn
            ?
            <h3>Welcome, {props.user.username}</h3>
            :
            <h3>Welcome to Schmeddit!</h3>
            }
            <nav>
                <ul>
                    <li><Link to="/compose">Compose</Link></li>
                    <li><Link to="/main">Main</Link></li>
                    <li onClick={logout}>Logout</li>
                </ul>
            </nav>
        </header>
    </div>
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps, {logoutUser, getUser})(Header));