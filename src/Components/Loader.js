import React from 'react'
import '../CSS/Loader.scss'
import logo from '../logo.svg'
function Loader() {
    console.log('first')
    return (
        <div style={{width:"100%",height:"100vh",backgroundColor:"#1c1d25"}}>
            <svg id="loader" width="100%" height="100%">
                <path id="corners" d="m 0 12.5 l 0 -12.5 l 50 0 l 0 50 l -50 0 l 0 -37.5" />
            </svg>
            <img src={logo} alt="" className='loaderLogo' style={{width:"35px",position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)"}} />
        </div>
    )
}

export default Loader