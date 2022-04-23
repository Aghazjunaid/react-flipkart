import React from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import Footer from './Footer';
import Header from './header';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import NavDataPage from '../pages/Navdata-page';
import Random from './Random';

function Layout () {
    let location = useLocation();

    let isLogin = location.pathname.includes("login")
    let isSignup = location.pathname.includes("signup")

    return (
        <>
            <Header/>
            {isLogin || isSignup ? 
            <Random/> : null}
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/signup' element={<Signup/>} />
                    <Route path='/top-offers' element={<NavDataPage/>} />
                </Routes>
            <Footer/>
        </>
    )
}

export default Layout