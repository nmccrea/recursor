import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { BranchPatternInputSelector } from "../../../../../state/branchPatterns/selectors"
import { BranchPatternInputActionCreator } from "../../../../../state/branchPatterns/actions"
import {
  BranchPatternNumericInputs,
  BranchPatternNumericInputKey,
} from "../../../../../state/branchPatterns/types"

export interface SliderInputProps<Key extends BranchPatternNumericInputKey> {
  selector: BranchPatternInputSelector<Key>
  actionCreator: BranchPatternInputActionCreator<Key>
  label: string
  min: BranchPatternNumericInputs[Key]
  max: BranchPatternNumericInputs[Key]
  step: BranchPatternNumericInputs[Key]
}

const SliderInput = <Key extends BranchPatternNumericInputKey>({
  selector,
  actionCreator,
  label,
  min,
  max,
  step,
}: SliderInputProps<Key>) => {
  const value = useSelector(selector)
  const dispatch = useDispatch()

  return (
    <label>
      {label}

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
    </label>
  )
}

export default SliderInput
