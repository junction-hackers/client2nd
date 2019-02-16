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

  return (
    <div style={{justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    background: '#fafafa',
  width: '100%',}}>
      <h1 style={{color: 'black', margin: 0, position: 'absolute', top: 64, fontSize: 56}}>Trackr</h1>
      <input id="autocomplete" placeholder="Enter phone number" type="text" />
      <a>SEND</a>


      <style jsx>{`
      input {
        margin: 0;
        height: 64px;
        color: black;
        height: 64px;
        width: 90%;
        padding: 0;
        border: 1px solid black;
        border: 1px solid rgba(0,0,0,.23);
        border-radius: 12px;
        margin-bottom: 30px;
        padding: 14px 20px;
        max-width: 500px;
        font-size: 18px;
        outline: none;
        font-size: 17px;
      }
      input:hover {
        border: 1px solid rgba(0,0,0,.5);
      }
      input:focus {
        border: 1px solid rgba(0,0,0,.5);
      }
      a {
        color: black;
        background-color: white;
        margin: 0;
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
        font-size: 16px;
        cursor: pointer;
      }
      a:hover {
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
