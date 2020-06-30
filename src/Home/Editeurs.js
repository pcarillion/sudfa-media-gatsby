import React from 'react'

import {graphql, useStaticQuery} from "gatsby"

// plugins
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import AniLink from 'gatsby-plugin-transition-link/AniLink'

// js

// css
import styles from '../css/index.module.css'

const getData = graphql`
query{
    presentation:contentfulPresentation(titre:{eq:"Qui sommes nous?"}){
      versionCourte{json}
    }
  }
`


const Editeurs = () => {

    const {presentation} = useStaticQuery(getData);

    return (
        <section className={styles.editorSection}>
                <div className={styles.sectionTitleDiv}>
                    <AniLink paintDrip hex="black" duration={0.8} to='/about'>
                        <h2 className={styles.sectionTitle}>Qui sommes-nous</h2>
                    </AniLink>
                    <div className={styles.lineDiv}></div>
                </div>
                <p className={styles.editeursContent}>{documentToReactComponents(presentation.versionCourte.json)}</p>
                <div className="row-evenly-center">
                    <div className={styles.lineDiv}></div>
                    <AniLink paintDrip hex="black" duration={0.8} to='/about'>
                        <p className={styles.voirPlus}>Voir plus</p>
                    </AniLink>
                </div>
        </section>
    )
}

export default Editeurs
