import "./Nav.css"
import React, { useEffect, useState } from "react";

function Nav() {

    const [show, handleshow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleshow(true);
        } else {
            handleshow(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <div className='nav_contents'>
            <img
                className='nav_logo'
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                //class="img-fluid rounded-top"
                alt=""
            />

            <img
                className='nav_avatar'
                src="https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg"
                //class="img-fluid rounded-top"
                alt=""
            />
            
        </div>
        </div>
        
    )
}

export default Nav
