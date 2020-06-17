import React from 'react'

// js

// css
import styles from '../css/category.module.css'

// plugins
import BackgroundImage from 'gatsby-background-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'


const ArticleList2 = ({data, title}) => {


    console.log(data)

    return (
        <section>
            <div className={styles.category}>
                <div className={styles.borderBottom}></div>
                <h3>{title? title : "Autres articles"}</h3>
                <div className={styles.borderBottom}></div>
            </div>
            {data.edges.map((article, i) => {
                return (
            <div className={styles.articleSuite}>
                <p className={styles.desktop}>{article.node.dateDePublication}, <br/> par {article.node.auteur.map((auteur, i) => {return(<AniLink paintDrip hex="black" duration={0.8} to={`/auteur/${auteur.slug}`} className={styles.authorSpan} key={i}> {auteur.nom}</AniLink>)})}</p>
                {/* <div className={styles.secondImage}></div> */}
                <BackgroundImage className={`${styles.secondImage} ${styles.desktop}`} fluid={article.node.photoPrincipale.fluid}/>
                <div>
                    <AniLink paintDrip hex="black" duration={0.8} to={`/article/${article.node.slug}`}>
                        <h2>{article.node.titre}</h2>
                    </AniLink>
                    {/* <p className={styles.mobile}>{article.node.dateDePublication}, par {article.node.auteur.nom}</p> */}
                    <p>{article.node.presentation.presentation}</p>
                </div>
            </div>
                )
            })}
        </section>
    )
}

export default ArticleList2
