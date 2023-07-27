import React from 'react'
import { connect } from './MenuApi'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import "./style.css"
import"./media.css"

const Contact = () => {
    return (
        <>
            <div id="connect">
                {
                    connect.slice(0,1).map((e, index) => {
                        const { title, description } = e;
                        return (
                            <div className="connectTitle" key={index}>
                                <h1 className="title">{title}</h1>
                                <p>{description}</p>
                            </div>
                        )
                    })
                }

                <div className="contactContainer scalePopup">
                    <div className="contactDetailsContainer">
                        {
                            connect.slice(1, 4).map((e, index) => {
                                const { title, description, icon } = e;
                                return (
                                    <div className="contactDetails" key={index}>
                                        <div className="contactDetailsIcon">
                                            {icon}
                                        </div>
                                        <div className="contactInfo">
                                            <h3>{title}</h3>
                                            <p>{description}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className="social_icons">
                            <FaFacebookF />
                            <FaInstagram />
                            <FaTwitter />
                        </div>
                    </div>

                    <form action="https://formsubmit.co/ca42f91993c2b45ad52ac18a876cdded" method="POST" className="contactForm">
                        <div className="inputContainer">
                            <div className="input">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="Name" id="name" placeholder="Enter Your Name" required autoFocus/>
                            </div>
                            <div className="input">
                                <label htmlFor="contactNumber">Contact Number</label>
                                <input type="text" name="Number" id="contactNumber" placeholder="Enter Your Contact Number" required/>
                            </div>
                            <div className="input">
                                <label htmlFor="description">Description</label>
                                <textarea name="Description" id="description" cols="30" rows="10"
                                    placeholder="Describe Your Statement" required></textarea>
                            </div>
                            <div className="submitBtn">
                                <button type="submit" className="buttons">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
