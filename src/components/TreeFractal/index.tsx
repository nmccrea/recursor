import React from "react"

type Translation = number
type Scale = number
type Angle = number
type Depth = number
type Color = string

interface Transformation {
  translation: Translation
  scale: Scale
  angle: Angle
}

interface RecursionBehavior {
  maxDepth: Depth
  color: Color
  transformation: Transformation
}

interface RecursionProps extends RecursionBehavior {
  currentDepth: Depth
}

const RECURSION_BEHAVIORS: Array<RecursionBehavior> = [
  {
    maxDepth: 2,
    color: "red",
    transformation: { translation: 0.6, scale: 0.4, angle: -Math.PI / 3 },
  },
  {
    maxDepth: 3,
    color: "green",
    transformation: { translation: 1, scale: 0.5, angle: -Math.PI / 6 },
  },
  {
    maxDepth: 4,
    color: "blue",
    transformation: { translation: 1, scale: 0.8, angle: 1 },
  },
]

/**
 * TODO: doc
 */
const styleFor = ({ translation, angle, scale }: Transformation) => ({
  transformOrigin: "center bottom",
  transform: [
    `translateY(-${100 * translation}%)`,
    `scale(${scale})`,
    `rotate(${angle}rad)`,
  ].join(" "),
})

const Recursion = ({
  currentDepth,
  maxDepth,
  color,
  transformation,
}: RecursionProps) => {
  if (currentDepth >= maxDepth) return null
  return (
    <div
      className={`tree depth-${currentDepth}`}
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: color,
        ...styleFor(transformation),
      }}
    >
      {RECURSION_BEHAVIORS.map((recursionBehavior, index) => (
        <Recursion
          {...recursionBehavior}
          currentDepth={currentDepth + 1}
          key={`${index}`}
        />
      ))}
    </div>
  )
}

const Root = () => (
  <div style={{ width: "10px", height: "200px", position: "relative" }}>
    <Recursion
      currentDepth={0}
      maxDepth={Infinity}
      color="black"
      transformation={{ translation: 0, scale: 1, angle: 0 }}
    />
  </div>
)

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
    <Root />
  </div>
)

export default TreeFractal
