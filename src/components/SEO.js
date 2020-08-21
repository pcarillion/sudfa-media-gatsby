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

const SEO = ({title, description, img, url}) => {

    const {site} = useStaticQuery(getData);

    const {siteDesc, siteTitle, siteUrl, image, twitterUsename} = site.siteMetadata

    return (
        <Helmet title={ `${siteTitle} | ${title}`} htmlAttributes={{lang:"eng"}}>
            <meta name="description" content={description || siteDesc}/>
            <meta rel="icon" href={image} />
            <meta name="image" content={image}/>
            {/* facebook cards */}
            <meta property="og:url" content={url}/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={`Sudfa Media || ${description}`}/>
            <meta property="og:image" content={img}/>
            <meta property="og:image:width" content='400'/>
            <meta property="og:image:height" content='300'/>
        </Helmet>
    )
}

export default SEO
