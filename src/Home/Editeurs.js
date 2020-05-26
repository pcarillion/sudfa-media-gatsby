import React from 'react'

import {graphql, useStaticQuery} from "gatsby"

// plugins

// js

// css
import styles from '../css/index.module.css'

const getData = graphql`
query{
    presentation:contentfulPresentation(titre:{eq:"Les éditeurs"}){
      versionCourte{versionCourte}
    }
  }
`


const Editeurs = () => {

    const {presentation} = useStaticQuery(getData);

    return (
        <section className={styles.editorSection}>
                <div className={styles.sectionTitleDiv}>
                    <h2 className={styles.sectionTitle}>Les éditeurs</h2>
                    <div className={styles.lineDiv}></div>
                </div>
                <p className={styles.editeursContent}>{presentation.versionCourte.versionCourte}</p>
                <div className="row-evenly-center">
                    <div className={styles.lineDiv}></div>
                    <p className={styles.voirPlus}>Voir plus</p>
                </div>
        </section>
    )
}

export default Editeurs
