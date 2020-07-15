import styled from "styled-components"
import { screen } from "styles/utilities"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 1rem;

  ${screen.large} {
    padding: 0.5rem 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

const ControlElement = styled.div`
  padding: 0.5rem 0;

  & + div {
    border-top: 1px solid lightgray;
  }

  ${screen.large} {
    padding: 0 0.5rem;

    & + div {
      border-top: unset;
      border-left: 1px solid lightgray;
    }
  }
`

export { Container, ControlElement }
