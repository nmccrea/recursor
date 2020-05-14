import React from "react"

type Angle = number
type Scale = number
type Depth = number
type Color = string

interface Seed {
  angle: Angle
  scale: Scale
  color: Color
  maxDepth: Depth
}

type Seeds = Array<Seed>

interface TreeProps extends Seed {
  currentDepth: Depth
  seeds: Seeds
}

const TreeFractalRecursion = ({
  currentDepth,
  maxDepth,
  angle,
  scale,
  color,
  seeds,
}: TreeProps) => {
  if (currentDepth >= maxDepth) return null
  return (
    <div
      className="tree"
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: color,
        transformOrigin: "center bottom",
        transform: `translateY(-${
          (currentDepth && 100) || 0
        }%) scale(${scale}) rotate(${angle}rad)`,
      }}
    >
      {seeds.map((seed, index) => (
        <TreeFractalRecursion
          {...seed}
          currentDepth={currentDepth + 1}
          seeds={seeds}
          key={`${index}/${color}`}
        />
      ))}
    </div>
  )
}

const TreeFractal = () => (
  <div
    style={{
      border: "1px solid black",
      width: "95vw",
      height: "95vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
    }}
  >
    <div style={{ width: "10px", height: "200px", position: "relative" }}>
      <TreeFractalRecursion
        angle={0}
        scale={1}
        color="black"
        maxDepth={1}
        currentDepth={0}
        seeds={[
          {
            angle: -Math.PI / 3,
            scale: 0.4,
            maxDepth: 3,
            color: "rgba(255, 0, 0, 1.0)",
          },
          {
            angle: -Math.PI / 6,
            scale: 0.5,
            maxDepth: 3,
            color: "rgba(0, 255, 0, 1.0)",
          },
          {
            angle: 1,
            scale: 0.8,
            maxDepth: 8,
            color: "rgba(0, 0, 255, 1.0)",
          },
        ]}
      />
    </div>
  </div>
)

export default TreeFractal
