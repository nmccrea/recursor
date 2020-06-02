import React from "react"
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

/**
 * Generates a CSS object with styles dictated by the given similarity.
 */
const styleFor = (
  translation: Translation,
  scale: Scale,
  angle: Angle,
  color: Color
) => ({
  backgroundColor: color,
  transformOrigin: "center bottom",
  transform: [
    `translateY(-${100 * translation}%)`,
    `scale(${scale})`,
    `rotate(${angle}rad)`,
  ].join(" "),
})

interface RecursionProps extends Similarity {
  currentDepth: Depth
}

const Recursion = ({
  id,
  translation,
  scale,
  angle,
  depth,
  color,
  currentDepth,
}: RecursionProps) => {
  if (currentDepth >= depth) return null
  const similarities = useSelector(selectAll)
  return (
    <div
      className={`tree ${id} depth-${currentDepth + 1}`}
      style={{
        position: "absolute",
        inset: 0,
        ...styleFor(translation, scale, angle, color),
      }}
    >
      {similarities.map((similarity) => (
        <Recursion
          {...similarity}
          currentDepth={currentDepth + 1}
          key={similarity.id}
        />
      ))}
    </div>
  )
}

export default Recursion
