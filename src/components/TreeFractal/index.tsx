import React from "react"
import styled from "styled-components"
import FractalView from "./FractalView"
import Controls from "./Controls"

const Container = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;

  display: grid;
  grid-template-rows: 2fr 1fr;
  grid-template-columns: 1fr;
`

const TreeFractal = () => {
  return (
    <Container>
      <FractalView />
      <Controls />
    </Container>
  )
}

export default TreeFractal
