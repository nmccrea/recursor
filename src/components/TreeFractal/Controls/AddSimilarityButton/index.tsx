import React from "react"
import { useDispatch } from "react-redux"
import { addOne } from "state/similarities/actions"
import { SimilarityInputs } from "state/similarities/types"
import { ButtonPrimary } from "components/parts/Button"

/**
 * Generate a set of new similarity inputs.
 *
 * @returns A new `SimilarityInputs` object that may be added to the store.
 */
const generateNewSimilarityInputs = (): SimilarityInputs => ({
  translation: 1,
  scale: 0.75,
  angle: 0,
  depth: 5,
  color: "black",
})

const AddSimilarityButton = () => {
  const dispatch = useDispatch()
  return (
    <ButtonPrimary
      onClick={() => dispatch(addOne(generateNewSimilarityInputs()))}
    >
      Add
    </ButtonPrimary>
  )
}

export default AddSimilarityButton
