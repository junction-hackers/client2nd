import React, { useState } from 'react'
import User from '../components/user.js'

/**
 * Implements main page
 */

let Send = () =>{
  
}

const Index = () => {
  const [selectedFile, setSelectedFile] = useState(0);

  return (
    <div
      style={{justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      background: '#fafafa',
      width: '100%',
      background: "url('/static/bg.gif')"}}
    >
    <img src='/static/Trackr.png' style={{position: 'absolute',
      top: 70,
      left: '50%',
      width: 270,
      transform: 'translateX(-50%)'
    }} />
      <input id="autocomplete" placeholder="Enter phone number" type="text" />
      <a onClick={ () => Send  }>SEND</a>

      <img src='/static/globe.gif' style={{position: 'absolute', bottom: 24, right: 24, width: 70}} />
      <img src='/static/animation2.gif' style={{position: 'absolute', bottom: 24, left: 24, width: 100}} />

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
      a {
        color: #1200f4 !important;
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
        text-decoration: underline !important;
      }
      a:hover {
        color: #fdf500 !important;
        outline-color: #fdf500;
        background: #adadad;
      }
      input {
        border-radius: 0;
        border-left: 1px solid gray;
        border-right: 1px solid #dfdfdf;
        border-bottom: 1px solid #dfdfdf;
        box-shadow: inset 1px 1px #000, 1px 0 #fff, 0 1px #fff, 1px 1px #fff;
        font-family: Arial,"Helvetica Neue",Helvetica,sans-serif;
      }
      `}</style>
    </div>
  )
}

export default Index
