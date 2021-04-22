import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '../services/api';

interface AuthContextData {
    signed: boolean;
    user: any;
    Login({}): Promise<void>;
    Logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<object | null>(null);

    useEffect(() => {
        const storagedUser = localStorage.getItem('@App:user');
        const storagedToken = localStorage.getItem('@App:token');

        console.log(storagedUser);
        console.log(storagedToken);

        if (storagedToken && storagedUser) {
            setUser(JSON.parse(storagedUser));
            api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
        }
    }, []);

    function getUser() {
        return user;
    }

    async function Login(formData:any) {
        const response = await api.post('/login', formData);

        setUser({
            email: formData.email
        });

        api.defaults.headers.Authorization = `Bearer ${response.data.token}`

        localStorage.setItem('@App:user', JSON.stringify({
            email: formData.email
        }));
        localStorage.setItem('@App:token', response.data.token);
    }

    function Logout() {
        setUser(null);

        sessionStorage.removeItem('@App:user');
        sessionStorage.removeItem('App:token');
    }

    return (
        <AuthContext.Provider
            value={{ signed: Boolean(user), user, Login, Logout }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;

export function useAuth(){
    const context = useContext(AuthContext);

    return context;
}