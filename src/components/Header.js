import {withRouter, Link} from 'react-router-dom';

const Header = () => {
    const logout = () => {
        alert('LOGOUT!')
    }

    return <div className="header-container">
        <header>
            <img className="logo" alt='logo' src="https://i.redd.it/q1m9lpl5kpxz.jpg"/>
            <h3>Welcome to Schmeddit!</h3>
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

export default withRouter(Header);