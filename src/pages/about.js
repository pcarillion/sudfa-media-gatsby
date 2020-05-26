import React from 'react'

import {graphql, useStaticQuery} from 'gatsby'

// plugins
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


// js
import Layout from '../components/Layout'


// css


const getData = graphql`
query{
    presentation:contentfulPresentation(titre:{eq:"Les éditeurs"}){
      versionLongue{json}
      titre
    }
  }
`


const About = () => {

    const{presentation} = useStaticQuery(getData)

    console.log(presentation)

    return (
        <Layout>
            <h2>{presentation.titre}</h2>
            <article>{documentToReactComponents(presentation.versionLongue.json)}</article>
        </Layout>
    )
}

export default About
