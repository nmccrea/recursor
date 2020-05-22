import React from "react"
import Branch from "../Branch"

const Trunk = () => (
  <div style={{ width: "10px", height: "200px", position: "relative" }}>
    <Branch
      currentDepth={0}
      similarity={{
        id: "trunk",
        color: "black",
        translation: 1,
        scale: 1,
        angle: 0,
        depth: Infinity,
      }}
    />
  </div>
)

export default Trunk
