import React from 'react'

// js
import links from '../constants/Links'


// plugins
import {FaFacebook, FaTwitter} from 'react-icons/fa'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { withPrefix } from 'gatsby'

// css
import styles from "../css/footer.module.css"

const Footer = () => {
    return (
        <div className={styles.footerDiv}>
            <div className={styles.linksDiv}>
                <ul className={`${styles.links} full-width list-no-dec full-width`}>
                    {links.map((item, i) => {
                        return (<li key={i} className={styles.navLink}>
                        <AniLink paintDrip hex="black" activeStyle={{ fontWeight: "bolder" }} duration={0.8} to={item.path}>{item.text}</AniLink>
                        </li>)
                    })}
                    <li className={styles.navLink}>
                            <AniLink paintDrip hex="black" activeStyle={{ fontWeight: "bolder" }} duration={0.8} to='/auteurs'>Les auteur-e-s</AniLink>
                    </li>
                    <li className={styles.navLink}>
                            <AniLink paintDrip hex="black" activeStyle={{ fontWeight: "bolder" }} duration={0.8} to='/about'>A propos</AniLink>
                    </li>
                </ul>
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
            <AniLink paintDrip hex="black" activeStyle={{ fontWeight: "bolder" }} duration={0.8} to='/about'>
                    Contact
            </AniLink>
            <div className={styles.copyright}>
                copyright &copy; <AniLink paintDrip hex="black" activeStyle={{ fontWeight: "bolder" }} duration={0.8} to='/about'>Sudfa</AniLink> - 2020 - Tous droits réservés
            </div>
            <div className={styles.copyrightDev}>
                <a href="https://paul-carillion.net" target="_blank" rel="noreferrer">
                    <p>Développé par Paul Carillion</p>
                </a>
                <a href="https://paul-carillion.net" target="_blank" rel="noreferrer">
                    <div className={styles.logoDev}></div>
                </a>
            </div>
            <script src={withPrefix('../script.js')}/>
        </div>
    )
}

export default Footer
