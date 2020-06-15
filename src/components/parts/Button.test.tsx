import React from "react"
import { render } from "@testing-library/react"
import { Button, ButtonPrimary, ButtonDanger } from "./Button"

describe("`<Button />`", () => {
  it("renders correctly", () => {
    const { container } = render(<Button />)

    expect(container).toMatchSnapshot()
  })
})

describe("`<ButtonPrimary />`", () => {
  it("renders correctly", () => {
    const { container } = render(<ButtonPrimary />)

    expect(container).toMatchSnapshot()
  })
})

describe("`<ButtonDanger />`", () => {
  it("renders correctly", () => {
    const { container } = render(<ButtonDanger />)

    expect(container).toMatchSnapshot()
  })
})
