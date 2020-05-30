import React from "react"
import { useSelector } from "react-redux"
import AddSimilarityButton from "./AddSimilarityButton"
import SimilarityControls from "./SimilarityControls"
import { selectIds } from "../../state/similarities/selectors"

const Controls = () => {
  const similarityIds = useSelector(selectIds)
  return (
    <>
      <AddSimilarityButton />
      {similarityIds.map((similarityId) => (
        <SimilarityControls similarityId={similarityId} key={similarityId} />
      ))}
    </>
  )
}

export default Controls
