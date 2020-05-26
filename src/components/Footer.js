import React from 'react'

// js

// plugin

// css
import styles from "../css/footer.module.css"

const Footer = () => {
    return (
        <div className={styles.footerDiv}>
            <div>Social Media</div>
            <div>Links</div>
            <div>
                copyright &copy; <a href="https://paul-carillion.net" target="_blank" rel="noreferrer">Sudfa</a> - 2020 - Tous droits réservés
            </div>
        </div>
    )
}

export default Footer
