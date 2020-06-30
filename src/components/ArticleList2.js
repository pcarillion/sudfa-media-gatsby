import React, {useEffect, useState} from 'react'


// js

// css
import styles from '../css/category.module.css'

// plugins
import BackgroundImage from 'gatsby-background-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { AnchorLink } from "gatsby-plugin-anchor-links";



const ArticleList2 = ({data, title, slug}) => {


    console.log(data)

    // create pages in an array of arrays

    const amountPosts = data.edges

    const numberOfPages = Math.ceil(amountPosts.length / 6)

    const arrayOfArrays = []

    for (let i = 0; i < numberOfPages; i ++) {
        let startCount = 6 * i;
        console.log(startCount)
        arrayOfArrays.push(amountPosts.slice(startCount, startCount + 6))
    }

    console.log(arrayOfArrays)

    // create pagination system


    const [page, setPage] = useState(0);

    const onglets = []

    console.log(numberOfPages)

    for (let j = 0; j < numberOfPages; j ++){
        console.log(j)
        onglets.push(<AnchorLink to={`${slug}#list`}><button
                        key={j} 
                        onClick={() => setPage(j)}
                        className={`${styles.pageNumber} ${page === j && styles.active}`}
                    >
                    {j + 1}
                    </button></AnchorLink>)
    }

    console.log(onglets)

    return (
        <section className={styles.articleList2} >
            <div className={styles.category} id='list'>
                <div className={styles.borderBottom}></div>
                <h3>{title? title : "Autres articles"}</h3>
                <div className={styles.borderBottom}></div>
            </div>
            {arrayOfArrays[page].map((article, i) => {
                return (
            <div className={styles.articleSuite}>
                <p className={styles.desktop}>{article.node.dateDePublication}, <br/> par {article.node.auteur.map((auteur, i) => {return(<AniLink paintDrip hex="black" duration={0.8} to={`/auteur/${auteur.slug}`} className={styles.authorSpan} key={i}> {auteur.nom}</AniLink>)})}</p>
                {/* <div className={styles.secondImage}></div> */}
                <BackgroundImage className={`${styles.secondImage} ${styles.desktop}`} fluid={article.node.photoPrincipale.fluid}/>
                <div>
                    <AniLink paintDrip hex="black" duration={0.8} to={`/article/${article.node.slug}`}>
                        <h2>{article.node.titre}</h2>
                    </AniLink>
                    <p className={styles.mobile}>{article.node.dateDePublication}, par {article.node.auteur.map((auteur, i) => {return(<AniLink paintDrip hex="black" duration={0.8} to={`/auteur/${auteur.slug}`} className={styles.authorSpan} key={i}> {auteur.nom}</AniLink>)})}</p>
                    <p>{article.node.presentation.presentation}</p>
                </div>
            </div>
                )
            })}
            <div className={`${styles.paginationDiv} row-between-center`}>
                {page > 0 ? <AnchorLink to={`${slug}#list`}><button onClick={() => setPage(page - 1)}  className={styles.nextPrev}>Page précédente</button></AnchorLink> : <div className={styles.nextPrevDiv}></div>}
                    {numberOfPages > 1 && onglets}
                {page + 1 < numberOfPages ? <AnchorLink to={`${slug}#list`}><button onClick={() => setPage(page + 1)} className={styles.nextPrev}>Page Suivante</button></AnchorLink> : <div className={styles.nextPrevDiv}></div>}
            </div>
        </section>
    )
}

export default ArticleList2
