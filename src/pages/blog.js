import React from "react"
import Layout from "../components/Layout/Layout"
import PropTypes from "prop-types"

function BlogPage(props) {
  return (
    <Layout>
      <h1>Blog</h1>
      <p>Aqui mostra a lista de blog posts</p>
    </Layout>
  )
}

BlogPage.propTypes = {}

export default BlogPage
