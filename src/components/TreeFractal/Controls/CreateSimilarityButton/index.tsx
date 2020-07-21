import React from "react"
import { useDispatch } from "react-redux"
import { createOne } from "state/similarities/actions"
import { ButtonPrimary } from "components/parts/Button"

const CreateSimilarityButton = () => {
  const dispatch = useDispatch()
  return (
    <ButtonPrimary onClick={() => dispatch(createOne())}>Add</ButtonPrimary>
  )
}

export default CreateSimilarityButton
