import React from "react"
import styled from "styled-components"
import { useSelector } from "react-redux"
import { selectIds } from "../../../state/similarities/selectors"
import GlobalControls from "./GlobalControls"
import SimilarityControls from "./SimilarityControls"

const Container = styled.div`
  padding: 0.5rem;
  box-shadow: 0 -3px 5px 2px #bbb;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow-y: auto;
`

const Controls = () => {
  const similarityIds = useSelector(selectIds)
  return (
    <Container>
      <GlobalControls />

      {similarityIds.map((similarityId) => (
        <SimilarityControls similarityId={similarityId} key={similarityId} />
      ))}
    </Container>
  )
}

export default Controls
