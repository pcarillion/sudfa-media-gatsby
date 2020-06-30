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
    mainArticles : allContentfulArticle(limit:5, sort:{fields:dateDePublication, order:DESC}, filter:{categorie:{eq:"Culture"}}){
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
    otherArticles : allContentfulArticle(skip:5, sort:{fields:dateDePublication, order:DESC}, filter:{categorie:{eq:"Culture"}}){
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
        texteSectionCulture{
          texteSectionCulture
        }
      }
  }
  `

const Culture = () => {

    const {mainArticles, otherArticles, presentation} = useStaticQuery(getData)

    return (
        <Layout>
            <SEO title='Culture' description="catégorie Culture de Sudfa Média"/>
            <div className={styles.container}>
                <h1>Culture</h1>
                <p className={styles.presentation}>{presentation.texteSectionCulture.texteSectionCulture}</p>
                <div className={styles.line}></div>
                <ArticleList articles={mainArticles.edges}/>
                {otherArticles.edges.length >0 && <ArticleList2 data={otherArticles} slug='/culture'/>}
            </div>
        </Layout>
    )
}

export default Culture
