import React from 'react'
import "./style.css"
import"./media.css"

const DishesCard = ({ Name, Price, Description, Category, Image, index }) => {
    return (
        <>
            <div className="dishes_card" key={index}>
                <div className="card_img">
                    <img src={Image} alt="" />
                </div>
                <div className="card_details">
                    <div className="card_title">
                        <h3>{Name}</h3>
                    </div>
                    <div className="card_description">
                        <p>{Description}</p>
                        <h4>{Price}</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DishesCard
