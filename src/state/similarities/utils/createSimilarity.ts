import { Similarity, SimilarityInputs, SimilarityId } from "../types"

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
export default (similarityId: SimilarityId): Similarity => ({
  ...DEFAULT_SIMILARITY_INPUTS,
  id: similarityId,
})
