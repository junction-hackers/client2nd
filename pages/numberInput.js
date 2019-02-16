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
    <div>
      <center>
        <input id="autocomplete" placeholder="Enter Your Phone Number" type="text" />
        <br/>
        <a>send</a>
      </center>
    </div>
  )
}

export default Index
