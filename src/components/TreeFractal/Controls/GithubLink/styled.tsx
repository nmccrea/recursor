import styled from "styled-components"
import githubLogoUrl from "images/icon-logo-github-mark.png"

export const GithubImage = styled.div`
  background-image: url(${githubLogoUrl});
  background-size: 1.6rem 1.6rem;
  width: 1.6rem;
  height: 1.6rem;
  opacity: 0.6;
  margin-right: 0.5rem;

  &:hover {
    opacity: 0.8;
  }
`
