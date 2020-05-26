import React from 'react'

import {graphql, useStaticQuery} from 'gatsby'

// plugins

// js

// css
import styles from '../css/index.module.css'

const getData = graphql`
query{
  articles : allContentfulArticle(limit:4, sort:{fields:dateDePublication, order:DESC}, filter:{categorie:{eq:"Politique au Soudan"}}){
    edges{
      node{
        titre
        dateDePublication(formatString:"DD/MM/YYYY")
        auteur{nom}
        presentation{presentation}
        photoPrincipale{
          fluid{src}
        }
      }
    }
  }
}
`


const Politique = () => {

    const {articles} = useStaticQuery(getData)

    return (
        <section className={styles.politiqueSection}>
                <div className={styles.sectionTitleDiv}>
                    <h3 className={styles.sectionTitle}>Politique</h3>
                    <div className={styles.lineDiv}></div>
                </div>
                <div className={styles.politiqueContent}>
                    <h3>{articles.edges[0].node.titre}</h3>
                    <p className={styles.articleDateAndAuthor}>{articles.edges[0].node.dateDePublication} - par {articles.edges[0].node.auteur.nom}</p>
                </div>
                <div className={styles.politiqueContent}>
                    <h3>{articles.edges[1].node.titre}</h3>
                    <p className={styles.articleDateAndAuthor}>{articles.edges[1].node.dateDePublication} - par {articles.edges[1].node.auteur.nom}</p>
                </div>
                <div className={styles.politiqueContent}>
                    <h3>{articles.edges[2].node.titre}</h3>
                    <p className={styles.articleDateAndAuthor}>{articles.edges[2].node.dateDePublication} - par {articles.edges[2].node.auteur.nom}</p>
                </div>
                <div className={styles.politiqueContent}>
                    <h3>{articles.edges[3].node.titre}</h3>
                    <p className={styles.articleDateAndAuthor}>{articles.edges[3].node.dateDePublication} - par {articles.edges[3].node.auteur.nom}</p>
                </div>
                <div className="row-evenly-center">
                    <div className={styles.lineDiv}></div>
                    <p className={styles.voirPlus}>Voir plus</p>
                </div>
        </section>
    )
}

export default Politique