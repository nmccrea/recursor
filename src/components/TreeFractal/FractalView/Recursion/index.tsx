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

interface RecursionGeometryProps {
  $translation: Translation
  $scale: Scale
  $angle: Angle
  $color: Color
}

// Use inline styles via `attrs()` for transform to avoid spamming new `styled-components` styles.
// See https://github.com/styled-components/styled-components/issues/1212#issuecomment-461134678
const RecursionGeometry = styled.div.attrs<RecursionGeometryProps>(
  ({ $translation, $scale, $angle, $color }) => ({
    style: {
      backgroundColor: $color,
      transform: `translateY(-${
        100 * $translation
      }%) scale(${$scale}) rotate(${$angle}rad)`,
    },
  })
)<RecursionGeometryProps>`
  transform-origin: center bottom;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
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
