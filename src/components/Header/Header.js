import React from "react"
import Nav from "../Nav/Nav"
import { Link, graphql, useStaticQuery } from "gatsby"
import { navigation } from "../../constants/navigation"
import { HeaderContainer } from "./Header.style"

import PropTypes from "prop-types"

function Header(props) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <HeaderContainer>
      <h1>
        <Link to="/">{site.siteMetadata.title}</Link>
      </h1>
      <Nav items={navigation} />
    </HeaderContainer>
  )
}

Header.propTypes = {}

export default Header
