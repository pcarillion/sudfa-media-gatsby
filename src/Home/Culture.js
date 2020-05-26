import React from 'react'

import {graphql, useStaticQuery} from 'gatsby'

// plugins
import BackgroundImage from 'gatsby-background-image'

// js

// css
import styles from '../css/index.module.css'


const getData = graphql`
query{
  articles : allContentfulArticle(limit:2, sort:{fields:dateDePublication, order:DESC}, filter:{categorie:{eq:"Culture"}}){
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

const Culture = () => {

const {articles} = useStaticQuery(getData)

    return (
        <section className={styles.cultureSection}>
                <div className={styles.sectionTitleDiv}>
                    <h2 className={styles.sectionTitle}>Culture</h2>
                    <div className={styles.lineDiv}></div>
                </div>
                <div className="row-evenly-start">
                    <div className={styles.cultureArticle}>
                        <BackgroundImage className={styles.cultureImage} fluid={articles.edges[0].node.photoPrincipale.fluid}/>
                        <div>
                            <h3>{articles.edges[0].node.titre}</h3>
                            <p className={styles.articleDateAndAuthor}>{articles.edges[0].node.dateDePublication} - par {articles.edges[0].node.auteur.nom}</p>
                            <p>{articles.edges[0].node.presentation.presentation}</p>
                        </div>
                    </div>
                    <div className={styles.cultureArticle}>
                        <BackgroundImage className={styles.cultureImage} fluid={articles.edges[1].node.photoPrincipale.fluid}/>
                        <div>
                            <h3>{articles.edges[1].node.titre}</h3>
                            <p className={styles.articleDateAndAuthor}>{articles.edges[1].node.dateDePublication} - par {articles.edges[1].node.auteur.nom}</p>
                            <p>{articles.edges[1].node.presentation.presentation}</p>
                        </div>
                    </div>
                </div>
                <div className="row-evenly-center">
                    <div className={styles.lineDiv}></div>
                    <p className={styles.voirPlus}>Voir plus</p>
                </div>
        </section>
    )
}

export default Culture
