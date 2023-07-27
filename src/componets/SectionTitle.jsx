import React from 'react'
import './media.css'
const SectionTitle = ({description}) => {
  return (
    <>
      <div className="section_title">
        <h1>{description.h1}</h1>
        <p>{description.p}</p>
      </div>
    </>
  )
}

export default SectionTitle
