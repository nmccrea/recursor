import React from "react"
import { useDispatch } from "react-redux"
import { removeOne } from "../../../../../state/branchPatterns/actions"
import { BranchPatternId } from "../../../../../state/branchPatterns/types"

interface RemoveBranchPatternButtonProps {
  branchPatternId: BranchPatternId
}

const RemoveBranchPatternButton = ({
  branchPatternId,
}: RemoveBranchPatternButtonProps) => {
  const dispatch = useDispatch()
  return (
    <button
      onClick={() => {
        dispatch(removeOne(branchPatternId))
      }}
    >
      Remove
    </button>
  )
}

export default RemoveBranchPatternButton
