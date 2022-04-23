import React from 'react'
import Navdata from './Navdata'
import {navDatas, dealsOfTheDay, topDealsOnFashion, furnitureBestSeller} from '../data';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Product from './Product';


function Random() {
    return (
        <>
            <div style={{opacity: "0.5"}}>
            <div className="navData">
                <div className="navData-container">
                    {
                        navDatas.map((ele, index)=>{
                            return (
                                <Navdata src={ele.url} name = {ele.text} key={index} />
                            )
                        })
                    }
                </div>
            </div>
            {/* <div className="carousel">
                <img src="https://rukminim1.flixcart.com/flap/3376/560/image/ae9966569097a8b7.jpg?q=50" alt="poco" />
                <div className="carousel-left-symbol">&lt;</div>
                <div className="carousel-right-symbol">&gt;</div>
            </div> */}
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={17}
                totalSlides={3}
                isPlaying={true}
                interval={3000}
            >
                <Slider>
                    <Slide index={0}><img width="100%" src="https://rukminim1.flixcart.com/flap/3376/560/image/d117a62eb5fbb8e1.jpg?q=50" /></Slide>
                    <Slide index={1}><img width="100%" src="https://rukminim1.flixcart.com/flap/3376/560/image/57267a180af306fe.jpg?q=50" /></Slide>
                    <Slide index={2}><img width="100%" src="https://rukminim1.flixcart.com/flap/3376/560/image/ae9966569097a8b7.jpg?q=50" /></Slide>
                </Slider>
            </CarouselProvider>
            <div className="deals">
                <div className="footwear" style={{ width: "80%" }}>
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
                            dealsOfTheDay.map((ele,index) => {
                                return(
                                    <Product ele={ele} index={index} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className="ad" style={{ backgroundColor: "#f0f0f0", width: "20%" }}>
                    <img src="https://rukminim1.flixcart.com/flap/464/708/image/28d7b7990028c9bf.jpg?q=70" alt="ads" />
                </div>
            </div>

            <div className="footwear">
                <div className="footwear-header">
                    <h2>Top Deals On Fashion</h2>
                    <input type="button" value="VIEW ALL"/>
                </div>
                <hr/>
                <div className="footwear-cards">
                    {
                        topDealsOnFashion.map((ele,index) => {
                            return(
                                <Product ele={ele} index={index} />
                            )
                        })
                    }
                </div>
            </div>

            <div className="footwear">
                <div className="footwear-header">
                    <h2>Furniture Bestsellers</h2>
                    <input type="button" value="VIEW ALL"/>
                </div>
                <hr/>
                <div className="footwear-cards">
                    {
                        furnitureBestSeller.map((ele,index) => {
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

export default Random
