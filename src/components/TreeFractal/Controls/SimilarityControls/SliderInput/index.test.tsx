import React from "react"
import "jest-styled-components"
import { Provider } from "react-redux"
import { render, fireEvent, getByRole } from "@testing-library/react"
import { createStore, RootState } from "state/store"
import {
  getTranslationSetterFor,
  getAngleSetterFor,
} from "state/similarities/actions"
import {
  getTranslationSelectorFor,
  getAngleSelectorFor,
} from "state/similarities/selectors"
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
          label="Test Subject - Angle"
          htmlId="test-subject-angle"
          min={0.422}
          max={0.744}
          step={0.001}
          selector={getAngleSelectorFor("test/subject")}
          actionCreator={getAngleSetterFor("test/subject")}
          valueFormatter={jest.fn((value) => String(value))}
          unit="rad"
        />
        <SliderInput
          label="Test Subject - Translation"
          htmlId="test-subject-translation"
          min={0.824}
          max={0.562}
          step={0.001}
          selector={getTranslationSelectorFor("test/subject")}
          actionCreator={getTranslationSetterFor("test/subject")}
          valueFormatter={jest.fn((value) => String(value))}
          unit="x"
        />
      </Provider>
    )

    expect(container).toMatchSnapshot()
  })

  it("formats the value using to the given formatter", () => {
    const state: RootState = {
      similarities: {
        ids: ["test/subject"],
        entities: {
          "test/subject": {
            id: "test/subject",
            translation: 0.6732,
            scale: 0.8592,
            angle: 0.1144,
            depth: 3,
            color: "violet",
          },
        },
      },
    }

    const { container } = render(
      <Provider store={createStore(state)}>
        <SliderInput
          label="Test Input"
          htmlId="test-input"
          min={0}
          max={10}
          step={0.1}
          selector={getTranslationSelectorFor("test/subject")}
          actionCreator={getTranslationSetterFor("test/subject")}
          valueFormatter={() => "fake formatted value"}
          unit="x"
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
          label="Test Input"
          htmlId="test-input"
          min={0}
          max={10}
          step={0.1}
          selector={getTranslationSelectorFor("test/subject")}
          actionCreator={getTranslationSetterFor("test/subject")}
          valueFormatter={jest.fn((value) => String(value))}
          unit="x"
        />
      </Provider>
    )

    fireEvent.change(getByRole(container, "slider"), {
      target: { value: 0.5582 },
    })

    expect(container).toMatchSnapshot()
  })
})
