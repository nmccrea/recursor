import React from "react"
import { useSelector } from "react-redux"
import { selectAll } from "../../../state/branchPatterns/selectors"
import { BranchPattern, Depth } from "../../../state/branchPatterns/types"

/**
 * Generates a CSS object with styles dictated by the given branch pattern.
 */
const styleFor = ({ translation, scale, angle, color }: BranchPattern) => ({
  backgroundColor: color,
  transformOrigin: "center bottom",
  transform: [
    `translateY(-${100 * translation}%)`,
    `scale(${scale})`,
    `rotate(${angle}rad)`,
  ].join(" "),
})

interface BranchProps {
  branchPattern: BranchPattern
  currentDepth: Depth
}

const Branch = ({ branchPattern, currentDepth }: BranchProps) => {
  if (currentDepth >= branchPattern.depth) return null
  const branchPatterns = useSelector(selectAll)
  return (
    <div
      className={`tree ${branchPattern.id} depth-${currentDepth + 1}`}
      style={{
        position: "absolute",
        inset: 0,
        ...styleFor(branchPattern),
      }}
    >
      {branchPatterns.map((branchPattern) => (
        <Branch
          branchPattern={branchPattern}
          currentDepth={currentDepth + 1}
          key={`${branchPattern.id}`}
        />
      ))}
    </div>
  )
}

export default Branch
