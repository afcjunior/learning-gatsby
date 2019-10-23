import React from "react"
import Layout from "../components/Layout/Layout"
import PropTypes from "prop-types"

function ContactPage(props) {
  return (
    <Layout>
      <h1>Contato</h1>
      <p>
        Você pode me encontrar nas redes sociais por este nome -{" "}
        <a href="https://www.twitter.com/afcjunior" target="_blank">
          @afcjunior
        </a>
        .
      </p>
    </Layout>
  )
}

ContactPage.propTypes = {}

export default ContactPage
