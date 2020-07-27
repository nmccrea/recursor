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

const DEFAULT_SIMILARITY_INPUTS: SimilarityInputs = {
  translation: 1,
  scale: 0.75,
  angle: 0,
  depth: 5,
  color: "black",
}

/**
 * Creates a new similarity object with the given similarity ID.
 *
 * @param similarityId - The ID to give the new similarity.
 *
 * @returns The new similarity object.
 */
const create = (similarityId: SimilarityId): Similarity => ({
  ...DEFAULT_SIMILARITY_INPUTS,
  id: similarityId,
})

export default { create }
