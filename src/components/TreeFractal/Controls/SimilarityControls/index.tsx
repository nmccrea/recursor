import React from "react"
import styled from "styled-components"
import { formatNumber, formatAngle } from "../../../../utils/valueFormatter"
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

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 10px;
`

const Inputs = styled.div`
  flex-grow: 1;

  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-evenly;
`

interface SimilarityControlsProps {
  similarityId: SimilarityId
}

const SimilarityControls = ({ similarityId }: SimilarityControlsProps) => (
  <Container>
    <div>
      <RemoveSimilarityButton similarityId={similarityId} />
    </div>

    <Inputs>
      <SliderInput
        label="Angle"
        htmlId={`${similarityId}-angle`}
        // `min` and `max` must both be multiples of `step`
        min={-Math.round((2 * Math.PI) / 0.0001) * 0.0001}
        max={Math.round((2 * Math.PI) / 0.0001) * 0.0001}
        step={0.0001}
        selector={getAngleSelectorFor(similarityId)}
        actionCreator={getAngleSetterFor(similarityId)}
        valueFormatter={formatAngle}
      />

      <SliderInput
        label="Scale"
        htmlId={`${similarityId}-scale`}
        min={0}
        max={2}
        step={0.05}
        selector={getScaleSelectorFor(similarityId)}
        actionCreator={getScaleSetterFor(similarityId)}
        valueFormatter={(value) => formatNumber(value, { precision: 2 })}
      />

      <SliderInput
        label="Translation"
        htmlId={`${similarityId}-translation`}
        min={0}
        max={1.5}
        step={0.05}
        selector={getTranslationSelectorFor(similarityId)}
        actionCreator={getTranslationSetterFor(similarityId)}
        valueFormatter={(value) => formatNumber(value, { precision: 2 })}
      />

      <SliderInput
        label="Depth"
        htmlId={`${similarityId}-depth`}
        min={0}
        max={8}
        step={1}
        selector={getDepthSelectorFor(similarityId)}
        actionCreator={getDepthSetterFor(similarityId)}
        valueFormatter={(value) => formatNumber(value, { precision: 0 })}
      />
    </Inputs>
  </Container>
)

export default SimilarityControls
