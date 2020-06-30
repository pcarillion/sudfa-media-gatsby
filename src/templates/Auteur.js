import React from 'react'

// js
import Layout from '../components/Layout'
import AuteurPres from '../components/Author/Author'
import List from '../components/ArticleList2'
import SEO from '../components/SEO'

// css

import styles from '../css/auteur.module.css'

// plugins



const Auteur = ({data}) => {


    console.log(data.auteur)

    return (
        <Layout>
            <SEO title={data.auteur.nom} description="auteur de Sudfa Média"/>
            <div className={styles.mainDiv}>
                <AuteurPres data={data.auteur}/>
                <span ></span>
                <List data={data.articles} title="Ses articles" isAuteur slug={`/auteur/${data.auteur.slug}`}/>
            </div>
        </Layout>
    )
}

export const query = graphql`
query getData($slug:String) {
    auteur: contentfulAuteur(slug:{eq:$slug}){
        nom
        slug
        description{
            description
        }
        photo{
            fluid{
                ...GatsbyContentfulFluid
            }
        }
    }
    articles: allContentfulArticle(filter:{auteur:{elemMatch:{slug:{eq:$slug}}}}, sort:{fields:dateDePublication, order:DESC}){
    edges{
      node{
        titre
        auteur {
            nom
            slug
        }
        slug
        dateDePublication(formatString:"DD/MM/YYYY")
        presentation{presentation}
        photoPrincipale{
          fluid{...GatsbyContentfulFluid}
        	}
        }
      }
    } 
}
`

export default Auteur
