import React from 'react'
import "./style.css"
import"./media.css"

const AboutUs = ({ about, setAbout }) => {
    return (
        <>
            {about ? <div className="bg_blur"></div> : ""}
            {about ? document.body.style.overflow = "hidden": document.body.style.overflow = ""}

            <div className={about ? "about_section show" : "about_section"}>

                <div className="about_container">
                    <div className="about_title">
                        <h1>About Us</h1>
                    </div>
                    <hr />
                    <div className="about_description">
                        <p>
                            At Restaurant Name, we are committed to providing an unforgettable dining experience. Our culinary
                            journey began with a vision to create a place where passion for food, creativity, and warm hospitality
                            converge to craft exceptional moments for our guests.
                        </p>
                        <p>
                            Our team of talented chefs, led by our esteemed Executive Chef, meticulously curates each dish on our
                            menu. We take pride in sourcing the finest and freshest ingredients, supporting local farmers and
                            suppliers to bring you the very best flavors from the region and beyond.
                        </p>
                        <p>
                            Join us at Restaurant Name, and allow us to take you on a gastronomic adventure that celebrates the
                            art of fine dining and the joy of savoring every moment.
                        </p>
                    </div>
                </div>
                <div className="close_btn" onClick={() => setAbout(false)}>
                    <h3>X</h3>
                </div>
            </div>
        </>
    )
}

export default AboutUs
