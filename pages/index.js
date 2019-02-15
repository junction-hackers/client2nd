import React, { useState } from 'react'
import NoSSR from 'react-no-ssr'

import Router from 'next/router'
import Scene from '../components/Scene'
import Loading from '../components/Loading'

import '../styles/main.scss'
import Projects from '../components/Projects'
import { ParallaxProvider, Parallax} from 'react-scroll-parallax';
/**
 * Implements main page
 */
const Index = () => {
  const [selectedFile, setSelectedFile] = useState(0);
  
  let handleSelectedFile = event => {
      setSelectedFile(event.target.files[0])
      navigator.geolocation.getCurrentPosition(foundLocation, noLocation);

      function foundLocation(position)
      {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        Router.push(`/map?lat=${lat}&long=${long}`)
      }
      function noLocation()
      {
        alert('Could not find location');
      }
  }
  
  return (
    <div>
    <body style={{overflowX: 'hidden'}}>
    <center>
    <label for="file_photo">
      <p>FOUND</p>
      <input id="file_photo" type="file" style={{display:'none'}} onChange={handleSelectedFile}/>
    </label>
    <br/>
    <label for="file_photo">
      <p>SEARCHING</p>
      <input id="file_photo" type="file" style={{display:'none'}} onChange={handleSelectedFile}/>
    </label>
    </center>
    </body>

    <style jsx>{`
    label {
      color: white;  
      background-color: blue;
      margin: 20px;
      padding: 10px;
      border-radius: 12px;
    }
    `}</style>

    </div>
  )
}

export default Index
