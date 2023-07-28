import React from 'react'
import SectionTitle from "./SectionTitle"
import { EventsData } from './MenuApi'
import"./media.css"

const Events = () => {
  return (
    <>
      <div className="event_section" id='event'>
        <SectionTitle description={{h1: "Events", p:"Experience unforgettable moments in our enchanting venue, where every event is crafted with elegance and precision." }} />
        <div className="envents_container">
            {EventsData.map((e, index) => {
                const {Image, Title, Description} = e;
                return (
                    <div className="events_card" key={index}>
                <div className="event_img">
                    <img src={Image} alt={Title} />
                </div>
                <div className="events_description">
                    <h3>{Title}</h3>
                    <p>{Description}</p>
                </div>
            </div>
                )
            })}
        </div>
      </div>
    </>
  )
}

export default Events
