import React from 'react'
import { Link } from 'react-router-dom'
import SectionTitle from './SectionTitle'
import { chefNames } from './MenuApi'
import "./style.css"
import "./media.css"

const Chef = () => {
    
    return (
        <>
            <div className="chef_details_container">
                <div className="chef_Details">
                    <div className="chef_title">
                        <SectionTitle description={{ h1: "Our Expects Chef", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }} />
                    </div>

                    <div className="chef_img c1">
                        <img src="Images/chef1.png" alt="" />
                    </div>
                    <div className="chefs">
                        <div className="chef_names">
                            {
                                chefNames.slice(0, 5).map((e, index) => {
                                    const { name, icon } = e;
                                    return (
                                        <div className="part" key={index}>
                                            <p>{name}</p>
                                            {icon}
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div className="chef_names">
                            {
                                chefNames.slice(5, 10).map((e, index) => {
                                    const { name, icon } = e;
                                    return (
                                        <div className="part" key={index}>
                                            <p>{name}</p>
                                            {icon}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="chef_btn">
                        <Link to="/menu" className='btn btn_dark'><button>Menu</button></Link>
                        <Link to="/contact" className='btn'><button>Book Table</button></Link>
                    </div>
                </div>

                <div className="chef_img c2">
                    <img src="Images/chef1.png" alt="" />
                </div>
                <div className="svg_chef">

                </div>
            </div>
        </>
    )
}

export default Chef
