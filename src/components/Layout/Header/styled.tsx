import styled from "styled-components"
import { color, typography } from "styles/utilities"
import githubLogoUrl from "images/icon-logo-github-mark.png"

export const HiddenContainer = styled.div`
  position: fixed;
  top: 1rem;
  left: 0;
  width: 100vw;
  box-sizing: border-box;
  margin: 0;
  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  visibility: hidden;

  & > * {
    visibility: visible;
  }
`

export const H1 = styled.h1`
  ${typography.fontFamilyHeading}
  color: ${color.primary};
  text-transform: uppercase;
  line-height: 1;
  margin: 0;
`

export const GithubImage = styled.div`
  background-image: url(${githubLogoUrl});
  background-size: 1.6rem 1.6rem;
  width: 1.6rem;
  height: 1.6rem;
  opacity: 0.6;
  margin: 0 1rem;

  &:hover {
    opacity: 0.8;
  }
`
