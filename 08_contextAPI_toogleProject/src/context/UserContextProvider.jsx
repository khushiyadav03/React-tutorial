import React from 'react';
import UserContext from './UserContext';

const UserContextProvider = ({ children }) => {
    // user is the shared state. Login updates it, and Profile displays it.
    const [user, setUser] = React.useState(null);

    return (
        // value contains everything child components are allowed to access from context.
        <UserContext.Provider value = {{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;
