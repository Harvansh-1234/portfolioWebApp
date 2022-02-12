import React from 'react'
import aboutImg from '../Group_18.png'
import '../CSS/About.css'
import Rellax from 'rellax';

function About() {

  React.useEffect(() => {
    var rellax = new Rellax('.rellax', {
      breakpoints: [576, 650, 960]
    });
  })

  return (
    <>
      <div className='AboutMain'>
        <div className='about-side'>
          <div className='aboutSide'></div>
          <h3>About()</h3>
        </div>
        <div className='AboutMain2'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis provident accusantium mollitia alias consequuntur libero dolorum. Ratione error sint pariatur accusamus possimus similique quasi, consequatur quisquam facilis tenetur nulla totam.</p>
        </div>
        <div><img src={aboutImg} alt="" /></div>
        <div className='AboutMain2'>
          <div className='div'>
            <div className='div1'>

              <div className='aboutCard1 rellax' data-rellax-speed="1"
              data-rellax-xs-speed="1"
              data-rellax-mobile-speed="1"
                data-rellax-tablet-speed="2"
                data-rellax-desktop-speed="-1">
                <div><h2>01+</h2></div>
                <div><h5>Years
                  experience</h5></div>
              </div>

              <div className='aboutCard2 rellax' data-rellax-speed="1"
              data-rellax-xs-speed="1"
              data-rellax-mobile-speed="1"
              data-rellax-tablet-speed="0.3"
              data-rellax-desktop-speed="2">
                <div><h2>01+</h2></div>
                <div><h5>Companies
                  worked</h5></div>
              </div>
            </div>
            <div className='div2'>

              <div className='aboutCard3 rellax' data-rellax-speed="-1"
              data-rellax-xs-speed="1"
              data-rellax-mobile-speed="1"
              data-rellax-tablet-speed="0.3">
                <div><h2>05+</h2></div>
                <div><h5>Completed
                  projects</h5></div>
              </div>
              <div className='aboutCard4 rellax' data-rellax-speed="2"
            data-rellax-xs-speed="1"
              data-rellax-mobile-speed="1">
                <div><h2>01+</h2></div>
                <div><h5>Years
                  experience</h5></div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </>
  )
}

export default About