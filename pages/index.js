import React, { useState } from 'react'
import User from '../components/user.js'
import Router from 'next/router'

import '../styles/main.scss'

/**
 * Implements main page
 */
const Index = () => {
  const [selectedFile, setSelectedFile] = useState(0);
  const [victimBool, setVictimBool] = useState(true);
  let handleVictimFile = event => {
-    setSelectedFile(event.target.files[0])
     setVictimBool(true)
      Router.push('/map')
  }
  let handleSearchFile = event => {
-    setSelectedFile(event.target.files[0])
     setVictimBool(false)
      Router.push('/map')
  }
  return (
    <div style={{justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    background: '#fafafa',
  width: '100%'}}>

      <User
       image={selectedFile}
       victimBool={victimBool}
      />

    <h1 style={{color: 'black', margin: 0, position: 'absolute', top: 64, fontSize: 56}}>Trackr</h1>

    <label for="file_photo">
      FOUND
      <input id="file_photo" type="file" style={{display:'none'}} onChange={handleVictimFile}/>
    </label>
    <label for="file_photo">
      SEARCHING
      <input id="file_photo" type="file" style={{display:'none'}} onChange={handleSearchFile}/>
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
      margin-bottom: 24px;
      max-width: 500px;
      font-size: 17px;
      cursor: pointer;
    }
    label:hover {
      background: #f5f5f5;
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
