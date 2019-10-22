import React from "react"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import PropTypes from "prop-types"

function BlogPage(props) {
  return (
    <div>
      <Header />
      <h1>Blog</h1>
      <p>Aqui mostra a lista de blog posts</p>
      <Footer />
    </div>
  )
}

BlogPage.propTypes = {}

export default BlogPage
