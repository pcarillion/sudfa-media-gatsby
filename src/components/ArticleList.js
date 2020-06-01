import React from 'react'


// css
import styles from '../css/category.module.css'

// plugins

import BackgroundImage from 'gatsby-background-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'



const ArticleList = ({articles}) => {

    console.log(articles)

    
    return (
        <div className={styles.articles}>
            <div className={styles.mainArticle}>
                <AniLink paintDrip hex="black" duration={0.5} to={`/article/${articles[0].node.slug}`}>
                    <BackgroundImage className={styles.mainImage} fluid={articles[0].node.photoPrincipale.fluid}/>
                </AniLink>
                <div className={styles.mainContent}>
                    <AniLink paintDrip hex="black" duration={0.5} to={`/article/${articles[0].node.slug}`}>
                        <h2 className={styles.link}>{articles[0].node.titre}</h2>
                    </AniLink>
                    <p className={styles.dateAndAuthor}>{articles[0].node.dateDePublication} - par {articles[0].node.auteur.nom}</p>
                    <p>{articles[0].node.presentation.presentation}</p>
                </div>
            </div>
            <div className={styles.article2}>
                {/* <div className={styles.secondImage}></div> */}
                <AniLink paintDrip hex="black" duration={0.5} to={`/article/${articles[1].node.slug}`}>
                    <BackgroundImage className={styles.secondImage} fluid={articles[1].node.photoPrincipale.fluid}/>
                </AniLink>
                <div className={styles.secondContent}>
                    <AniLink paintDrip hex="black" duration={0.5} to={`/article/${articles[1].node.slug}`}>
                        <h2 className={styles.link}>{articles[1].node.titre}</h2>
                    </AniLink>
                    <p className={styles.dateAndAuthor}>{articles[1].node.dateDePublication} - par {articles[1].node.auteur.nom}</p>
                    <p>{articles[1].node.presentation.presentation}</p>
                </div>
            </div>
            <div className={styles.article3}>
            {/* <div className={styles.secondImage}></div> */}
            <AniLink paintDrip hex="black" duration={0.5} to={`/article/${articles[2].node.slug}`}>
                <BackgroundImage className={styles.secondImage} fluid={articles[2].node.photoPrincipale.fluid}/>
            </AniLink>
                <div className={styles.secondContent}>
                    <AniLink paintDrip hex="black" duration={0.5} to={`/article/${articles[2].node.slug}`}>
                        <h2 className={styles.link}>{articles[2].node.titre}</h2>
                    </AniLink>
                    <p className={styles.dateAndAuthor}>{articles[2].node.dateDePublication} - par {articles[2].node.auteur.nom}</p>
                    <p>{articles[2].node.presentation.presentation}</p>
                </div>
            </div>
            <div className={styles.article4}>
                {/* <div className={styles.secondImage}></div>             */}
                <AniLink paintDrip hex="black" duration={0.5} to={`/article/${articles[3].node.slug}`}>
                    <BackgroundImage className={styles.secondImage} fluid={articles[3].node.photoPrincipale.fluid}/>
                </AniLink>
                <AniLink paintDrip hex="black" duration={0.5} to={`/article/${articles[3].node.slug}`}>
                    <h2 className={styles.link}>{articles[3].node.titre}</h2>
                </AniLink>
                <p className={styles.dateAndAuthor}>{articles[3].node.dateDePublication} - par {articles[3].node.auteur.nom}</p>
            </div>
            <div className={styles.article5}>
                {/* <div className={styles.secondImage}></div>             */}
                <AniLink paintDrip hex="black" duration={0.5} to={`/article/${articles[4].node.slug}`}>
                    <BackgroundImage className={styles.secondImage} fluid={articles[4].node.photoPrincipale.fluid}/>
                </AniLink>
                <AniLink paintDrip hex="black" duration={0.5} to={`/article/${articles[4].node.slug}`}>
                    <h2 className={styles.link}>{articles[4].node.titre}</h2>
                </AniLink>
                <p className={styles.dateAndAuthor}>{articles[4].node.dateDePublication} - par {articles[4].node.auteur.nom}</p>
            </div>
        </div>
    )
}

export default ArticleList
