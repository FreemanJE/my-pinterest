import React from 'react'
import Pin from './Pin';
import "./Mainboard.css"
import videoBg from '../bkgvideo/videoBg.mp4'

function Mainboard(props) {

  let { pins } = props

  return (
   <div className='mainboard'>
      <video src={videoBg} autoPlay loop muted />
      <div className='overlay'></div>
      <div className='mainboard__container'>
        {pins.map((pin, index) => {
          let { urls, alt_description } = pin;
          return <Pin key={index} urls={urls} alt_description={alt_description} />
        })}

      </div>
     

    </div> 

     
  )
}

export default Mainboard

