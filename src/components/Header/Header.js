import React from "react"
import Nav from "../Nav/Nav"
import { Link } from "gatsby"
import { navigation } from "../../constants/navigation"
import { HeaderContainer } from "./Header.style"

import PropTypes from "prop-types"

function Header({ title = "From the Front" }) {
  return (
    <HeaderContainer>
      <h1>
        <Link to="/">{title}</Link>
      </h1>
      <Nav items={navigation} />
    </HeaderContainer>
  )
}

Header.propTypes = {}

export default Header
