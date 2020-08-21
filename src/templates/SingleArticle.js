import React from 'react'


// js
import Layout from '../components/Layout'
import List2 from '../components/ArticleList2'
import Auteur from '../components/Author/Author'
import SEO from '../components/SEO'

// plugins
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Img from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

// css and script
import styles from '../css/article.module.css'


const SingleArticle = ({data}) => {

    const {titre, presentation, slug, dateDePublication, auteur, categorie, article:{json}, photoPrincipale} = data.article


    const images = data.images.edges

    const url = typeof window !== 'undefined' ? window.location.href : '';

    const options = {
      renderNode : {
        "embedded-asset-block":(node)=> {
          let file
          for (let i = 0; i < images.length; i ++){
            if (images[i].node.contentful_id === node.data.target.sys.contentful_id){
              file = images[i].node
            }
          }
          return (<div className="image-in-article" ><img src={file.file.url}/> <p>{file.description}</p></div>)
        }
      }
    }

    console.log(photoPrincipale);

    return (
        <Layout>
            <SEO title={titre} description={`${categorie}`} img={photoPrincipale.fluid.src} url={url}/>
            <div className={styles.container}>
                <h1>{titre}</h1>
                <p className={styles.dateAndAuthor}>{dateDePublication} - par {auteur.map((auteur, i) => {return(<AniLink paintDrip hex="black" duration={0.8} to={`/auteur/${auteur.slug}`} className={styles.authorSpan} key={i}>{auteur.nom}</AniLink>)})} -  {categorie}</p>
                <p className={styles.presentation}>{presentation.presentation}</p>
                <Img fluid={photoPrincipale.fluid} className={styles.mainPic}/>
                <p className={styles.legend}>{photoPrincipale.description}</p>
                <article className={styles.article}>{documentToReactComponents(json, options)}</article>
                {auteur.map((auteur, i) => {
                  return (
                    <Auteur data={auteur}/>
                  )
                })}
                <List2 data={data.autresArticles} title={categorie} slug={`/article/${slug}`}/>
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
    presentation{presentation}
    slug
    article{json}
    photoPrincipale{
        description
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
  autresArticles: allContentfulArticle(filter:{categorie:{eq:$categorie}},sort:{fields:dateDePublication, order:DESC}){
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
  images: allContentfulAsset{
    edges{
      node{
        contentful_id
        id
        file{url}
        description
      }
    }
  }
}
`

export default SingleArticle
