import React from 'react'
import "./style.css"
import"./media.css"
import { footerDetails, footerLinks } from './MenuApi'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <div className="footer_container">
                <div className="footer_description">
                    <div className="nav_brand">
                        <img src="Images/logo1.png" alt="" />
                    </div>
                    <div className="footer_text">
                        <p>We offers a refined and elegant ambiance, inviting you to indulge in a world of gastronomic wonders. Our culinary team meticulously crafts each dish, combining the freshest ingredients with culinary expertise, delivering flavors that dance on your palate.</p>
                    </div>
                    <div className="opening_hrs">
                        <div className="opening_title">
                            <h4>Opening Hours</h4>
                        </div>
                        <div className="opening_time">
                            {
                                footerDetails.map((e, index) => {
                                    const { day, time } = e;
                                    return (
                                        <div className="day" key={index}>
                                            <p>{day}</p>
                                            <p>{time}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="footer_links">
                    {
                        footerLinks.map((e, index) => {
                            const { title, links } = e;
                            return (
                                <div className="links" key={index}>
                                    <h4>{title}</h4>
                                    <p>{links.l1}</p>
                                    <p>{links.l2}</p>
                                    <p>{links.l3}</p>
                                    <p>{links.l4}</p>
                                </div>
                            )
                        })
                    }

                    <div className="links">
                        <h4>Follow Us</h4>
                        <div className="social_icons">
                        <FaFacebookF /> <FaInstagram /> <FaTwitter />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
