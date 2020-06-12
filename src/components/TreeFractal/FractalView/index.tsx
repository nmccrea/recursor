import React from "react"
import styled from "styled-components"
import FractalRoot from "./FractalRoot"

const Viewport = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const FractalView = () => (
  <Viewport>
    <FractalRoot />
  </Viewport>
)

export default FractalView
