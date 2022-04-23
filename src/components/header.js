import React from 'react'
import {Link} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
function Header() {
    return (
        <>
            <div className="navbar">
                <div className="container">
                    <div className="mobile-icons">
                        <div className="mobile-icons-left">
                            <i className="fa fa-bars"></i>
                            <div className="logo">
                                <a href="/">
                                    <img height="20" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="logo" />
                                    <div style={{width: "90px"}}>
                                        <span style={{fontStyle: "italic", fontSize: "14px", color: "white"}}>Explore</span>
                                        <span style={{color: "yellow", fontStyle: "italic", fontSize: "12px"}}>Plus</span>
                                        <img height="10" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt="logo" />
                                    </div> 
                                </a>   
                            </div>
                        </div>
                        <div className="mobile-icons-right">
                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxMiAxNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Im0yNTQuMTIgNTMuNjE3Yy4wMjkgMS4wMS4xMDEgMi4zODIuMTUgMi42OC4wMjUuMTUyLjE1Ni4yNjMuMzEuMjYzbC42NzIuMDIxYy4xNTQgMCAuMTc1LS4xMTEuMTk5LS4yNjQuMDQ5LS4zMDQuMTIyLTEuNjkyLjE1MS0yLjY5NyAxLS4wMjkgMi4zOTItLjEwMiAyLjY5Ny0uMTUxLjE1My0uMDI0LjI2NC0uMDQ1LjI2NC0uMTk5bC0uMDIxLS42NzJjMC0uMTU0LS4xMTEtLjI4NS0uMjYzLS4zMS0uMjk4LS4wNDktMS42NjktLjEyMS0yLjY4LS4xNS0uMDMxLS45ODYtLjEwMi0yLjMxMi0uMTQ5LTIuNjE1LS4wMjQtLjE1My0uMDQ0LS4yNjYtLjItLjI2NmwtLjY2OS0uMDIxYy0uMTU1IDAtLjI4Ni4xMTItLjMxLjI2NC0uMDQ4LjI5OS0uMTE5IDEuNjQxLS4xNDkgMi42NC0uOTk4LjAzLTIuMzQuMTAyLTIuNjQuMTQ5LS4xNTMuMDI0LS4yNjQuMTU2LS4yNjQuMzFsLjAyMS42NjljMCAuMTU1LjExMy4xNzYuMjY2LjIuMzAzLjA0NyAxLjYyOS4xMTggMi42MTUuMTQ5bTUuNzY1IDYuMzgzaC05LjYyMWMtLjQxMyAwLS43NjUtLjI2Ny0uODMxLS42MzMtLjE2Ni0uOTEzLS40MzUtNC43MDEtLjQzNS02Ljg2NyAwLTIuMTA0LjI3My01LjkzMi40MzgtNi44NjQuMDY1LS4zNjcuNDE4LS42MzYuODMyLS42MzZoOS42MTNjLjQxNiAwIC40NzEuMjcxLjUzNS42NC4xNjUuOTU2LjQ0MiA0LjgzNS40NDIgNi44NiAwIDIuMTEzLS4yNzIgNS45MzUtLjQzOCA2Ljg2NS0uMDY1LjM2Ny0uMTIuNjM1LS41MzQuNjM1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjQ5LTQ1KSIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=" />
                            <i className="fa fa-shopping-cart"></i>
                            <span>Login</span>
                        </div>
                    </div>
                    <div className="searchbar">
                        <input type="text" placeholder="Search for Products, brands and more" />
                        <i className="fa fa-search"></i>
                    </div>
                    <div className="btns">
                        <Link to="/login"> <input type="button" value="Login" /> </Link>
                        <div className="more-dropdown">
                            <div className="dropbtn">More</div>
                            <div className="dropdown-content">
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" className="" viewBox="0 0 12 14"><g fill="none" fill-rule="evenodd"><path d="M-4-3h20v20H-4z"></path><path fill="#2874F1" d="M6.17 13.61c-1.183 0-1.922-.723-1.922-1.88H8.09c0 1.157-.74 1.88-1.92 1.88zm4.222-5.028l1.465 1.104v1.07H0v-1.07l1.464-1.104v-2.31h.004c.035-2.54 1.33-4.248 3.447-4.652V.992C4.915.446 5.37 0 5.928 0c.558 0 1.014.446 1.014.992v.628c2.118.404 3.412 2.112 3.446 4.65h.004v2.312z"></path></g></svg>
                                    <span>Notification Preferences</span>
                                </a>
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" className="" viewBox="0 0 16 14"><g fill="none" fill-rule="evenodd"><path d="M-2-3h20v20H-2V-3zm8.333 4.167h3.334v1.666H6.333V1.167zm0 0h3.334v1.666H6.333V1.167z"></path><path fill="#2874F0" fill-rule="nonzero" d="M6.467 10.067V9.3h-5.36L1.1 12.367c0 .85.682 1.533 1.533 1.533h10.734c.85 0 1.533-.682 1.533-1.533V9.3H9.533v.767H6.467zm7.666-6.9H11.06V1.633L9.526.1H6.459L4.926 1.633v1.534h-3.06c-.843 0-1.533.69-1.533 1.533V7c0 .851.683 1.533 1.534 1.533h4.6V7h3.066v1.533h4.6c.844 0 1.534-.69 1.534-1.533V4.7c0-.843-.69-1.533-1.534-1.533zm-4.6 0H6.467V1.633h3.066v1.534z"></path></g></svg>
                                    <span>Sell On Flipkart</span>
                                </a>
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="" viewBox="0 0 14 17"><g fill="none" fill-rule="evenodd"><path fill="#2874F0" fill-rule="nonzero" d="M12.25.542H1.75c-.833 0-1.5.675-1.5 1.5v10.5c0 .825.667 1.5 1.5 1.5h3L7 16.292l2.25-2.25h3c.825 0 1.5-.675 1.5-1.5v-10.5c0-.825-.675-1.5-1.5-1.5zm-4.5 12h-1.5v-1.5h1.5v1.5zM9.303 6.73l-.676.69c-.54.547-.877.997-.877 2.122h-1.5v-.375c0-.825.338-1.575.877-2.123l.93-.945c.278-.27.443-.646.443-1.058 0-.825-.675-1.5-1.5-1.5s-1.5.675-1.5 1.5H4c0-1.658 1.342-3 3-3s3 1.342 3 3c0 .66-.27 1.26-.697 1.687z"></path></g></svg>
                                    <span>24x7 Customer Care</span>
                                </a>
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" className="" viewBox="0 0 18 10"><g fill="none" fill-rule="evenodd"><path fill="#2874F0" fill-rule="nonzero" d="M12.333 0l1.91 1.908-4.068 4.067-3.333-3.333L.667 8.825 1.842 10l5-5 3.333 3.333 5.25-5.24L17.333 5V0"></path></g></svg>
                                    <span>Advertise</span>
                                </a>
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" className="" viewBox="0 0 12 14"><g fill="none" fill-rule="evenodd"><path d="M-4-3h20v20H-4z"></path><path fill="#2874F0" fill-rule="nonzero" d="M12 4.94H8.57V0H3.43v4.94H0l6 5.766 6-5.765zM0 12.354V14h12v-1.647H0z"></path></g></svg>
                                    <span>Download App</span>
                                </a>
                            </div>
                        </div>
                        <div className="cart">
                            <i className="fa fa-shopping-cart"></i>
                            <span style={{marginLeft: "2px"}}>Cart</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
