import React from "react"
import styled from "styled-components"
import { useSelector } from "react-redux"
import { selectAll } from "../../../../state/similarities/selectors"
import {
  Similarity,
  Translation,
  Scale,
  Angle,
  Depth,
  Color,
} from "../../../../state/similarities/types"

interface TransformProps {
  $translation: Translation
  $scale: Scale
  $angle: Angle
  $color: Color
}

const RecursionGeometry = styled.div<TransformProps>`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;

  background-color: ${({ $color }) => $color};

  transform-origin: center bottom;
  transform: ${({ $translation, $scale, $angle }) =>
    `translateY(-${
      100 * $translation
    }%) scale(${$scale}) rotate(${$angle}rad)`};
`

interface RecursionProps extends Similarity {
  currentDepth: Depth
}

const Recursion = ({
  id,
  depth,
  currentDepth,
  translation,
  scale,
  angle,
  color,
}: RecursionProps) => {
  if (currentDepth >= depth) return null

  const similarities = useSelector(selectAll)
  return (
    <RecursionGeometry
      $translation={translation}
      $scale={scale}
      $angle={angle}
      $color={color}
      className={`similarity-${id} depth-${currentDepth + 1}`}
    >
      {similarities.map((similarity) => (
        <Recursion
          {...similarity}
          currentDepth={currentDepth + 1}
          key={similarity.id}
        />
      ))}
    </RecursionGeometry>
  )
}

export default Recursion
