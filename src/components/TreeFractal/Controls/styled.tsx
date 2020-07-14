import styled from "styled-components"
import { screen } from "../../../styles/utilities"

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
  grid-template-columns: minmax(0, 1fr);

  ${screen.small} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${screen.medium} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  ${screen.large} {
    display: flex;
    flex-direction: column;
  }
`

export { Container, GlobalControlsArea, SimilarityControlsArea }
