import React from 'react'
import CV from "../../assets/Mariano_Alvarez_Es.pdf"


const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn btn-primary'>Download Resume</a>
        {/* <a href='#contact' className='btn btn-primary'>Contact Me!</a> */}
    </div>
  )
}

export default CTA