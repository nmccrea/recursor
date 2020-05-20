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
  const domId = `${branchPatternId}/${label.toLowerCase()}`
  return (
    <>
      <label htmlFor={domId}>{label}</label>
      <input
        type="range"
        value={value}
        id={domId}
        min={min}
        max={max}
        step={step}
        onChange={(event) =>
          dispatch(actionCreator(branchPatternId, Number(event.target.value)))
        }
      />
    </>
  )
}

export default SliderInput
