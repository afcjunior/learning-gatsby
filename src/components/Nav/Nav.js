import React from "react"
import { Link } from "gatsby"
import { NavContainer } from "./Nav.style"
import PropTypes from "prop-types"

function Nav({ items = [] }) {
  return (
    <NavContainer>
      <ul>
        {items.map(item => (
          <li key={item.name}>
            <Link activeClassName="active" to={item.dir}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </NavContainer>
  )
}

Nav.propTypes = {}

export default Nav
