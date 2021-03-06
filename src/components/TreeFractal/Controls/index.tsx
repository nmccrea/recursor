import React from "react"
import { useSelector } from "react-redux"
import { selectIds } from "state/similarities/selectors"
import {
  Panel,
  GlobalControlsArea,
  SimilarityControlsArea,
  Instructions,
} from "./styled"
import CreateSimilarityButton from "./CreateSimilarityButton"
import SimilarityControls from "./SimilarityControls"

const Controls = () => {
  const similarityIds = useSelector(selectIds)
  return (
    <Panel>
      <GlobalControlsArea>
        <CreateSimilarityButton />
        <Instructions>{"< Add up to 3 self-similarities"}</Instructions>
      </GlobalControlsArea>

      <SimilarityControlsArea>
        {similarityIds.map((similarityId) => (
          <SimilarityControls similarityId={similarityId} key={similarityId} />
        ))}
      </SimilarityControlsArea>
    </Panel>
  )
}

export default Controls
