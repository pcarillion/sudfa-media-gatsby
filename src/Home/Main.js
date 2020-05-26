import React from 'react'
import {graphql, useStaticQuery} from "gatsby"

// plugins
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'



// css

import styles from '../css/index.module.css'

// js

const getData = graphql`
query{
    articles:allContentfulArticle(limit: 5, sort:{fields:dateDePublication, order:DESC}){
      edges{
        node{
          titre
          slug
          dateDePublication(formatString:"DD/MM/YYYY")
          auteur{nom}
          presentation{presentation}
          photoPrincipale{
            fluid{...GatsbyContentfulFluid}
          }
        }
      }
    }
  }
`

const Main = () => {


    const {articles} = useStaticQuery(getData)

    console.log(articles.edges)

    return (
        <section className={styles.mainSection}>
                <div className={styles.sectionTitleDiv}>
                    <h2 className={styles.sectionTitle}>Nouveautés</h2>
                    <div className={styles.lineDiv}></div>
                </div>
                <div className="column-evenly-center">
                    <div className={styles.firstArticleDiv}>
                        <div className={styles.mainArticleImageDiv}>
                            <BackgroundImage className={styles.mainArticleImage} fluid={articles.edges[0].node.photoPrincipale.fluid}/>
                        </div>
                        <div className={styles.mainArticleContent}>
                            <AniLink to={`/article/${articles.edges[0].node.slug}`}><h2 className={styles.mainArticleTitle}>{articles.edges[0].node.titre}</h2></AniLink>
                            <p className={styles.articleDateAndAuthor}>{articles.edges[0].node.dateDePublication} - par {articles.edges[0].node.auteur.nom}</p>
                            <p className={styles.mainArticlePar}>{articles.edges[0].node.presentation.presentation}</p>
                        </div>
                    </div>
                    <div className={styles.mainArticlesDiv}>
                        <div className={styles.mainArticlesContent}>
                            <AniLink to={`/article/${articles.edges[1].node.slug}`}><h3>{articles.edges[1].node.titre}</h3></AniLink>
                            <p className={styles.articleDateAndAuthor}>{articles.edges[1].node.dateDePublication} - par {articles.edges[1].node.auteur.nom}</p>
                            <p>{articles.edges[1].node.presentation.presentation}</p>
                        </div>
                        <div className={styles.mainArticlesContent}>
                            <h3>{articles.edges[2].node.titre}</h3>
                            <p className={styles.articleDateAndAuthor}>{articles.edges[2].node.dateDePublication} - par {articles.edges[2].node.auteur.nom}</p>
                            <p>{articles.edges[2].node.presentation.presentation}</p>
                        </div>
                        <div className={styles.mainArticlesContent}>
                            <h3>{articles.edges[3].node.titre}</h3>
                            <p className={styles.articleDateAndAuthor}>{articles.edges[3].node.dateDePublication} - par {articles.edges[3].node.auteur.nom}</p>
                            <p>{articles.edges[3].node.presentation.presentation}</p>
                        </div>
                        <div className={styles.mainArticlesContent}>
                            <h3>{articles.edges[4].node.titre}</h3>
                            <p className={styles.articleDateAndAuthor}>{articles.edges[4].node.dateDePublication} - par {articles.edges[4].node.auteur.nom}</p>
                            <p>{articles.edges[4].node.presentation.presentation}</p>
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

export default Main
