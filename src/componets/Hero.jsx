import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import "./style.css"
import"./media.css"

const Hero = () => {
    return (
        <>
            <div className="hero">

                <div className="hero_details">
                    <div className="hero_title">
                        <h1>We provide the best food for you</h1>
                    </div>
                    <div className="hero_description">
                        <p>We offers a refined and elegant ambiance, inviting you to indulge in a world of gastronomic wonders. Our culinary team meticulously crafts each dish, combining the freshest ingredients with culinary expertise, delivering flavors that dance on your palate.</p>
                     </div>
                    <div className="hero_btn">
                        <Link to="/menu" className='btn btn_dark'><button>Menu</button></Link>
                        <Link to="/contact" className='btn'><button>Book Table</button></Link>
                    </div>
                    <div className="social_icons">
                        <FaFacebookF />
                        <FaInstagram />
                        <FaTwitter />
                    </div>
                </div>
                
                <div className="hero_img">
                    <img src="Images/main.png" alt="Hero Image" />
                    <img src="Images/dish-2.png" alt="Hero Image"/>
                </div>

            </div>
        </>
    )
}

export default Hero
