import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { SimilarityInputSelector } from "../../../../../state/similarities/selectors"
import { SimilarityInputActionCreator } from "../../../../../state/similarities/actions"
import {
  SimilarityNumericInputs,
  SimilarityNumericInputKey,
} from "../../../../../state/similarities/types"

export interface SliderInputProps<Key extends SimilarityNumericInputKey> {
  label: string
  min: SimilarityNumericInputs[Key]
  max: SimilarityNumericInputs[Key]
  step: SimilarityNumericInputs[Key]
  selector: SimilarityInputSelector<Key>
  actionCreator: SimilarityInputActionCreator<Key>
  valueFormatter: (value?: number) => string
}

const SliderInput = <Key extends SimilarityNumericInputKey>({
  label,
  min,
  max,
  step,
  selector,
  actionCreator,
  valueFormatter,
}: SliderInputProps<Key>) => {
  const value = useSelector(selector)
  const dispatch = useDispatch()

  return (
    <label>
      <p>{label}</p>

      <input
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(event) =>
          dispatch(actionCreator(Number(event.target.value)))
        }
      />

      <p>Min: {valueFormatter(min)}</p>
      <p>Max: {valueFormatter(max)}</p>
      <p>Value: {valueFormatter(value)}</p>
    </label>
  )
}

export default SliderInput
