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
    mainArticles : allContentfulArticle(limit:5, sort:{fields:dateDePublication, order:DESC}, filter:{categorie:{eq:"Histoire"}}){
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
    otherArticles : allContentfulArticle(skip:5, sort:{fields:dateDePublication, order:DESC}, filter:{categorie:{eq:"Histoire"}}){
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
        texteSectionHistoire{
          texteSectionHistoire
        }
      }
  }
  `

const Histoire = () => {

    const {mainArticles, otherArticles, presentation} = useStaticQuery(getData)

    const url = typeof window !== 'undefined' ? window.location.href : '';


    return (
        <Layout>
                <SEO title='Histoire' description="catégorie Histoire de Sudfa Média" url={url}/>
            <div className={styles.container}>
                <h1>Histoire</h1>
                <p className={styles.presentation}>{presentation.texteSectionHistoire.texteSectionHistoire}</p>
                <div className={styles.line}></div>
                {otherArticles.edges.length > 5 ? <ArticleList articles={mainArticles.edges}/>: <p>Cette section est en cours de construction.</p>}
                {otherArticles.edges.length > 0 && <ArticleList2 data={otherArticles} slug='/histoire'/>}
            </div>
        </Layout>
    )
}

export default Histoire
