import React from "react"
import { Provider } from "react-redux"
import { render, fireEvent, getByLabelText } from "@testing-library/react"
import { createStore, RootState } from "../../../../../state/store"
import {
  getTranslationSetterFor,
  getAngleSetterFor,
} from "../../../../../state/similarities/actions"
import {
  getTranslationSelectorFor,
  getAngleSelectorFor,
} from "../../../../../state/similarities/selectors"
import SliderInput from "."

describe("`<SliderInput />`", () => {
  it("renders correctly based on the value returned by the selector", () => {
    const state: RootState = {
      similarities: {
        ids: ["test/subject"],
        entities: {
          "test/subject": {
            id: "test/subject",
            translation: 0.1256,
            scale: 0.0353,
            angle: 0.9316,
            depth: 2,
            color: "gray",
          },
        },
      },
    }

    const { container } = render(
      <Provider store={createStore(state)}>
        <SliderInput
          selector={getAngleSelectorFor("test/subject")}
          actionCreator={getAngleSetterFor("test/subject")}
          label="Test Subject - Angle"
          min={0.422}
          max={0.744}
          step={0.001}
        />
        <SliderInput
          selector={getTranslationSelectorFor("test/subject")}
          actionCreator={getTranslationSetterFor("test/subject")}
          label="Test Subject - Translation"
          min={0.824}
          max={0.562}
          step={0.001}
        />
      </Provider>
    )

    expect(container).toMatchSnapshot()
  })

  it("responds correctly to a change event", () => {
    const state: RootState = {
      similarities: {
        ids: ["test/subject"],
        entities: {
          "test/subject": {
            id: "test/subject",
            translation: 0.1256,
            scale: 0.0353,
            angle: 0.9316,
            depth: 2,
            color: "gray",
          },
        },
      },
    }

    const { container } = render(
      <Provider store={createStore(state)}>
        <SliderInput
          selector={getTranslationSelectorFor("test/subject")}
          actionCreator={getTranslationSetterFor("test/subject")}
          label="Test Input"
          min={0}
          max={10}
          step={0.1}
        />
      </Provider>
    )

    fireEvent.change(getByLabelText(container, "Test Input"), {
      target: { value: 0.5582 },
    })

    expect(container).toMatchSnapshot()
  })
})
