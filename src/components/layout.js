import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
   
    
      <div className="global-wrapper" data-is-root-path={isHomePage}>

       <Navbar/>
       <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <header className="global-header">
        {isHomePage ? (
          <h1 className="text-6xl font-black">
            <Link to="/">{parse(title)}</Link>
          </h1>
        ) : (
          <Link className="text-gray-400 hover:text-gray-500" to="/">
            {title}
          </Link>
        )}
      </header>

      <main>{children}</main>
      </div>
<Footer/>

    </div>
  )
}

export default Layout
