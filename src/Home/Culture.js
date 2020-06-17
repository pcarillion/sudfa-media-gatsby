import React from 'react'

import {graphql, useStaticQuery} from 'gatsby'

// plugins
import BackgroundImage from 'gatsby-background-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

// js

// css
import styles from '../css/index.module.css'


const getData = graphql`
query{
  articles : allContentfulArticle(limit:2, sort:{fields:dateDePublication, order:DESC}, filter:{categorie:{eq:"Culture"}}){
    edges{
      node{
        titre
        slug
        dateDePublication(formatString:"DD/MM/YYYY")
        presentation{presentation}
        photoPrincipale{
          fluid{...GatsbyContentfulFluid}
        }
        auteur{
          nom
          slug
          description{description}
          photo{
            fluid {
              ...GatsbyContentfulFluid
            }
          }
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
                    <AniLink paintDrip hex="black" duration={0.8} to='/culture'>
                      <h2 className={styles.sectionTitle}>Culture</h2>
                    </AniLink>
                    <div className={styles.lineDiv}></div>
                </div>
                <div className={styles.cultureArticles}>
                    <div className={styles.cultureArticle}>
                        <AniLink paintDrip hex="black" duration={0.8} to={`/article/${articles.edges[0].node.slug}`}>
                          <BackgroundImage className={styles.cultureImage} fluid={articles.edges[0].node.photoPrincipale.fluid}/>
                        </AniLink>
                        <div>
                            <AniLink paintDrip hex="black" duration={0.8} to={`/article/${articles.edges[0].node.slug}`}>
                              <h3 className={styles.cultureArticleTitle}>{articles.edges[0].node.titre}</h3>
                            </AniLink>
                            <p className={styles.articleDateAndAuthor}>{articles.edges[0].node.dateDePublication} - par {articles.edges[0].node.auteur.map((auteur, i) => {return(<AniLink to={`/auteur/${auteur.slug}`} className={styles.authorSpan} key={i}> {auteur.nom}</AniLink>)})}</p>
                            <p>{articles.edges[0].node.presentation.presentation}</p>
                        </div>
                    </div>
                    <div className={styles.cultureArticle}>
                        <AniLink paintDrip hex="black" duration={0.8} to={`/article/${articles.edges[1].node.slug}`}>
                          <BackgroundImage className={styles.cultureImage} fluid={articles.edges[1].node.photoPrincipale.fluid}/>
                        </AniLink>
                        <div>
                            <AniLink paintDrip hex="black" duration={0.8} to={`/article/${articles.edges[1].node.slug}`}>
                              <h3 className={styles.cultureArticleTitle}>{articles.edges[1].node.titre}</h3>
                            </AniLink>
                            <p className={styles.articleDateAndAuthor}>{articles.edges[1].node.dateDePublication} - par {articles.edges[1].node.auteur.map((auteur, i) => {return(<AniLink to={`/auteur/${auteur.slug}`} className={styles.authorSpan} key={i}> {auteur.nom}</AniLink>)})}</p>
                            <p>{articles.edges[1].node.presentation.presentation}</p>
                        </div>
                    </div>
                </div>
                <div className="row-evenly-center">
                    <div className={styles.lineDiv}></div>
                    <AniLink paintDrip hex="black" duration={0.8} to='/culture'>
                      <p className={styles.voirPlus}>Voir plus</p>
                    </AniLink>
                </div>
        </section>
    )
}

export default Culture
