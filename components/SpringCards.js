import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'

const calc = (x, y, size) => [
  -(y - size.y-(size.height/2)) / 10, 
  (x-size.x-(size.width/2)) / 10,
  1.1
]

const calcOnClick = (x, y, size) => [0, 180, 2]
  
  
  


const transXYS = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
const transXYSBack = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y+180}deg) scale(${s})`
const transShadow = (hOffset, vOffset, blur, spread, r, g, b, a) => `\
${hOffset}px ${vOffset}px ${blur}px ${spread}px rgba(${r}, ${g}, ${b}, ${a})\
`
 
export default function SpringCards() {
  const offMouseShadowVals = [0, 30, 50, -10, 0, 0, 0, 0.1]
  const onMouseShadowVals  = [0, 5, 30, 5, 0, 0, 0, 0.05]

  const offMouseCardAngle = [0, 0, 1]

  const [size, setSize] = useState({x:0, y:0})
  const [cardAngle, setXYS] = useSpring(() => ({ xys: offMouseCardAngle, config: { mass: 5, tension: 350, friction: 40 } }))
  const [shadow, setShadow] = useSpring(() => ({ vals:offMouseShadowVals , config: { mass: 5, tension: 350, friction: 40 } }))
  const [flipped, setFlipped] = useState(false)

  let node = {}
  let refCallback = element => {
    if (element) {
      node=element
    }
  }

  useEffect(() => {
    setSize(node.getBoundingClientRect())
  })
  return (
    <div 
    ref={refCallback} 
    >
      <animated.div
        style= {{
          height:'200px',
          cursor: 'pointer'
        }}
        onMouseMove={({ clientX: x, clientY: y }) => {
          if(flipped == false){
            setXYS({ xys: calc(x, y, size)})
            setShadow({ vals:onMouseShadowVals })
          }
        }}
        onMouseLeave={() => {
            setFlipped(false)
            setXYS({ xys: offMouseCardAngle })
            setShadow({ vals:offMouseShadowVals })
        }}
        onClick = {({ clientX: x, clientY: y })=> {
          if(flipped == false){
            setFlipped(true)
            setXYS({ xys: calcOnClick(x,y,size) })
            setShadow({ vals:offMouseShadowVals })
          }else{
            setFlipped(false)
            setXYS({ xys: calc(x, y, size)})
            setShadow({ vals:onMouseShadowVals })
          }
        }}
      >
        <animated.div
          className="card"
          style={{ 
            transform: cardAngle.xys.interpolate(transXYS) ,
            boxShadow: shadow.vals.interpolate(transShadow),
            position: 'absolute',
            height: 200,
            width: '15rem',
            borderRadius: '20px',
            backfaceVisibility: 'hidden',
            zIndex:2
          }}
        >
          <p>Hello</p>
          <p>{flipped.toString()}</p>
        </animated.div>
        <animated.div
          className="card"
          style={{ 
            transform: cardAngle.xys.interpolate(transXYSBack) ,
            boxShadow: shadow.vals.interpolate(transShadow),
            position: 'absolute',
            height: 200,
            width: '15rem',
            borderRadius: '20px',
            backfaceVisibility: 'hidden',
            zIndex:10,
          }}
        >
          <p>{flipped.toString()}</p>
        </animated.div>
      </animated.div>
      <style jsx>{`

      root {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background: #f0f0f0;
      }

      .card {
        height: 200px;
      }

    `}</style>
    </div>
  )
}
