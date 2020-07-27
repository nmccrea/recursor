import styled from "styled-components"
import { grid, screen } from "styles/utilities"
import { Panel as PanelComponent } from "components/parts/Panel"

const Panel = styled(PanelComponent)`
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow-y: auto;
`

const GlobalControlsArea = styled.div`
  flex-shrink: 0;
  padding-bottom: 0.5rem;
  display: flex;
  align-items: center;
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

const Instructions = styled.span`
  margin-left: 1em;
  margin-right: auto;
`

export { Panel, GlobalControlsArea, SimilarityControlsArea, Instructions }
