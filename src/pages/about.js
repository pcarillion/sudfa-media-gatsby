import React from 'react'

import {graphql, useStaticQuery} from 'gatsby'

// plugins
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import BackgroundImage from 'gatsby-background-image'


// js
import Layout from '../components/Layout'
import Contact from '../components/About/Contact'


// css
import styles from '../css/about.module.css'

const getData = graphql`
query{
    presentation:contentfulPresentation(titre:{eq:"Qui sommes nous?"}){
      versionLongue{json}
      titre
      image{
        fluid{
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`


const About = () => {

    const{presentation} = useStaticQuery(getData)

    console.log(presentation)

    return (
        <Layout>
            <div className={styles.container}>
              <h1>{presentation.titre}</h1>
              <article>{documentToReactComponents(presentation.versionLongue.json)}</article>
              {presentation.image && <BackgroundImage className={styles.image} fluid={presentation.image.fluid}/>}
              <Contact/>
            </div>
        </Layout>
    )
}

export default About
