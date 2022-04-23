import React from "react";
import {Link} from 'react-router-dom';

function Signup() {
    return (
        <>
            <div className="box">
                <div className="box-container">
                    <div className=" box1">
                        <div className="inline-text">
                            <h1>Looks like you're <br/> new here!</h1>
                            <p>
                            Sign up with your mobile <br/> number to get started
                            </p>
                        </div>
                    </div>
                    <div className="box2">
                        <div className="user-id user-data">
                            <input type="email" placeholder="Enter Mobile number" />
                        </div>

                    <p className="terms">By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
                    <div className="btns1">
                        <div className="user-id button">
                            <input type="submit" name="" id="" value="Continue" />
                        </div>
                        <div className="user-id button">
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