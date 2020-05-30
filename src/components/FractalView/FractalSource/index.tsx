import React from "react"
import Recursion from "../Recursion"

const FractalSource = () => (
  <div style={{ width: "10px", height: "200px", position: "relative" }}>
    <Recursion
      currentDepth={0}
      similarity={{
        id: "source",
        color: "black",
        translation: 1,
        scale: 1,
        angle: 0,
        depth: Infinity,
      }}
    />
  </div>
)

export default FractalSource
