import React from "react";
import {Link} from 'react-router-dom';

function Login() {
    return (
        <>
            <div class="box">
                <div class="box-container">
                    <div class=" box1">
                        <div class="inline-text">
                            <h1>Login</h1>
                            <p>
                                Get access to your Orders,<br />
                                Wishlist and<br />
                                Recomadations
                            </p>
                        </div>
                    </div>
                    <div class="box2">
                        <div class="user-id user-data">
                            <input type="email" placeholder="Enter Email/Mobile Number" />
                        </div>
                        <div class="user-id user-data">
                            <input type="password" placeholder="Enter Password" />
                        </div>

                        <span><a href="/">Forgot?</a> </span>
                    <p class="terms">By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
                    <div class="btns1">
                        <div class="user-id button">
                            <input type="submit" name="" id="" value="Login" />
                        </div>
                        <div class="user-id">
                            <p>OR</p>
                        </div>
                        <div class="user-id button">
                            <input type="reset" name="" id="" value="Request OTP" />
                        </div>
                    </div>

                    <div class="user-id">
                        <p class="footer2"><Link to="/signup">New to Flipkart? Create an account</Link></p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login