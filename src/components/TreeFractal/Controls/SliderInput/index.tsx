import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { BranchPatternSelectorCreator } from "../../../../state/branchPatterns/selectors"
import { BranchPatternInputActionCreator } from "../../../../state/branchPatterns/actions"
import {
  BranchPatternId,
  BranchPatternNumericInputs,
  BranchPatternNumericInputKey,
} from "../../../../state/branchPatterns/types"

interface SliderInputProps<Key extends BranchPatternNumericInputKey> {
  branchPatternId: BranchPatternId
  selectorCreator: BranchPatternSelectorCreator<BranchPatternNumericInputs[Key]>
  actionCreator: BranchPatternInputActionCreator<Key>
  label: string
  min: number
  max: number
  step: number
}

const SliderInput = <Key extends BranchPatternNumericInputKey>({
  branchPatternId,
  selectorCreator,
  actionCreator,
  label,
  min,
  max,
  step,
}: SliderInputProps<Key>) => {
  const value = useSelector(selectorCreator(branchPatternId))
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
          dispatch(actionCreator(branchPatternId, Number(event.target.value)))
        }
      />
    </label>
  )
}

export default SliderInput
