import React from "react"
import { useSelector } from "react-redux"
import { selectAll } from "../../../state/similarities/selectors"
import { Similarity, Depth } from "../../../state/similarities/types"

/**
 * Generates a CSS object with styles dictated by the given similarity.
 */
const styleFor = ({ translation, scale, angle, color }: Similarity) => ({
  backgroundColor: color,
  transformOrigin: "center bottom",
  transform: [
    `translateY(-${100 * translation}%)`,
    `scale(${scale})`,
    `rotate(${angle}rad)`,
  ].join(" "),
})

interface RecursionProps {
  similarity: Similarity
  currentDepth: Depth
}

const Recursion = ({ similarity, currentDepth }: RecursionProps) => {
  if (currentDepth >= similarity.depth) return null
  const similarities = useSelector(selectAll)
  return (
    <div
      className={`tree ${similarity.id} depth-${currentDepth + 1}`}
      style={{
        position: "absolute",
        inset: 0,
        ...styleFor(similarity),
      }}
    >
      {similarities.map((similarity) => (
        <Recursion
          similarity={similarity}
          currentDepth={currentDepth + 1}
          key={`${similarity.id}`}
        />
      ))}
    </div>
  )
}

export default Recursion
