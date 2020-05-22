import React from "react"
import {
  getTranslationSetterFor,
  getScaleSetterFor,
  getAngleSetterFor,
  getDepthSetterFor,
} from "../../../../state/similarities/actions"
import {
  getTranslationSelectorFor,
  getScaleSelectorFor,
  getAngleSelectorFor,
  getDepthSelectorFor,
} from "../../../../state/similarities/selectors"
import { SimilarityId } from "../../../../state/similarities/types"
import RemoveSimilarityButton from "./RemoveSimilarityButton"
import SliderInput from "./SliderInput"

interface SimilarityControlsProps {
  similarityId: SimilarityId
}

const SimilarityControls = ({ similarityId }: SimilarityControlsProps) => (
  <div style={{ display: "flex" }}>
    <p>{similarityId}</p>

    <RemoveSimilarityButton similarityId={similarityId} />

    <SliderInput
      selector={getTranslationSelectorFor(similarityId)}
      actionCreator={getTranslationSetterFor(similarityId)}
      label="Translation"
      min={0}
      max={1.5}
      step={0.05}
    />

    <SliderInput
      selector={getScaleSelectorFor(similarityId)}
      actionCreator={getScaleSetterFor(similarityId)}
      label="Scale"
      min={0}
      max={2}
      step={0.05}
    />

    <SliderInput
      selector={getAngleSelectorFor(similarityId)}
      actionCreator={getAngleSetterFor(similarityId)}
      label="Angle"
      // `min` and `max` must both be multiples of `step`
      min={-Math.round((2 * Math.PI) / 0.0001) * 0.0001}
      max={Math.round((2 * Math.PI) / 0.0001) * 0.0001}
      step={0.0001}
    />

    <SliderInput
      selector={getDepthSelectorFor(similarityId)}
      actionCreator={getDepthSetterFor(similarityId)}
      label="Depth"
      min={0}
      max={8}
      step={1}
    />
  </div>
)

export default SimilarityControls
