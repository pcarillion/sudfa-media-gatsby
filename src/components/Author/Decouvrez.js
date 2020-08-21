import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styles from '../../css/auteur.module.css'

const Decouvrez = () => {
    return (
        <p className={styles.decouvrez}>
            <AniLink paintDrip hex="black" duration={0.8} to='/auteurs'>Découvrez toute-e-s nos auteur-e-s et contributeur-ice-s</AniLink>.
        </p>
    )
}

export default Decouvrez
