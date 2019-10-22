import React from "react"
import PropTypes from "prop-types"

function Footer({ creator = "Adalberto Camacho Jr", year = "2019" }) {
  return (
    <footer>
      <p>
        Created by {creator} © {year}.
      </p>
    </footer>
  )
}

Footer.propTypes = {}

export default Footer
