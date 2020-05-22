import { EntityId } from "@reduxjs/toolkit"

export type Translation = Nominal<number, "Translation">
export type Scale = Nominal<number, "Scale">
export type Angle = Nominal<number, "Angle">
export type Depth = Nominal<number, "Depth">
export type Color = Nominal<string, "Color">

export interface SimilarityNumericInputs {
  translation: Translation
  scale: Scale
  angle: Angle
  depth: Depth
}
export type SimilarityNumericInputKey = keyof SimilarityNumericInputs

export interface SimilarityInputs extends SimilarityNumericInputs {
  color: Color
}
export type SimilarityInputKey = keyof SimilarityInputs

export type SimilarityId = Nominal<EntityId, "SimilarityId">

export interface Similarity extends SimilarityInputs {
  id: SimilarityId
}
