import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { SimilarityInputSelector } from "../../../../../state/similarities/selectors"
import { SimilarityInputActionCreator } from "../../../../../state/similarities/actions"
import {
  SimilarityNumericInputs,
  SimilarityNumericInputKey,
} from "../../../../../state/similarities/types"
import styled from "styled-components"

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: stretch;
`

const Label = styled.label`
  grid-column: span 3 / span 3;

  font-size: 0.9em;
`

const Input = styled.input`
  grid-column: span 2 / span 2;
`

const Value = styled.span`
  grid-column: span 1 / span 1;

  margin-left: 0.25rem;
  font-size: 0.9em;
  justify-self: flex-end;
  white-space: nowrap;
`

const Min = styled.span`
  justify-self: flex-start;

  font-size: 0.7em;
  color: gray;
  white-space: nowrap;
`

const Max = styled.span`
  justify-self: flex-end;

  font-size: 0.7em;
  color: gray;
  white-space: nowrap;
`

const Unit = styled.span`
  font-size: 0.8em;
  font-style: italic;
  color: gray;
`

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
