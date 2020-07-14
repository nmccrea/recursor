import React from "react"
import { Container } from "./styled"
import FractalView from "./FractalView"
import Controls from "./Controls"

const TreeFractal = () => {
  return (
    <Container>
      <FractalView />
      <Controls />
    </Container>
  )
}

export default TreeFractal
