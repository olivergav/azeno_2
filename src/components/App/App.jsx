import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';
import Header from '../Header/Header';
import useCookie from '../hooks/useCookie';
import CookieWrapper from '../CookieWrapper/CookieWrapper';

function App() {
    const [cookie, setCookie] = useCookie('token_auth');

    return (
        <BrowserRouter>
            <Header />
            <CookieWrapper cookie={cookie} />
        </BrowserRouter>
    );
}

export default App;
