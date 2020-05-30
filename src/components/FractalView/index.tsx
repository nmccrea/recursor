import React from "react"
import FractalSource from "./FractalSource"

const FractalView = () => (
  <div
    style={{
      width: "95vw",
      height: "70vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
    }}
  >
    <FractalSource />
  </div>
)

export default FractalView
