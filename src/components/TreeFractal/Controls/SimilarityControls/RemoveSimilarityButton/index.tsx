import React from "react"
import { useDispatch } from "react-redux"
import { removeOne } from "../../../../../state/similarities/actions"
import { SimilarityId } from "../../../../../state/similarities/types"

interface RemoveSimilarityButtonProps {
  similarityId: SimilarityId
}

const RemoveSimilarityButton = ({
  similarityId,
}: RemoveSimilarityButtonProps) => {
  const dispatch = useDispatch()
  return (
    <button
      onClick={() => {
        dispatch(removeOne(similarityId))
      }}
    >
      Remove
    </button>
  )
}

export default RemoveSimilarityButton
