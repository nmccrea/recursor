import React from "react"
import Recursion from "../Recursion"

const FractalSource = () => (
  <div style={{ width: "10px", height: "200px", position: "relative" }}>
    <Recursion
      id="source"
      color="black"
      translation={0}
      scale={1}
      angle={0}
      depth={Infinity}
      currentDepth={0}
    />
  </div>
)

export default FractalSource
