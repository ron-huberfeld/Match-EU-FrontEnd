import React, { createContext } from 'react';

const AuthContext = createContext();
const { Provider } = AuthContext;

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    return (
        <Provider
            value={{
                authState: {
                    token: null,
                    expiresAt: null,
                    userInfo: {},
                },
            }}
        >
            {children}
        </Provider>
    );
};

export { AuthContext, AuthProvider };
