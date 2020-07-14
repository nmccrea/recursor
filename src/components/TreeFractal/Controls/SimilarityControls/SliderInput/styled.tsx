import styled from "styled-components"

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: stretch;
`

const Label = styled.label`
  grid-column: span 3 / span 3;

  font-size: 0.9em;
`

const Input = styled.input`
  grid-column: span 2 / span 2;
`

const Value = styled.span`
  grid-column: span 1 / span 1;

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
