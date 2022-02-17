import React, { useState } from 'react'
import "../CSS/Skills.scss";
import { CircleProgress } from 'react-gradient-progress'
import logoBW from '../logoBW.svg';
import data from '../data/skills'
function Skills() {
  const [dev, setDev] = useState(true);
  const [code, setCode] = useState(false);

  return (
    <>
      <div className='AboutMain'>
        <div className='about-side'>
          <div className='aboutSide'></div>
          <h3>Skills</h3>
        </div>
      </div>
      <div className='skillMain'>
        <div className='buttonDiv'>
          {/* <div style={{ border: "0.5px solid black" }}>
            <div class="text-loading-mask" onClick={() => {
              setDev(true);
              setCode(false);
              console.log("third")
            }}>
              <div style={{ transitionDelay: "0.1s" }} class="text-loading-overlay"></div><a
                class="the-button call-to-button no-smoothstate open-contact"><span
                  class="button-text">I</span>
                <div class="button-mask"></div>
              </a>
            </div>
          </div>
          <div style={{ border: "0.5px solid black" }}>
            <div class="text-loading-mask" onClick={() => {
              setDev(false);
              setCode(true);
              console.log("second")
            }}>
              <div style={{ transitionDelay: "0.1s" }} class="text-loading-overlay"></div><a
                class="the-button call-to-button no-smoothstate open-contact"><span
                  class="button-text">I</span>
                <div class="button-mask"></div>
              </a>
            </div>
          </div>
          <div style={{ border: "0.5px solid black" }}>
            <div class="text-loading-mask" onClick={() => {
              setDev(false);
              setCode(false);
              console.log("first")
            }}>
              <div style={{ transitionDelay: "0.1s" }} class="text-loading-overlay"></div>
              <input type="radio" />
            </div> 
          </div>*/}

          <label for="f-option" class="l-radio">
            <input type="radio" id="f-option" name="selector" tabindex="1" checked={dev} onClick={() => {
              setDev(true);
              setCode(false);
              console.log("third")
            }}/>
          </label>
          <label for="s-option" class="l-radio">
            <input type="radio" id="s-option" name="selector" tabindex="2" onClick={() => {
              setDev(false);
              setCode(true);
              console.log("second")
            }}/>

          </label>
          <label for="t-option" class="l-radio">
            <input type="radio" id="t-option" name="selector" tabindex="3" onClick={() => {
              setDev(false);
              setCode(false);
              console.log("first")
            }}/>
          </label>
        </div>
        {dev ? <h4 className='skillHead'>Web Development</h4> : code ? <h4 className='skillHead'>Programming</h4> : <h4 className='skillHead'>UI/UX</h4>}
        <div className='skillChart'>
          {dev ? data.map((item) => (
            item.tag == 'dev' ?
              <div className='skilldiv'>
                <CircleProgress percentage={item.percentage} strokeWidth={6} primaryColor={item.color} secondaryColor="#003f5c" />
                <div>
                  {/* <img src={logoBW} alt="" width={'50px'} /> */}
                  <p>{item.name}</p>
                </div>
              </div>
              : null)) : code ? data.map((item) => (
                item.tag == 'code' ?
                  <div className='skilldiv'>
                    <CircleProgress percentage={item.percentage} strokeWidth={6} primaryColor={item.color} secondaryColor="#003f5c" />
                    <div>
                      {/* <img src={logoBW} alt="" width={'50px'} /> */}
                      <p>{item.name}</p>
                    </div>
                  </div>
                  : null)) : data.map((item) => (
                    item.tag == 'gph' ?
                      <div className='skilldiv'>
                        <CircleProgress percentage={item.percentage} strokeWidth={6} primaryColor={item.color} secondaryColor="#003f5c" />
                        <div>
                          {/* <img src={logoBW} alt="" width={'50px'} /> */}
                          <p>{item.name}</p>
                        </div>
                      </div>
                      : null))}
        </div>
      </div>
    </>
  )
}

export default Skills