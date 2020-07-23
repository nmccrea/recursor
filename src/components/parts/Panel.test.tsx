import { render } from "@testing-library/react"
import "jest-styled-components"
import React from "react"
import { Panel } from "./Panel"

describe("`<Panel />`", () => {
  it("renders correctly", () => {
    const { container } = render(<Panel>TEST CONTENT</Panel>)

    expect(container).toMatchSnapshot()
  })
})
