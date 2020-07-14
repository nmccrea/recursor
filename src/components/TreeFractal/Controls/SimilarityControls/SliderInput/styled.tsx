import styled from "styled-components"
import { grid } from "../../../../../styles/utilities"

const Container = styled.div`
  display: grid;
  ${grid.columns(3)}
  align-items: stretch;
`

const Label = styled.label`
  ${grid.columnSpan(3)}
  font-size: 0.9em;
`

const Input = styled.input`
  ${grid.columnSpan(2)}
`

const Value = styled.span`
  margin-left: 0.25rem;
  font-size: 0.9em;
  justify-self: flex-end;
  white-space: nowrap;
`

const Min = styled.span`
  justify-self: flex-start;

  font-size: 0.7em;
  color: gray;
  white-space: nowrap;
`

const Max = styled.span`
  justify-self: flex-end;

  font-size: 0.7em;
  color: gray;
  white-space: nowrap;
`

const Unit = styled.span`
  font-size: 0.8em;
  font-style: italic;
  color: gray;
`

export { Container, Label, Input, Value, Min, Max, Unit }
