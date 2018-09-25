import React from 'react'
import Helmet from 'react-helmet'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
