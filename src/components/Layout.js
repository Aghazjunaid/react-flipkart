import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Footer from './Footer';
import Header from './header';
import Home from '../pages/Home';
import Login from '../pages/Login';

function Layout () {
    return (
        <>
            <Header/>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/login' element={<Login/>} />
                </Routes>
            <Footer/>
        
        </>
    )
}

export default Layout