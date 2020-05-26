import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

import styles from '../css/navbar.module.css'


// plugins
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Img from 'gatsby-image'


// js
import links from '../constants/Links'


// data

const getData = graphql`
    query {
        site{
            siteMetadata{
                title
                description
            }
        }
        contentfulPresentation{logo{fluid{...GatsbyContentfulFluid}}}
      }
`

const Navbar = () => {

    const {site, contentfulPresentation} = useStaticQuery(getData);

    console.log(site)

    return (
        <nav className="full-screen-width column-evenly-center">
            <div className='row-between-center full-width'>
                <div className={styles.logoDiv}>
                    <Img fluid={contentfulPresentation.logo.fluid} alt="sudfa logo"/>
                </div>
                <div className="column-evenly-center">
                    <h1 className={styles.mainTitle}>{site.siteMetadata.title}</h1>
                    <p className={styles.mainDescription}>{site.siteMetadata.description}</p>
                </div>
                <div className={styles.socialMediaDiv}>Social Media</div>
            </div>
            <div className={styles.navMenu}>
                <ul className='row-evenly-center full-width list-no-dec full-width'>
                    {links.map((item, i) => {
                        return (<li key={i} className={styles.navLink}>
                        <AniLink paintDrip hex="black" duration={0.5} to={item.path}>{item.text}</AniLink>
                        </li>)
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
