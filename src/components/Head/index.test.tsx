import { render } from "@testing-library/react"
import React from "react"
import { Helmet } from "react-helmet"
import Head from "."

describe("`<Head />`", () => {
  it("renders with the correct `react-helmet` state", () => {
    render(<Head title={"Test Title"} />)

    expect(Helmet.peek()).toMatchSnapshot()
  })
})
