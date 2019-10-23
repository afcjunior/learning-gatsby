import React from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { Container } from "./Layout.style"

function Layout({ children }) {
  return (
    <Container>
      <div className="content">
        <Header />
        {children}
      </div>
      <Footer />
    </Container>
  )
}

export default Layout
