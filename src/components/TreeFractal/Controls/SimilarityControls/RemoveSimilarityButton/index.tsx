import React from "react"
import { useDispatch } from "react-redux"
import { removeOne } from "../../../../../state/similarities/actions"
import { SimilarityId } from "../../../../../state/similarities/types"
import Button from "react-bootstrap/Button"

interface RemoveSimilarityButtonProps {
  similarityId: SimilarityId
}

const RemoveSimilarityButton = ({
  similarityId,
}: RemoveSimilarityButtonProps) => {
  const dispatch = useDispatch()
  return (
    <Button
      variant="danger"
      onClick={() => {
        dispatch(removeOne(similarityId))
      }}
    >
      Remove
    </Button>
  )
}

export default RemoveSimilarityButton
