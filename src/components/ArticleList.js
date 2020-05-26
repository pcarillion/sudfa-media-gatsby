import React from 'react'


// css
import styles from '../css/category.module.css'

// plugins

import BackgroundImage from 'gatsby-background-image'



const ArticleList = ({articles}) => {

    console.log(articles)

    
    return (
        <div className={styles.articles}>
            <div className={styles.mainArticle}>
                <BackgroundImage className={styles.mainImage} fluid={articles[0].node.photoPrincipale.fluid}/>
                <div className={styles.mainContent}>
                    <h2>{articles[0].node.titre}</h2>
                    <p className={styles.dateAndAuthor}>{articles[0].node.dateDePublication} - par {articles[0].node.auteur.nom}</p>
                    <p>{articles[0].node.presentation.presentation}</p>
                </div>
            </div>
            <div className={styles.article2}>
                {/* <div className={styles.secondImage}></div> */}
                <BackgroundImage className={styles.secondImage} fluid={articles[0].node.photoPrincipale.fluid}/>
                <div className={styles.secondContent}>
                    <h2>{articles[1].node.titre}</h2>
                    <p className={styles.dateAndAuthor}>{articles[1].node.dateDePublication} - par {articles[1].node.auteur.nom}</p>
                    <p>{articles[1].node.presentation.presentation}</p>
                </div>
            </div>
            <div className={styles.article3}>
            {/* <div className={styles.secondImage}></div> */}
            <BackgroundImage className={styles.secondImage} fluid={articles[0].node.photoPrincipale.fluid}/>
                <div className={styles.secondContent}>
                    <h2>{articles[2].node.titre}</h2>
                    <p className={styles.dateAndAuthor}>{articles[2].node.dateDePublication} - par {articles[2].node.auteur.nom}</p>
                    <p>{articles[2].node.presentation.presentation}</p>
                </div>
            </div>
            <div className={styles.article4}>
                {/* <div className={styles.secondImage}></div>             */}
                <BackgroundImage className={styles.secondImage} fluid={articles[0].node.photoPrincipale.fluid}/>

                <h2>{articles[3].node.titre}</h2>
                <p className={styles.dateAndAuthor}>{articles[3].node.dateDePublication} - par {articles[3].node.auteur.nom}</p>
            </div>
            <div className={styles.article5}>
                {/* <div className={styles.secondImage}></div>             */}
                <BackgroundImage className={styles.secondImage} fluid={articles[0].node.photoPrincipale.fluid}/>

                <h2>{articles[4].node.titre}</h2>
                <p className={styles.dateAndAuthor}>{articles[4].node.dateDePublication} - par {articles[4].node.auteur.nom}</p>
            </div>
        </div>
    )
}

export default ArticleList
