import React from "react"
import Layout from "../components/Layout/Layout"
import PropTypes from "prop-types"

function ContactPage(props) {
  return (
    <Layout>
      <h1>Contact</h1>
      <p>
        You can find me in social media{" "}
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
