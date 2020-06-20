import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => children

export default Layout
