import React from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import PropTypes from "prop-types"

function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

Layout.propTypes = {}

export default Layout
