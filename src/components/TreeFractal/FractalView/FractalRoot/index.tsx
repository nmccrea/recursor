import React from "react"
import styled from "styled-components"
import Recursion from "../Recursion"

const RootGeometry = styled.div`
  width: 6px;
  height: 120px;
  position: relative;
  transform: translateY(100%);
`

const FractalRoot = () => (
  <RootGeometry>
    <Recursion
      id="root"
      color="black"
      translation={0}
      scale={1}
      angle={0}
      depth={0}
      currentDepth={0}
    />
  </RootGeometry>
)

export default FractalRoot
