export type Translation = Nominal<number, "Translation">
export type Scale = Nominal<number, "Scale">
export type Angle = Nominal<number, "Angle">
export type Depth = Nominal<number, "Depth">
export type Color = Nominal<string, "Color">

export interface Transformation {
  translation: Translation
  scale: Scale
  angle: Angle
}

export type RecursionBehaviorId = Nominal<string, "RecursionBehaviorId">

export interface RecursionBehavior extends Transformation {
  id: RecursionBehaviorId
  depth: Depth
  color: Color
}
