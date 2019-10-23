import React from "react"
import Layout from "../components/Layout/Layout"

import { Link } from "gatsby"
import PropTypes from "prop-types"

function IndexPage(props) {
  return (
    <Layout>
      <h1>Bem vindo</h1>
      <h2>Olá! Meu nome é Adalberto, e este é o meu site.</h2>
      <p>
        Quer entrar em contato? <Link to="/contact">Clica aqui</Link>.
      </p>
    </Layout>
  )
}

IndexPage.propTypes = {}

export default IndexPage
