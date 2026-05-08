import React, {useState, useContext} from 'react';
import UserContext from '../context/UserContext';

function Login(){
    // Local state keeps track of what the user types in this form.
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // setUser comes from UserContextProvider, so this component can update shared user data.
    const {setUser} = useContext(UserContext);

    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({username, password});
    }

    return (
        <form className="auth-card login-card" onSubmit={handleSubmit}>
            <div>
                <p className="card-label">Step 1</p>
                <h2>Login</h2>
                <p className="card-copy">This component sends user data into context.</p>
            </div>

            <label>
                Username
                <input
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </label>

            <label>
                Password
                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>

            <button type="submit" disabled={!username.trim() || !password.trim()}>
                Submit
            </button>
        </form>
    )
}

export default Login;
