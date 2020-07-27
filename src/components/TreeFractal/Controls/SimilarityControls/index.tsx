import React from "react"
import { degreesFromRadians, radiansFromDegrees } from "utils/unitConverters"
import { formatNumber } from "utils/valueFormatters"
import {
  getTranslationSetterFor,
  getScaleSetterFor,
  getAngleSetterFor,
  getDepthSetterFor,
} from "state/similarities/actions"
import {
  getTranslationSelectorFor,
  getScaleSelectorFor,
  getAngleSelectorFor,
  getDepthSelectorFor,
} from "state/similarities/selectors"
import { SimilarityId } from "models/similarity"
import { Container, ControlElement } from "./styled"
import RemoveSimilarityButton from "./RemoveSimilarityButton"
import SliderInput from "./SliderInput"

interface SimilarityControlsProps {
  similarityId: SimilarityId
}

const SimilarityControls = ({ similarityId }: SimilarityControlsProps) => (
  <Container>
    <div>
      <RemoveSimilarityButton similarityId={similarityId} />
    </div>

    <ControlElement>
      <SliderInput
        label="Angle"
        htmlId={`${similarityId}-angle`}
        min={-360}
        max={360}
        step={5}
        selector={getAngleSelectorFor(similarityId)}
        actionCreator={getAngleSetterFor(similarityId)}
        valueFormatter={(value) => formatNumber(value)}
        unit="°"
        // Store inputs in radians.
        valueConverters={{
          convertInput: radiansFromDegrees,
          convertOutput: degreesFromRadians,
        }}
      />
    </ControlElement>

    <ControlElement>
      <SliderInput
        label="Scale"
        htmlId={`${similarityId}-scale`}
        min={0}
        max={1.5}
        step={0.05}
        selector={getScaleSelectorFor(similarityId)}
        actionCreator={getScaleSetterFor(similarityId)}
        valueFormatter={(value) => formatNumber(value, { precision: 2 })}
        unit="x"
      />
    </ControlElement>

    <ControlElement>
      <SliderInput
        label="Translation"
        htmlId={`${similarityId}-translation`}
        min={0}
        max={2}
        step={0.05}
        selector={getTranslationSelectorFor(similarityId)}
        actionCreator={getTranslationSetterFor(similarityId)}
        valueFormatter={(value) => formatNumber(value, { precision: 2 })}
        unit="x"
      />
    </ControlElement>

    <ControlElement>
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
    </ControlElement>
  </Container>
)

export default SimilarityControls
