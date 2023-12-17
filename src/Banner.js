import React from 'react'
import "./Banner.css"
function Banner() {

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }

    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://wallpapercave.com/wp/wp3321103.jpg")`,
                backgroundPosition: "center center"
            }}
        >
            <div className="banner__contents">
                <h1 className='banner__title'>Movie Name</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate(
                        `How to build a login and Log Out Authentication Flow with Google!
                        How to build a Beautiful Home Screen with all the movies looking just like Netflix!
                        How to build a Subscription page where you can see your active monthly subscription and any recurring subscriptions!
                        How to build a complete Stripe Payments Checkout Flow for paid monthly Netflix Subscriptions!
                        How to use the Firebase extension for synchronising Stripe Recurring Payments with Users
                        How to finally deploy the final build using Firebase Hosting!`,150)}
                </h1>
            </div>
            <div className="banner__fadeBottom"></div>
        </header>
        
    );

}

export default Banner
