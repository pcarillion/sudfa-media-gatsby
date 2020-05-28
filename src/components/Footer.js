import React from 'react'

// js
import links from '../constants/Links'


// plugins
import {FaFacebook, FaTwitter} from 'react-icons/fa'
import AniLink from 'gatsby-plugin-transition-link/AniLink'


// css
import styles from "../css/footer.module.css"

const Footer = () => {
    return (
        <div className={styles.footerDiv}>
            <div className={styles.linksDiv}>
                <ul className='row-evenly-center full-width list-no-dec full-width'>
                    {links.map((item, i) => {
                        return (<li key={i} className={styles.navLink}>
                        <AniLink paintDrip hex="black" duration={0.5} to={item.path}>{item.text}</AniLink>
                        </li>)
                    })}
                </ul>
            </div>
            <div className={styles.socialMediaDiv}>
                <FaFacebook className={styles.icon}/>
                <FaTwitter className={styles.icon}/>
                <div className={styles.mediapart}></div>
            </div>
            <div className={styles.copyright}>
                copyright &copy; Sudfa - 2020 - Tous droits réservés
            </div>
            <div className={styles.copyrightDev}>
                <a href="https://paul-carillion.net" target="_blank" rel="noreferrer">
                    <p>Développé par Paul Carillion</p>
                </a>
                <a href="https://paul-carillion.net" target="_blank" rel="noreferrer">
                    <div className={styles.logoDev}></div>
                </a>
            </div>
        </div>
    )
}

export default Footer
