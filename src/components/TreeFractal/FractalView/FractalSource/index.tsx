import React from "react"
import styled from "styled-components"
import Recursion from "../Recursion"

const SourceGeometry = styled.div`
  width: 6px;
  height: 120px;
  position: relative;
  transform: translateY(100%);
`

const FractalSource = () => (
  <SourceGeometry>
    <Recursion
      id="source"
      color="black"
      translation={0}
      scale={1}
      angle={0}
      depth={1}
      currentDepth={0}
    />
  </SourceGeometry>
)

export default FractalSource
