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
import { screen } from "../../../../styles/utilities"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 1rem;

  ${screen.large} {
    padding: 0.5rem 0;
    flex-direction: row;
    align-items: center;
  }
`

const ControlContainer = styled.div`
  padding: 0.5rem 0;

  & + div {
    border-top: 1px solid lightgray;
  }

  ${screen.large} {
    padding: 0 0.5rem;

    & + div {
      border-top: unset;
      border-left: 1px solid lightgray;
    }
  }
`

interface SimilarityControlsProps {
  similarityId: SimilarityId
}

const SimilarityControls = ({ similarityId }: SimilarityControlsProps) => (
  <Container>
    <div>
      <RemoveSimilarityButton similarityId={similarityId} />
    </div>

    <ControlContainer>
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
        unit="rad"
      />
    </ControlContainer>

    <ControlContainer>
      <SliderInput
        label="Scale"
        htmlId={`${similarityId}-scale`}
        min={0}
        max={2}
        step={0.05}
        selector={getScaleSelectorFor(similarityId)}
        actionCreator={getScaleSetterFor(similarityId)}
        valueFormatter={(value) => formatNumber(value, { precision: 2 })}
        unit="x"
      />
    </ControlContainer>

    <ControlContainer>
      <SliderInput
        label="Translation"
        htmlId={`${similarityId}-translation`}
        min={0}
        max={1.5}
        step={0.05}
        selector={getTranslationSelectorFor(similarityId)}
        actionCreator={getTranslationSetterFor(similarityId)}
        valueFormatter={(value) => formatNumber(value, { precision: 2 })}
        unit="x"
      />
    </ControlContainer>

    <ControlContainer>
      <SliderInput
        label="Depth"
        htmlId={`${similarityId}-depth`}
        min={0}
        max={8}
        step={1}
        selector={getDepthSelectorFor(similarityId)}
        actionCreator={getDepthSetterFor(similarityId)}
        valueFormatter={(value) => formatNumber(value, { precision: 0 })}
        unit="x"
      />
    </ControlContainer>
  </Container>
)

export default SimilarityControls
