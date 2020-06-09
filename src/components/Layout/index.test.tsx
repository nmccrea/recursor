import React from "react"
import { Provider } from "react-redux"
import { render } from "@testing-library/react"
import { createStore } from "../../state/store"
import Layout from "."

describe("`<Layout />`", () => {
  it("renders correctly", () => {
    const { container } = render(
      <Provider store={createStore()}>
        <Layout>
          <p>Test Content</p>
        </Layout>
      </Provider>
    )

    expect(container).toMatchSnapshot()
  })
})
