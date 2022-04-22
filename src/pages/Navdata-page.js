import React from "react";
import { Link } from "react-router-dom";
import { navDatas,dealsOfTheDayData,faishonTopDealsData, bigStealsOfTheWeekData,topOffersData } from "../data";
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
            <div className="deals">
                <div className="footwear" style={{paddingTop: "15px"}}>
                    <div className="footwear-header">
                        <div className="footwear-header-clock">
                            <h2 style={{
                                        fontSize: "22px",
                                        lineHeight: "32px",
                                        display: "inline-block",
                                        fontWeight: "500"
                                        }}>Deals of the Day
                            </h2>
                            <div className="clock">
                                <img width="20" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg" alt="clock"/>
                                <span>21 : 08 : 47 Left</span>
                            </div>
                        </div>
                        <input type="button" value="VIEW ALL"/>
                    </div>
                    <hr/>
                    <div className="footwear-cards">
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
            <div className="footwear">
                <div className="footwear-header">
                    <h2>Fashion Top Deals</h2>
                    <input type="button" value="VIEW ALL"/>
                </div>
                <hr/>
                <div className="footwear-cards">
                {
                    faishonTopDealsData.map((ele,index) => {
                        return(
                            <Product ele={ele} index={index} />
                        )
                    })
                }
                </div>
            </div>

            <div className="footwear">
                <div className="footwear-header">
                    <h2>Big Steals of the Week</h2>
                    <input type="button" value="VIEW ALL"/>
                </div>
                <hr/>
                <div className="footwear-cards">
                {
                    bigStealsOfTheWeekData.map((ele,index) => {
                        return(
                            <Product ele={ele} index={index} />
                        )
                    })
                }
                </div>
            </div>

            <div className="footwear">
                <div className="footwear-header">
                    <h2>Top Offers</h2>
                    <input type="button" value="VIEW ALL"/>
                </div>
                <hr/>
                <div className="footwear-cards">
                {
                    topOffersData.map((ele,index) => {
                        return(
                            <Product ele={ele} index={index} />
                        )
                    })
                }
                </div>
            </div>
        </>
    )
}

export default NavDataPage