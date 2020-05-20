import { EntityId } from "@reduxjs/toolkit"

export type Translation = Nominal<number, "Translation">
export type Scale = Nominal<number, "Scale">
export type Angle = Nominal<number, "Angle">
export type Depth = Nominal<number, "Depth">
export type Color = Nominal<string, "Color">

export interface BranchPatternNumericInputs {
  translation: Translation
  scale: Scale
  angle: Angle
  depth: Depth
}
export type BranchPatternNumericInputKey = keyof BranchPatternNumericInputs

export interface BranchPatternInputs extends BranchPatternNumericInputs {
  color: Color
}
export type BranchPatternInputKey = keyof BranchPatternInputs

export type BranchPatternId = Nominal<EntityId, "BranchPatternId">

export interface BranchPattern extends BranchPatternInputs {
  id: BranchPatternId
}
