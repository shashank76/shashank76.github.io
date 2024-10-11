import React from 'react'
import AnimatedCursor from "react-animated-cursor"

const AnimateCursor = () => {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: '#fff'
        }}
        outerStyle={{
            border: '1px solid #000'
        }}
      />
    </>
  )
}

export default AnimateCursor
