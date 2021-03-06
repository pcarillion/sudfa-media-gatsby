import React from 'react'
import {graphql, useStaticQuery} from "gatsby"


// js
import Layout from '../components/Layout'
import ArticleList from '../components/ArticleList'
import ArticleList2 from '../components/ArticleList2'
import SEO from '../components/SEO'



// css
import styles from '../css/category.module.css'

// plugins
import AniLink from 'gatsby-plugin-transition-link/AniLink'



const getData = graphql`
query{
    mainArticles : allContentfulArticle(limit:5, sort:{fields:dateDePublication, order:DESC}, filter:{categorie:{eq:"Actualités au Soudan"}}){
      edges{
        node{
          titre
          dateDePublication(formatString:"DD/MM/YYYY")
          presentation{presentation}
          photoPrincipale{
            fluid{src}
          }
          slug
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
    otherArticles : allContentfulArticle(skip:5, sort:{fields:dateDePublication, order:DESC}, filter:{categorie:{eq:"Actualités au Soudan"}}){
        edges{
          node{
            titre
            dateDePublication(formatString:"DD/MM/YYYY")
            presentation{presentation}
            photoPrincipale{
              fluid{src}
            }
            slug
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
      presentation: contentfulPresentation(titre:{eq:"Qui sommes nous?"}){
        texteSectionActualite{
          texteSectionActualite
        }
      }
  }
  `

const ActualitesAuSoudan = () => {

    const {mainArticles, otherArticles, presentation} = useStaticQuery(getData)


    
    const url = typeof window !== 'undefined' ? window.location.href : '';



    return (
        <Layout>
        <SEO title='Actualités au Soudan' description="catégorie actualités au Soudan de Sudfa Média"/>
            <div className={styles.container}>
                <h1>Actualités au Soudan</h1>
                <p className={styles.presentation}>{presentation.texteSectionActualite.texteSectionActualite}</p>
                <div className={styles.line}></div>
                <ArticleList articles={mainArticles.edges}/>
                {otherArticles.edges.length >0 && <ArticleList2 data={otherArticles} slug='/actualites-au-soudan'/>}
            </div>
        </Layout>
    )
}

export default ActualitesAuSoudan
