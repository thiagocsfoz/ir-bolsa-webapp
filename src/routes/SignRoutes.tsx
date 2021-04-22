import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Signin from '../pages/signin';

const SignRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Route path="/" component={Signin} />
        </BrowserRouter>
    );
};

export default SignRoutes;