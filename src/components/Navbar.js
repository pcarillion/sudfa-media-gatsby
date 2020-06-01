import React, {useState} from 'react'
import {graphql, useStaticQuery} from 'gatsby'



// plugins
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Img from 'gatsby-image'
import {FaFacebook, FaTwitter, FaAlignCenter} from 'react-icons/fa'


// js
import links from '../constants/Links'

// css
import styles from '../css/navbar.module.css'


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

    // nav menu on mobile version

    const [isOpen, setNav] = useState(false)

    const toggleNav = () => {
        setNav(isOPen => !isOpen)
    }

    console.log(isOpen)

    return (
        <nav className="full-screen-width column-evenly-center">
            <div className='row-between-center full-width'>
                <div className={styles.logoDiv}>
                    <Img fluid={contentfulPresentation.logo.fluid} alt="sudfa logo"/>
                </div>
                <div className={styles.mainTitles}>
                    <h1 className={styles.mainTitle}>{site.siteMetadata.title}</h1>
                    <p className={styles.mainDescription}>{site.siteMetadata.description}</p>
                </div>
                <div className={styles.socialMediaDiv}>
                    <a className={styles.iconLink} href="https://www.facebook.com/Sudfa-%D8%B5%D8%AF%D9%81%D8%A9-2268469196753720/?ref=page_internal" target="_blank" rel="noreferrer">
                        <FaFacebook className={styles.icon}/>
                    </a>
                    {/* <FaTwitter className={styles.icon}/> */}
                    <a href="https://blogs.mediapart.fr/sudfa" target="_blank" rel="noreferrer">
                        <div className={styles.mediapart}></div>
                    </a>
                </div>
            </div>
            <div className={styles.navMenu}>
                <button 
                        type="button" 
                        className={styles.logoBtn}
                        onClick={toggleNav}>
                        <FaAlignCenter className={styles.logoIcon}/>
                </button>
                <ul className={isOpen?`${styles.navLinksToggled}`:`${styles.navLinks} ${styles.hiddenLinks}`}>
                    {links.map((item, i) => {
                        return (<li key={i} className={styles.navLink}>
                        <AniLink paintDrip hex="black" duration={0.8} to={item.path}>{item.text}</AniLink>
                        </li>)
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
