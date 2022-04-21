import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Footer from './Footer';
import Header from './header';
import Home from '../pages/Home';

function Layout () {
    return (
        <>
            <Header/>
                <Routes>
                    <Route path='/' element={<Home/>} />

                </Routes>
            <Footer/>
        
        </>
    )
}

export default Layout