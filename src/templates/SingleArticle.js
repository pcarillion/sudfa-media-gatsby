import React from 'react'


// js
import Layout from '../components/Layout'
import List2 from '../components/ArticleList2'
import Auteur from '../components/Author/Author'

// plugins
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Img from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

// css
import styles from '../css/article.module.css'


const SingleArticle = ({data}) => {

    const {titre, dateDePublication, auteur, categorie, article:{json}, photoPrincipale} = data.article

    console.log(auteur)

    console.log(data.autresArticles)

    return (
        <Layout>
            <div className={styles.container}>
                <h1>{titre}</h1>
                <p className={styles.dateAndAuthor}>{dateDePublication} - par {auteur.map((auteur, i) => {return(<AniLink paintDrip hex="black" duration={0.8} to={`/auteur/${auteur.slug}`} className={styles.authorSpan} key={i}>{auteur.nom}</AniLink>)})} -  {categorie}</p>
                <Img fluid={photoPrincipale.fluid}/>
                <article>{documentToReactComponents(json)}</article>
                {auteur.map((auteur, i) => {
                  return (
                    <Auteur data={auteur}/>
                  )
                })}
                <List2 data={data.autresArticles} title={categorie}/>
            </div>
        </Layout>
    )
}

export const query = graphql`
query getArticles($slug:String, $categorie:String){
  article:contentfulArticle(slug:{eq:$slug}){
    titre
    dateDePublication(formatString:"DD/MM/YYYY")
    categorie
    article{json}
    photoPrincipale{
        fluid{
            ...GatsbyContentfulFluid
        }
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
  autresArticles: allContentfulArticle(limit:4, filter:{categorie:{eq:$categorie}}){
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

export default SingleArticle
