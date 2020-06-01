import React from "react"
import { useDispatch } from "react-redux"
import { addOne } from "../../../../state/similarities/actions"
import { SimilarityInputs } from "../../../../state/similarities/types"

/**
 * Generate a set of new similarity inputs.
 *
 * @returns A new `SimilarityInputs` object that may be added to the store.
 */
const generateNewSimilarityInputs = (): SimilarityInputs => ({
  translation: 1,
  scale: 0.9,
  angle: 1.23425,
  depth: 4,
  color: "black",
})

const AddSimilarityButton = () => {
  const dispatch = useDispatch()
  return (
    <button onClick={() => dispatch(addOne(generateNewSimilarityInputs()))}>
      Add Similarity
    </button>
  )
}

export default AddSimilarityButton