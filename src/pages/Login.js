import React from "react";
import {Link} from 'react-router-dom';

function Login() {
    return (
        <>
            <div className="box">
                <div className="box-container">
                    <div className=" box1">
                        <div className="inline-text">
                            <h1>Login</h1>
                            <p>
                                Get access to your Orders,<br />
                                Wishlist and<br />
                                Recomadations
                            </p>
                        </div>
                    </div>
                    <div className="box2">
                        <div className="user-id user-data">
                            <input type="email" placeholder="Enter Email/Mobile Number" />
                        </div>
                        <div className="user-id user-data">
                            <input type="password" placeholder="Enter Password" />
                        </div>

                        <span><a href="/">Forgot?</a> </span>
                    <p className="terms">By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
                    <div className="btns1">
                        <div className="user-id button">
                            <input type="submit" name="" id="" value="Login" />
                        </div>
                        <div className="user-id">
                            <p>OR</p>
                        </div>
                        <div className="user-id button">
                            <input type="reset" name="" id="" value="Request OTP" />
                        </div>
                    </div>

                    <div className="user-id">
                        <p className="footer2"><Link to="/signup">New to Flipkart? Create an account</Link></p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login