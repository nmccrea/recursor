import React from "react"
import {
  getTranslationSetterFor,
  getScaleSetterFor,
  getAngleSetterFor,
  getDepthSetterFor,
} from "../../../../state/branchPatterns/actions"
import {
  getTranslationSelectorFor,
  getScaleSelectorFor,
  getAngleSelectorFor,
  getDepthSelectorFor,
} from "../../../../state/branchPatterns/selectors"
import { BranchPatternId } from "../../../../state/branchPatterns/types"
import RemoveBranchPatternButton from "./RemoveBranchPatternButton"
import SliderInput from "./SliderInput"

interface BranchPatternControlsProps {
  branchPatternId: BranchPatternId
}

const BranchPatternControls = ({
  branchPatternId,
}: BranchPatternControlsProps) => (
  <div style={{ display: "flex" }}>
    <p>{branchPatternId}</p>

    <RemoveBranchPatternButton branchPatternId={branchPatternId} />

    <SliderInput
      selector={getTranslationSelectorFor(branchPatternId)}
      actionCreator={getTranslationSetterFor(branchPatternId)}
      label="Translation"
      min={0}
      max={1.5}
      step={0.05}
    />

    <SliderInput
      selector={getScaleSelectorFor(branchPatternId)}
      actionCreator={getScaleSetterFor(branchPatternId)}
      label="Scale"
      min={0}
      max={2}
      step={0.05}
    />

    <SliderInput
      selector={getAngleSelectorFor(branchPatternId)}
      actionCreator={getAngleSetterFor(branchPatternId)}
      label="Angle"
      // `min` and `max` must both be multiples of `step`
      min={-Math.round((2 * Math.PI) / 0.0001) * 0.0001}
      max={Math.round((2 * Math.PI) / 0.0001) * 0.0001}
      step={0.0001}
    />

    <SliderInput
      selector={getDepthSelectorFor(branchPatternId)}
      actionCreator={getDepthSetterFor(branchPatternId)}
      label="Depth"
      min={0}
      max={8}
      step={1}
    />
  </div>
)

export default BranchPatternControls
