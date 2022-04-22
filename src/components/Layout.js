import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Footer from './Footer';
import Header from './header';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

function Layout () {
    return (
        <>
            <Header/>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/signup' element={<Signup/>} />
                </Routes>
            <Footer/>
        
        </>
    )
}

export default Layout