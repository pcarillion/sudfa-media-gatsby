import React from 'react'

// js
import Layout from '../components/Layout'
import ArticleList from '../components/ArticleList'
import ArticleList2 from '../components/ArticleList2'

// css
import styles from '../css/category.module.css'

const Culture = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <h1>Culture</h1>
                <p className={styles.presentation}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in felis elit. Cras gravida placerat dui, vel eleifend felis convallis ut. Sed cursus ornare dignissim. Praesent venenatis magna nec sollicitudin commodo. Fusce ex libero, ultrices consequat posuere non, volutpat nec nunc. </p>
                <div className={styles.line}></div>
                <ArticleList/>
                <ArticleList2/>
            </div>
        </Layout>
    )
}

export default Culture
