import React from "react"
import GlobalStyle from "../styles/GlobalStyle"

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <>
    <GlobalStyle />
    {children}
  </>
)

export default Layout
