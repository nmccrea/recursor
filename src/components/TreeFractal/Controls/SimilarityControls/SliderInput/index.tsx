import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { SimilarityInputSelector } from "../../../../../state/similarities/selectors"
import { SimilarityInputActionCreator } from "../../../../../state/similarities/actions"
import {
  SimilarityNumericInputs,
  SimilarityNumericInputKey,
} from "../../../../../state/similarities/types"
import { Container, Label, Input, Value, Min, Max, Unit } from "./styled"

export interface SliderInputProps<Key extends SimilarityNumericInputKey> {
  label: string
  htmlId: string
  min: SimilarityNumericInputs[Key]
  max: SimilarityNumericInputs[Key]
  step: SimilarityNumericInputs[Key]
  selector: SimilarityInputSelector<Key>
  actionCreator: SimilarityInputActionCreator<Key>
  valueFormatter: (value?: number) => string
  unit: string
}

const SliderInput = <Key extends SimilarityNumericInputKey>({
  label,
  htmlId,
  min,
  max,
  step,
  selector,
  actionCreator,
  valueFormatter,
  unit,
}: SliderInputProps<Key>) => {
  const value = useSelector(selector)
  const dispatch = useDispatch()

  return (
    <Container>
      <Label htmlFor={htmlId}>{label}</Label>

      <Input
        id={htmlId}
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(event) =>
          dispatch(actionCreator(Number(event.target.value)))
        }
      />

      <Value>
        <output htmlFor={htmlId}>{valueFormatter(value)}</output>
        <Unit>&nbsp;{unit}</Unit>
      </Value>

      <Min>{valueFormatter(min)}</Min>
      <Max>{valueFormatter(max)}</Max>
    </Container>
  )
}

export default SliderInput
