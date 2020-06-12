import React from "react"
import styled from "styled-components"
import FractalSource from "./FractalSource"

const Viewport = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const FractalView = () => (
  <Viewport>
    <FractalSource />
  </Viewport>
)

export default FractalView
