import React from "react"
import styled from "styled-components"
import Recursion from "../Recursion"

const RootGeometry = styled.div`
  width: 1vh;
  height: 15vh;
  position: relative;
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
