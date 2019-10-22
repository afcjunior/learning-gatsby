import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

function Nav({ items = [] }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.name}>
          <Link to={item.dir}>{item.name}</Link>
        </li>
      ))}
    </ul>
  )
}

Nav.propTypes = {}

export default Nav
