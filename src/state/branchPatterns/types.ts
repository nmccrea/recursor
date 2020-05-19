import { EntityId } from "@reduxjs/toolkit"

export type Translation = Nominal<number, "Translation">
export type Scale = Nominal<number, "Scale">
export type Angle = Nominal<number, "Angle">
export type Depth = Nominal<number, "Depth">
export type Color = Nominal<string, "Color">

export interface BranchPatternInputs {
  translation: Translation
  scale: Scale
  angle: Angle
  depth: Depth
  color: Color
}

export type BranchPatternId = Nominal<EntityId, "BranchPatternId">

export interface BranchPattern extends BranchPatternInputs {
  id: BranchPatternId
}
