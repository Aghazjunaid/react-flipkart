import React from 'react'
import Navdata from '../components/Navdata'
import {navDatas, dealsOfTheDay, topDealsOnFashion, furnitureBestSeller} from '../data';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Product from '../components/Product';


function Home() {
    return (
        <>
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
                <div className="footwear deals-width">
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
                <div className="ad">
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

            <section className="details">
                <div className="details-body">
                    <h2 className="details-title">Flipkart: The One-stop Shopping Destination</h2>
                    <p className="details-paragraph">E-commerce is revolutionizing the way we all shop in India. Why do you want to hop from one store to another in 
                        search of the latest phone when you can find it on the Internet in a single click? Not only mobiles. Flipkart houses everything you can 
                        possibly imagine, from trending electronics like laptops, tablets, smartphones, and mobile accessories to in-vogue fashion staples like shoes, 
                        clothing and lifestyle accessories; from modern furniture like sofa sets, dining tables, and wardrobes to appliances that make your life
                        easy like washing machines, TVs, ACs, mixer grinder juicers and other time-saving kitchen and small appliances; from home furnishings like 
                        cushion covers, mattresses and bedsheets to toys and musical instruments, we got them all covered. You name it, and you can stay assured 
                        about finding them all here. For those of you with erratic working hours, 
                        Flipkart is your best bet. Shop in your PJs, at night or in the wee hours of the morning. This e-commerce never shuts down.</p>
                </div>
                <div className="details-body">
                    <h2 className="details-title">Flipkart Plus</h2>
                    <p className="details-paragraph">A world of limitless possibilities awaits you - Flipkart Plus was kickstarted as a loyalty reward programme for all its 
                        regular customers at zero subscription fee. All you need is 500 supercoins to be a part of this service. For every 100 rupees spent on Flipkart order, 
                        Plus members earns 4 supercoins & non-plus members earn 2 supercoins. Free delivery, early access during sales and shopping festivals, 
                        exchange offers and priority customer service are the top benefits to a Flipkart Plus member. In short, earn more when you shop more!</p>
                </div>
                <div className="details-body">
                    <h2 className="details-title">No Cost EMI</h2>
                    <p className="details-paragraph">In an attempt to make high-end products accessible to all, our No Cost EMI plan enables you to shop with us under EMI, 
                        without shelling out any processing fee. Applicable on select mobiles, laptops, large and small appliances, furniture, electronics and watches, 
                        you can now shop without burning a hole in your pocket. If you've been eyeing a product for a long time, chances are it may be up for a no cost EMI. 
                        Take a look ASAP! Terms and conditions apply.
                    </p>
                </div>
                <div className="details-body">
                    <h2 className="details-title">Mobile Phones</h2>
                    <p className="details-paragraph">From budget phones to state-of-the-art smartphones, we have a mobile for everybody out there. Whether you're looking for larger, fuller screens, power-packed batteries, blazing-fast processors, beautification apps, high-tech selfie cameras or just large internal space, we take care of all the essentials. Shop from top brands in the country like Samsung, Apple, Oppo, Xiaomi, Realme, Vivo, and Honor to name a few. Rest assured, you're buying from only the most reliable names in the market. What's more, with Flipkart's Complete Mobile Protection Plan, you will never again find the need to run around service centres. This plan entails you to a number of post-purchase solutions, starting at as low as Rupees 99 only! Broken screens, liquid damage to phone, hardware and software glitches, and replacements - the Flipkart Complete Mobile Protection covers a comprehensive range of post-purchase problems, with door-to-door services.</p>
                </div>
                <div className="details-body">
                    <h2 className="details-title">Electronic Devices and Accessories</h2>
                    <p className="details-paragraph">Photography lovers, you couldn't land at a better page than ours. Cutting-edge DSLR cameras, ever reliable point-and-shoot cameras, millennial favourite instant cameras or action cameras for adventure junkies: our range of cameras is as much for beginners as it is for professionals. Canon, Nikon, GoPro, Sony, and Fujifilm are some big names you'll find in our store. Photography lovers, you couldn't land at a better page than ours. Cutting-edge DSLR cameras, ever reliable point-and-shoot cameras, millennial favourite instant cameras or action cameras for adventure junkies: our range of cameras is as much for beginners as it is for professionals. Canon, Nikon, GoPro, Sony, and Fujifilm are some big names you'll find in our store.
                    </p>
                </div>
                <div className="details-body">
                    <h2 className="details-title">Large Appliances</h2>
                    <p className="details-paragraph">Sleek TVs, power-saving refrigerators, rapid-cooling ACs, resourceful washing machines - discover everything you need to run a house under one roof. Our Dependable TV and Appliance Store ensures zero transit damage, with a replacement guarantee if anything goes wrong; delivery and installation as per your convenience and a double warranty (Official Brand Warranty along with an extended Flipkart Warranty) - rest assured, value for money is what is promised and delivered. Shop from market leaders in the country like Samsung, LG, Whirlpool, Midea, Mi, Vu, Panasonic, Godrej, Sony, Daikin, and Hitachi among many others.
                    </p>
                </div>
                <div className="details-body">
                    <h2 className="details-title">Lifestyle
                    </h2>
                    <p className="details-paragraph">Flipkart, 'India ka Fashion Capital', is your one-stop fashion destination for anything and everything you need to look good. Our exhaustive range of Western and Indian wear, summer and winter clothing, formal and casual footwear, bridal and artificial jewellery, long-lasting make-up, grooming tools and accessories are sure to sweep you off your feet. Shop from crowd favourites like Vero Moda, Forever 21, Only, Arrow, Woodland, Nike, Puma, Revlon, Mac, and Sephora among dozens of other top-of-the-ladder names. From summer staple maxi dresses, no-nonsense cigarette pants, traditional Bandhani kurtis to street-smart biker jackets, you can rely on us for a wardrobe that is up to date. Explore our in-house brands like Metronaut, Anmi, and Denizen, to name a few, for carefully curated designs that are the talk of the town. Get ready to be spoiled for choice.Festivals, office get-togethers, weddings, brunches, or nightwear - Flipkart will have your back each time.
                    </p>
                </div>
                <div className="details-body">
                    <h2 className="details-title">Home and Furniture
                    </h2>
                    <p className="details-paragraph">Moving to a new place is never easy, especially if you're buying new furniture. Beds, sofa sets, dining tables, wardrobes, and TV units - it's not easy to set up everything again. With the hundreds of options thrown at you, the ride could be overwhelming. What place is reliable, what furniture will stand the test of time? These are questions you must ask before you choose a store. Well, our Durability Certified Furniture Store has not only curated a range of furniture keeping in mind the modern Indian consumer but furniture that comes with a lab certification, ensuring they last you for up to 10 years. Yes, all our furniture has gone through 35 stability and load tests so that you receive only the best-quality furniture. Be FurniSure, always. Names to look out for are Nilkamal, Godrej Interio, Urban Ladder, HomeTown, Durian and Perfect Homes.
                    </p>
                </div>
                <div className="details-body">
                    <h2 className="details-title">Baby and Kids
                    </h2>
                    <p className="details-paragraph">Your kids deserve only the best. From bodysuits, booties, diapers to strollers, if you're an expecting mother or a new mother, you will find everything you need to set sail on a smooth parenting journey with the help of our baby care collection. When it comes to safety, hygiene and comfort, you can rely on us without a second thought. Huggies, Pampers, MamyPoko, and Johnson & Johnson: we host only the most-trusted names in the business for your baby.
                    </p>
                </div>
                <div className="details-body">
                    <h2 className="details-title">Books, Sports and Games
                    </h2>
                    <p className="details-paragraph">Work hard and no play? We don't believe in that. Get access to best-selling fiction and non-fiction books by your favourite authors, thrilling English and Indian blockbusters, most-wanted gaming consoles, and a tempting range of fitness and sports gadgets and equipment bound to inspire you to get moving.
                    </p>
                </div>
            </section>
        </>
    )
}

export default Home
