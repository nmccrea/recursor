import { render } from "@testing-library/react"
import "jest-styled-components"
import React from "react"
import GithubLink from "."

describe("`<GithubLink />`", () => {
  it("renders correctly", () => {
    const { container } = render(<GithubLink />)

    expect(container).toMatchSnapshot()
  })
})
