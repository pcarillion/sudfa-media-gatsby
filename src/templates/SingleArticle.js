import React from 'react'


// js
import Layout from '../components/Layout'
import List2 from '../components/ArticleList2'

// plugins
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Img from 'gatsby-image'

// css
import styles from '../css/article.module.css'


const SingleArticle = ({data}) => {

    const {titre, dateDePublication, auteur, categorie, article:{json}, photoPrincipale} = data.article


    console.log(data.autresArticles)

    return (
        <Layout>
            <div className={styles.container}>
                <h1>{titre}</h1>
                <p>{dateDePublication} - par {auteur.nom} -  {categorie}</p>
                <Img fluid={photoPrincipale.fluid}/>
                <article>{documentToReactComponents(json)}</article>
                <p>{auteur.nom}</p>
                <List2 data={data.autresArticles}/>
            </div>
        </Layout>
    )
}

export const query = graphql`
query getArticles($slug:String, $categorie:String){
  article:contentfulArticle(slug:{eq:$slug}){
    titre
    dateDePublication(formatString:"DD/MM/YYYY")
    auteur{nom}
    categorie
    article{json}
    photoPrincipale{
        fluid{
            ...GatsbyContentfulFluid
        }
    }
  }
  autresArticles: allContentfulArticle(limit:4, filter:{categorie:{eq:$categorie}}){
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

export default SingleArticle
