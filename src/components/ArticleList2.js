import React from 'react'

// js

// css
import styles from '../css/category.module.css'

// plugins
import BackgroundImage from 'gatsby-background-image'


const ArticleList2 = ({data}) => {


    console.log(data)

    return (
        <section>
            <div className={styles.category}>
                <div className={styles.borderBottom}></div>
                <h3>Autres articles</h3>
                <div className={styles.borderBottom}></div>
            </div>
            {data.edges.map((article, i) => {
                return (
            <div className={styles.articleSuite}>
                <p className={styles.desktop}>{article.node.dateDePublication}, <br/> par {article.node.auteur.nom}</p>
                {/* <div className={styles.secondImage}></div> */}
                <BackgroundImage className={`${styles.secondImage} ${styles.desktop}`} fluid={article.node.photoPrincipale.fluid}/>
                <div>
                    <h2>{article.node.titre}</h2>
                    <p className={styles.mobile}>{article.node.dateDePublication}, par {article.node.auteur.nom}</p>
                    <p>{article.node.presentation.presentation}</p>
                </div>
            </div>
                )
            })}
        </section>
    )
}

export default ArticleList2
