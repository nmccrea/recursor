import styled from "styled-components"
import { grid, screen } from "../../../styles/utilities"

const Container = styled.div`
  padding: 0.5rem;
  box-shadow: 0 -3px 5px 2px #bbb;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow-y: auto;
`

const GlobalControlsArea = styled.div`
  padding-bottom: 0.5rem;
`

const SimilarityControlsArea = styled.div`
  display: grid;
  ${grid.columns(1)}

  ${screen.small} {
    ${grid.columns(2)}
  }

  ${screen.medium} {
    ${grid.columns(3)}
  }

  ${screen.large} {
    display: flex;
    flex-direction: column;
  }
`

export { Container, GlobalControlsArea, SimilarityControlsArea }
