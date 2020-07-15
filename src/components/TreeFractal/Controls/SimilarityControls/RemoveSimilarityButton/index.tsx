import React from "react"
import { useDispatch } from "react-redux"
import { removeOne } from "state/similarities/actions"
import { SimilarityId } from "state/similarities/types"
import { ButtonDanger } from "components/parts/Button"

interface RemoveSimilarityButtonProps {
  similarityId: SimilarityId
}

const RemoveSimilarityButton = ({
  similarityId,
}: RemoveSimilarityButtonProps) => {
  const dispatch = useDispatch()
  return (
    <ButtonDanger
      onClick={() => {
        dispatch(removeOne(similarityId))
      }}
    >
      Remove
    </ButtonDanger>
  )
}

export default RemoveSimilarityButton
