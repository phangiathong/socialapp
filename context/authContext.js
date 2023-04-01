import { View, Text } from 'react-native'
import React, {createContext, useState, useContext} from 'react';
import { registerUser } from '../filebaseConfig';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);

    return (
      <AuthContext.Provider
        value={{
         user,
         setUser,
         register: registerUser
        }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export const useAuthContext = () => useContext(AuthContext);