import {useState} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {loginUser} from '../redux/userReducer.js';

const Landing = (props) => {
    const [loginInfo, setLogin] = useState({email:'', password:''})
    const [registerInfo, setRegister] = useState({email:'', username: '', password:''})
    const [loginForm, toggleForm] = useState(true)

    const login = (e) => {
        e.preventDefault();
        const {email, password} = loginInfo
        axios.post('/auth/login', {email, password})
        .then(res => {
            props.loginUser(res.data)
            props.history.push('/main')
        }).catch(err => {
            console.log(err);
            alert("Incorrect credentials!")
        })
    }

    const register = e => {
        e.preventDefault();
        const {email, password, username} = registerInfo
        axios.post('/auth/register', {email, password, username})
        .then(res => {
            props.loginUser(res.data)
            props.history.push('/main')
        }).catch(err => {
            console.log(err);
            alert("That user already exists!")
        })
    }

    return <div className="base">
        {loginForm 
        ? 
        <div className="form-container">
            <form onSubmit={login}>
                <input value={loginInfo.email} type="text" placeholder="email" onChange={(e) => setLogin({...loginInfo, email: e.target.value})}/>
                <input value={loginInfo.password} type="password" placeholder="password" onChange={(e) => setLogin({...loginInfo, password: e.target.value})}/>
                <input type="submit" value="Login"/>
            </form>
            <p>Don't have an account?</p>
            <button onClick={() => toggleForm(!loginForm)}>Sign Up</button>
        </div>
        :
        <div className="form-container">
            <form onSubmit={register}>
                <input value={registerInfo.email} type="text" placeholder="email" onChange={(e) => setRegister({...registerInfo, email: e.target.value})}/>
                <input value={registerInfo.username} type="text" placeholder="username" onChange={(e) => setRegister({...registerInfo, username: e.target.value})}/>
                <input value={registerInfo.password} type="password" placeholder="password" onChange={(e) => setRegister({...registerInfo, password: e.target.value})}/>
                <input type="submit" value="Register Account"/>
            </form>
            <p>Already have an account?</p>
            <button onClick={() => toggleForm(!loginForm)}>Log In</button>
        </div>}
    </div>
}


export default connect(null, {loginUser})(Landing);