import React from "react"
import { ControlsContainer } from "./styled"
import FractalView from "./FractalView"
import Controls from "./Controls"

const TreeFractal = () => {
  return (
    <>
      <FractalView />

      <ControlsContainer>
        <Controls />
      </ControlsContainer>
    </>
  )
}

export default TreeFractal
