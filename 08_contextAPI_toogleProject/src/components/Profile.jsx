import React, {useContext} from 'react';
import UserContext from '../context/UserContext';

function Profile(){
    // useContext reads the current value given by UserContextProvider.
    const {user} = useContext(UserContext);

    if(!user) {
        return (
            <div className="auth-card profile-card empty-profile">
                <p className="card-label">Step 2</p>
                <h2>Profile</h2>
                <p className="card-copy">Please login to see your profile details here.</p>
            </div>
        )
    }

    return (
        <div className="auth-card profile-card">
            <p className="card-label">Step 2</p>
            <h2>Profile</h2>
            <div className="avatar" aria-hidden="true">
                {user.username.charAt(0).toUpperCase()}
            </div>
            <p className="welcome-text">Welcome, {user.username}</p>
            <p className="card-copy">Profile is reading this username from context.</p>
        </div>
    )
}

export default Profile;
