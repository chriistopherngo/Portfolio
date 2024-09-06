import React from 'react'
import './SectionHeading.css'

const SectionHeading = ({preh2, heading}) => {
  return (
    <div className='section_heading'>
        <span className="preh2">{preh2}</span>
        <h2>{heading}</h2>
    </div>
  )
}

export default SectionHeading