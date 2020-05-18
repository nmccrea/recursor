export type Translation = Nominal<number, "Translation">
export type Scale = Nominal<number, "Scale">
export type Angle = Nominal<number, "Angle">
export type Depth = Nominal<number, "Depth">
export type Color = Nominal<string, "Color">

export type BranchPatternId = Nominal<string, "BranchPatternId">

export interface NewBranchPattern {
  translation: Translation
  scale: Scale
  angle: Angle
  depth: Depth
  color: Color
}

export interface BranchPattern extends NewBranchPattern {
  id: BranchPatternId
}
