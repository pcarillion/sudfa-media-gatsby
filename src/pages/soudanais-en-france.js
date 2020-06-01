import React from 'react'
import {graphql, useStaticQuery} from "gatsby"


// js
import Layout from '../components/Layout'
import ArticleList from '../components/ArticleList'
import ArticleList2 from '../components/ArticleList2'


// css
import styles from '../css/category.module.css'

// plugins
import AniLink from 'gatsby-plugin-transition-link/AniLink'



const getData = graphql`
query{
    mainArticles : allContentfulArticle(limit:5, sort:{fields:dateDePublication, order:DESC}, filter:{categorie:{eq:"Soudanais en France"}}){
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
    otherArticles : allContentfulArticle(skip:5, sort:{fields:dateDePublication, order:DESC}, filter:{categorie:{eq:"Soudanais en France"}}){
        edges{
          node{
            titre
            dateDePublication(formatString:"DD/MM/YYYY")
            auteur{nom}
            presentation{presentation}
            photoPrincipale{
              fluid{src}
            }
            slug
          }
        }
      }
  }
  `

const SoudanaisEnFrance = () => {

    const {mainArticles, otherArticles} = useStaticQuery(getData)


    



    return (
        <Layout>
            <div className={styles.container}>
                <h1>Soudanais en France</h1>
                <p className={styles.presentation}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in felis elit. Cras gravida placerat dui, vel eleifend felis convallis ut. Sed cursus ornare dignissim. Praesent venenatis magna nec sollicitudin commodo. Fusce ex libero, ultrices consequat posuere non, volutpat nec nunc. </p>
                <div className={styles.line}></div>
                <ArticleList articles={mainArticles.edges}/>
                <ArticleList2 data={otherArticles}/>
            </div>
        </Layout>
    )
}

export default SoudanaisEnFrance
