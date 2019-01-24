import React from 'react'
import PropTypes from 'prop-types'
import {createGlobalStyle} from 'styled-components'
import Navbar from '../components/globals/navbar'

// import './bootstrap.min.css'
// import './layout.css'
// import '../sass/layout.scss'

const Layout = ({children}) => {
  return(
    <React.Fragment>
      <GlobalStyle />
      <Navbar />
      {children}
    </React.Fragment>
  )
}

const GlobalStyle = createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  
  body{
      font-family: 'Open Sans', sans-serif;
      color: black;
      background: #fff;
  }
`

// const Layout = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={data => (
//       <>
//         <Header siteTitle={data.site.siteMetadata.title} />
//         <div
//           style={{
//             margin: `0 auto`,
//             maxWidth: 960,
//             padding: `0px 1.0875rem 1.45rem`,
//             paddingTop: 0,
//           }}
//         >
//           {children}
//           <footer>
//             © {new Date().getFullYear()}, Built with
//             {` `}
//             <a href="https://www.gatsbyjs.org">Gatsby</a>
//           </footer>
//         </div>
//       </>
//     )}
//   />
// )

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
