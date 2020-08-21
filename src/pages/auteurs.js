import React from 'react'
import {graphql, useStaticQuery} from "gatsby"

// js
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import AuteurPres from '../components/Author/Author'

// css
import styles from '../css/auteur.module.css'


const getData = graphql`
    query{
        allContentfulAuteur{
        edges{
            node{
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
        }
    }
}
`

const Auteurs = () => {

    const auteurs = useStaticQuery(getData)

    const authorsList = auteurs.allContentfulAuteur.edges


    const url = typeof window !== 'undefined' ? window.location.href : '';
    
    return (
        <Layout>
            <SEO title='Les Auteur-e-s' description="les auteur-e-s de Sudfa Média" url={url}/>
            <div className={styles.listAuthors}>
                <h1>Les Auteur-e-s</h1>
                {authorsList.map((author, i) => {
                    return <AuteurPres data={author.node}/>
                })}
            </div>
        </Layout>
    )
}

export default Auteurs
