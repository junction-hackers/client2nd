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
    background: '#fafafa',
  width: '100%',
background: "url('/static/bg.gif')"}}>
    <p><span>If you found <i>someone involved in a disaster</i>, or if you are searching for your <b>missing loved ones</b>, please use the buttons below:</span></p>
    <img src='/static/Trackr.png' style={{position: 'absolute',
    top: 70,
    left: '50%',
    width: 270,
    transform: 'translateX(-50%)'
}} />
    <label for="file_photo">
      FOUND
      <input id="file_photo" type="file" style={{display:'none'}} onChange={handleSelectedFile}/>
    </label>
    <label for="file_photo">
      SEARCHING
      <input id="file_photo" type="file" style={{display:'none'}} onChange={handleSelectedFile}/>
    </label>

    <img src='/static/globe.gif' style={{position: 'absolute', bottom: 24, right: 24, width: 70}} />
    <img src='/static/animation2.gif' style={{position: 'absolute', bottom: 24, left: 24, width: 100}} />

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
      margin-bottom: 24px;
      max-width: 500px;
      font-size: 17px;
      cursor: pointer;
    }
    label:hover {
      background: #f5f5f5;
    }

    label {
      color: #1200f4;
      text-transform: uppercase;
      padding: .7em;
      text-decoration: underline;
      cursor: pointer;
      font-size: 17px;
      border-color: #cbcbcb #4e474e #4e474e #cbcbcb;
      border-style: solid;
      border-width: 5px;
      background: #adadad;
      font-weight: 700;
    }
    label:hover {
      color: #fdf500;
      outline-color: #fdf500;
      background: #adadad;
    }
    p {
      width: 100%;
      margin: 0 auto;
      white-space: nowrap;
      overflow: hidden;
      box-sizing: border-box;
      color: white;
      position: absolute;
      top: 0;
      left: 0;
      padding: 12px;
      box-sizing: border-box;
      font-size: 18px;
      font-weight: 400;
    }

    span {
        display: inline-block;
        padding-left: 100%;  /* show the marquee just outside the paragraph */
        animation: marquee 15s linear infinite;
    }

    span:hover {
        animation-play-state: paused
    }

    /* Make it move */
    @keyframes marquee {
        0%   { transform: translate(0, 0); }
        100% { transform: translate(-100%, 0); }
    }

    i {
      color: #fdf500;
      font-style: normal;
    }
    b {
      color: rgb(255, 0, 102);
      font-weight: normal;
    }
    `}</style>

    </div>
  )
}

export default Index
