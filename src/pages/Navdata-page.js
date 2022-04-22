import React from "react";
import { Link } from "react-router-dom";
import { navDatas,dealsOfTheDayData } from "../data";
import Product from "../components/Product";

const NavDataPage = () => {
    return (
        <>
            <div className="navData">
                <div className="navData-container">
                    {
                        navDatas.map((ele, index)=>{
                            return (
                                <div>
                                    <Link to="#">
                                        <div>{ele.text}</div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div class="deals">
                <div class="footwear" style={{paddingTop: "15px"}}>
                    <div class="footwear-header">
                        <div class="footwear-header-clock">
                            <h2 style={{
                                        fontSize: "22px",
                                        lineHeight: "32px",
                                        display: "inline-block",
                                        fontWeight: "500"
                                        }}>Deals of the Day
                            </h2>
                            <div class="clock">
                                <img width="20" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg" alt="clock"/>
                                <span>21 : 08 : 47 Left</span>
                            </div>
                        </div>
                        <input type="button" value="VIEW ALL"/>
                    </div>
                    <hr/>
                    <div class="footwear-cards">
                        {
                            dealsOfTheDayData.map((ele,index) => {
                                return(
                                    <Product ele={ele} index={index} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavDataPage