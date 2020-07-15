import React from "react"
import { useSelector } from "react-redux"
import { selectIds } from "state/similarities/selectors"
import { Container, GlobalControlsArea, SimilarityControlsArea } from "./styled"
import AddSimilarityButton from "./AddSimilarityButton"
import SimilarityControls from "./SimilarityControls"

const Controls = () => {
  const similarityIds = useSelector(selectIds)
  return (
    <Container>
      <GlobalControlsArea>
        <AddSimilarityButton />
      </GlobalControlsArea>

      <SimilarityControlsArea>
        {similarityIds.map((similarityId) => (
          <SimilarityControls similarityId={similarityId} key={similarityId} />
        ))}
      </SimilarityControlsArea>
    </Container>
  )
}

export default Controls
