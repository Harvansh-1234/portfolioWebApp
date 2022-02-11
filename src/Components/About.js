import React from 'react'
import aboutImg from '../Group_18.png'
import '../CSS/About.css'

function About() {
  return (
    <>
      <div className='AboutMain'>
        <div className='about-side'>
          <div className='aboutSide'></div>
          <h3>About()</h3>
        </div>
        <div className='AboutMain2'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis provident accusantium mollitia alias consequuntur libero dolorum. Ratione error sint pariatur accusamus possimus similique quasi, consequatur quisquam facilis tenetur nulla totam.</p>

          <div className='aboutCard1'>
            <div><h2>01+</h2></div>
            <div><h5>Years
              experience</h5></div>
          </div>
          <div className='aboutCard2'>
            <div><h2>01+</h2></div>
            <div><h5>Companies
              worked</h5></div>
          </div>
          <div className='aboutCard3'>
            <div><h2>05+</h2></div>
            <div><h5>Completed
              projects</h5></div>
          </div>
          <div className='aboutCard4'>
            <div><h2>01+</h2></div>
            <div><h5>Years
              experience</h5></div>
          </div>
        </div>
        <div><img src={aboutImg} alt="" /></div>
      </div>

    </>
  )
}

export default About