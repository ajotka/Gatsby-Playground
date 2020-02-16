import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Navigation from "../components/Navigation/navigation";

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Navigation/>
    <Link to="/page-2/">Go to page 2</Link>
  </>
)

export default IndexPage
