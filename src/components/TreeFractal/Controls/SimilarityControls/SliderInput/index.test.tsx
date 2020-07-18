import React from "react"
import "jest-styled-components"
import { Provider } from "react-redux"
import { render, fireEvent, getByRole } from "@testing-library/react"
import { createStore, RootState } from "state/store"
import {
  getScaleSetterFor,
  getTranslationSetterFor,
} from "state/similarities/actions"
import {
  getScaleSelectorFor,
  getTranslationSelectorFor,
} from "state/similarities/selectors"
import SliderInput from "."

describe("`<SliderInput />`", () => {
  describe("rendering", () => {
    it("renders correctly based on the value returned by the selector", () => {
      const state: RootState = {
        similarities: {
          ids: ["test/subject"],
          entities: {
            "test/subject": {
              id: "test/subject",
              translation: 0.1256,
              scale: 0.0353,
              angle: Math.PI / 3,
              depth: 2,
              color: "gray",
            },
          },
        },
      }

      const { container } = render(
        <Provider store={createStore(state)}>
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
          <SliderInput
            label="Test Subject - Scale"
            htmlId="test-subject-scale"
            min={0.422}
            max={0.744}
            step={0.001}
            selector={getScaleSelectorFor("test/subject")}
            actionCreator={getScaleSetterFor("test/subject")}
            valueFormatter={jest.fn((value) => String(value))}
            unit="rad"
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
              angle: -Math.PI / 3,
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

    it("converts the output value using the provided output converter", () => {
      const state: RootState = {
        similarities: {
          ids: ["test/subject"],
          entities: {
            "test/subject": {
              id: "test/subject",
              translation: 555,
              scale: 1,
              angle: 0,
              depth: 1,
              color: "violet",
            },
          },
        },
      }
      const valueConverters = {
        convertInput: (value: number) => value * 100,
        convertOutput: (value: number) => value * 0.01,
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
            valueConverters={valueConverters}
          />
        </Provider>
      )

      expect(container).toMatchSnapshot()
    })
  })

  describe("change event", () => {
    it("responds correctly to a change event", () => {
      const store = createStore({
        similarities: {
          ids: ["test/subject"],
          entities: {
            "test/subject": {
              id: "test/subject",
              translation: 5.5,
              scale: 1,
              angle: 0,
              depth: 1,
              color: "gray",
            },
          },
        },
      })
      const { container } = render(
        <Provider store={store}>
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
        target: { value: 2.2 },
      })

      expect(store.getState()).toEqual({
        similarities: {
          ids: ["test/subject"],
          entities: {
            "test/subject": {
              id: "test/subject",
              translation: 2.2,
              scale: 1,
              angle: 0,
              depth: 1,
              color: "gray",
            },
          },
        },
      })
    })

    it("converts the input value using the provided input converter", () => {
      const store = createStore({
        similarities: {
          ids: ["test/subject"],
          entities: {
            "test/subject": {
              id: "test/subject",
              translation: 555,
              scale: 1,
              angle: 0,
              depth: 1,
              color: "violet",
            },
          },
        },
      })
      const valueConverters = {
        convertInput: (value: number) => value * 100,
        convertOutput: (value: number) => value * 0.01,
      }
      const { container } = render(
        <Provider store={store}>
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
            valueConverters={valueConverters}
          />
        </Provider>
      )

      fireEvent.change(getByRole(container, "slider"), {
        target: { value: 7.77 },
      })

      expect(store.getState()).toEqual({
        similarities: {
          ids: ["test/subject"],
          entities: {
            "test/subject": {
              id: "test/subject",
              translation: 777,
              scale: 1,
              angle: 0,
              depth: 1,
              color: "violet",
            },
          },
        },
      })
    })
  })
})
