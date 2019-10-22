import React from "react"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import PropTypes from "prop-types"

function ContactPage(props) {
  return (
    <div>
      <Header />
      <h1>Contact</h1>
      <p>
        You can find me in social media{" "}
        <a href="https://www.twitter.com/afcjunior" target="_blank">
          @afcjunior
        </a>
        .
      </p>
      <Footer />
    </div>
  )
}

ContactPage.propTypes = {}

export default ContactPage
