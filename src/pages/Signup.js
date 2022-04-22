import React from "react";
import {Link} from 'react-router-dom';

function Signup() {
    return (
        <>
            <div class="box">
                <div class="box-container">
                    <div class=" box1">
                        <div class="inline-text">
                            <h1>Looks like you're <br/> new here!</h1>
                            <p>
                            Sign up with your mobile <br/> number to get started
                            </p>
                        </div>
                    </div>
                    <div class="box2">
                        <div class="user-id user-data">
                            <input type="email" placeholder="Enter Mobile number" />
                        </div>

                    <p class="terms">By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
                    <div class="btns1">
                        <div class="user-id button">
                            <input type="submit" name="" id="" value="Continue" />
                        </div>
                        <div class="user-id button">
                            <Link to="/login"><input type="reset" name="" id="" value="Existing User? Log in" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Signup