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
    <div style={{background: 'white',
    width: '100%',
    textAlign: 'center',
    paddingTop: 64}}>

      <User
       image={selectedFile}
       victimBool={victimBool}
      />

    <div><img src='/static/logo.png' style={{marginBottom: 40, width: 180}} /></div>
    <p>Hi, it's me Trackr! Your search and rescue buddy!<br />Did you find a missing person? Or are you searching for your loved ones?</p>
    <div>
    <label for="file_photo">
      FOUND
      <input id="file_photo" type="file" style={{display:'none'}} onChange={handleVictimFile}/>
    </label>
    </div>
    <div>
    <label for="file_photo">
      SEARCHING
      <input id="file_photo" type="file" style={{display:'none'}} onChange={handleSearchFile}/>
    </label>
    </div>


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
      box-sizing: border-box;
      color: rgba(0,0,0,.5);
      top: 0;
      left: 0;
      padding: 0 20px;
      box-sizing: border-box;
      font-size: 14px;
      font-weight: 400;
      text-align: center;
      margin-bottom: 40px;
      max-width: 700px;
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
