import React, {useState} from 'react';
import {useAuth} from "../../contexts/auth";

const Home: React.FC = () => {
    const context = useAuth();

    async function handleLogout() {
        context.Logout();
    }

    return (
        <div>
            <h1>{context.user.email}</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Home;