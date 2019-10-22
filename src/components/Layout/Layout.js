import React from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { Container } from "./Layout.style"
import PropTypes from "prop-types"

function Layout({ children }) {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  )
}

Layout.propTypes = {}

export default Layout
