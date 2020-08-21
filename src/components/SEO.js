import React from 'react'
import {Helmet} from 'react-helmet'
import {graphql, useStaticQuery} from 'gatsby'


const getData = graphql`
query{
    site{
      siteMetadata{
        siteTitle: title
        siteDesc: description
        author
        siteUrl
        image
      }
    }
  }
`

const SEO = ({title, description}) => {

    const {site} = useStaticQuery(getData);

    const {siteDesc, siteTitle, siteUrl, image, twitterUsename} = site.siteMetadata

    return (
        <Helmet title={ `${siteTitle} | ${title}`} htmlAttributes={{lang:"eng"}}>
            <meta name="description" content={description || siteDesc}/>
            <meta rel="icon" href={image} />
            <meta name="image" content={image}/>
            {/* facebook cards */}
            <meta property="og:url" content={siteUrl}/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content={siteTitle}/>
            <meta property="og:description" content={siteDesc}/>
            <meta property="og:image" content={`${siteUrl}${siteUrl}`}/>
            <meta property="og:image:width" content='400'/>
            <meta property="og:image:height" content='300'/>
        </Helmet>
    )
}

export default SEO
