import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { SimilarityInputSelector } from "state/similarities/selectors"
import { SimilarityInputActionCreator } from "state/similarities/actions"
import {
  SimilarityNumericInputs,
  SimilarityNumericInputKey,
} from "state/similarities/types"
import { Container, Label, Input, Value, Min, Max, Unit } from "./styled"
import identity from "utils/identity"

type ValueConverter = (value: number) => number

/**
 * A pair of functions for converting input values to a different representation for storage. Each
 * function must take and return a numeric value, and the functions must be inverse of each other.
 */
interface ValueConverters {
  convertInput: ValueConverter
  convertOutput: ValueConverter
}

const DEFAULT_VALUE_CONVERTERS: ValueConverters = {
  convertInput: identity,
  convertOutput: identity,
}

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
  valueConverters?: ValueConverters
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
  valueConverters,
}: SliderInputProps<Key>) => {
  let value = useSelector(selector)
  const dispatch = useDispatch()

  const { convertInput, convertOutput } =
    valueConverters || DEFAULT_VALUE_CONVERTERS
  value = value === undefined ? value : convertOutput(value)

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
          dispatch(actionCreator(convertInput(Number(event.target.value))))
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
