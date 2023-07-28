import React from 'react'
import SectionTitle from './SectionTitle'
import MenuApi from './MenuApi'
import DishesCard from './DishesCard'
import"./media.css"

const Dishes = () => {
    // const showCard = 4;
    return (
        <>
            <div className="dishes_section">
                <SectionTitle description={{ h1: "Our Special Dishes", p: "Indulge in our culinary masterpieces, where every dish is a symphony of flavors and a feast for the senses" }} />

                <div className="cards">
                    {
                        MenuApi.slice(0, 4).map((e, index) => {
                            const { Image, Name, Description, Price } = e;
                            return (
                               <DishesCard Name={Name} Price={Price} Description={Description} Image={Image} key={index} />
                            )
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default Dishes
