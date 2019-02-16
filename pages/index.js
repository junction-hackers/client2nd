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
    <div style={{justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  width: '100%'}}>
    <label for="file_photo">
      <p>FOUND</p>
      <input id="file_photo" type="file" style={{display:'none'}} onChange={handleSelectedFile}/>
    </label>
    <label for="file_photo">
      <p>SEARCHING</p>
      <input id="file_photo" type="file" style={{display:'none'}} onChange={handleSelectedFile}/>
    </label>

    <style jsx>{`
    label {
      color: black;
      background-color: white;
      box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
      border-radius: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      line-height: 0;
      padding: 0;
      height: 64px;
      width: 90%;
      margin-bottom: 30px;
      max-width: 500px;
      font-size: 18px;
      cursor: pointer;
    }
    label:hover {
      background: #f5f5f5;
    }
    p {
      margin: 0;
    }
    `}</style>

    </div>
  )
}

export default Index
