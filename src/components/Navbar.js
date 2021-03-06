import React, {useState, useEffect, useRef} from 'react'
import {graphql, useStaticQuery} from 'gatsby'



// plugins
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Img from 'gatsby-image'
import {FaFacebook, FaTwitter, FaAlignCenter} from 'react-icons/fa'


// js
import links from '../constants/Links'
// import '../script/script'

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

    // nav menu on mobile version

    const [isOpen, setNav] = useState(false)

    const toggleNav = () => {
        setNav(isOPen => !isOpen)
    }


    // stick nav bar

    const [isSticky, setSticky] = useState(false);
    const ref1 = useRef(null);
    const ref2 = useRef(null)
    // const handleScroll = () => {
    //     console.log(ref1)
    //     console.log(ref2)
    //     if (ref1.current) {
    //         if (ref2.current.getBoundingClientRect().bottom >= 0){
    //             setSticky(false)
    //         } else if (ref2.current.getBoundingClientRect().bottom < 0){
    //             setSticky(true)
    //         }
    //     }
    // };

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //     window.removeEventListener('scroll', () => handleScroll);
    //     };
    // }, []);

    return (
        <nav className="full-screen-width column-evenly-center" ref={ref2} >
            <div className='row-between-center full-width' >
                <div className={styles.logoDiv}>
                    <AniLink paintDrip hex="black" duration={0.8} to='/'>
                        <Img fluid={contentfulPresentation.logo.fluid} alt="sudfa logo"/>
                    </AniLink>
                </div>
                <AniLink paintDrip hex="black" duration={0.8} to='/' className={styles.mainTitles}>
                    <h1 className={styles.mainTitle}>{site.siteMetadata.title}</h1>
                    <p className={styles.mainDescription}>{site.siteMetadata.description}</p>
                </AniLink>
                <div className={styles.socialMediaAndContact}>
                    <div className={styles.socialMediaDiv}>
                        <a className={styles.iconLink} href="https://www.facebook.com/Sudfa-%D8%B5%D8%AF%D9%81%D8%A9-2268469196753720/?ref=page_internal" target="_blank" rel="noreferrer">
                            <FaFacebook className={styles.icon}/>
                        </a>
                        {/* <FaTwitter className={styles.icon}/> */}
                        <a href="https://blogs.mediapart.fr/sudfa" target="_blank" rel="noreferrer">
                            <div className={styles.mediapart}></div>
                        </a>
                    </div>
                    <AniLink className={styles.contact} activeStyle={{ display: "none" }} paintDrip hex="black" duration={0.8} to='/about'>
                        Contact
                    </AniLink>
                </div>
            </div>
            <div className={`${styles.navMenu} ${isSticky ? 'sticky' : ''}`} id="navbar" ref={ref1}>
                <button 
                        type="button" 
                        className={styles.logoBtn}
                        onClick={toggleNav}>
                        <FaAlignCenter className={styles.logoIcon}/>
                </button>
                <ul className={isOpen?`${styles.navLinksToggled}`:`${styles.navLinks} ${styles.hiddenLinks}`}>
                    {links.map((item, i) => {
                        return (<li key={i} className={styles.navLink}>
                        <AniLink activeStyle={{ fontWeight: "bolder" }} paintDrip hex="black" duration={0.8} to={item.path}>{item.text}</AniLink>
                        </li>)
                    })}
                    <li className={`${styles.contactMobile} ${styles.navLink}`} ><AniLink activeStyle={{ fontWeight: "bolder" }} paintDrip hex="black" duration={0.8} to='/about'>Contact</AniLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
