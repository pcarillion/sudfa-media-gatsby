import React from "react"

// css
import styles from '../css/index.module.css'

// plugins

// js
import Layout from '../components/Layout'
import Main from '../Home/Main'
import Politique from '../Home/Politique'
import Editeurs from '../Home/Editeurs'
import Culture from '../Home/Culture'
import SEO from '../components/SEO'

export default (data) => (

    
    <Layout>
        <SEO title="Accueil" description="page d'accueil de Sudfa Média"/>
        <div className={styles.homeDiv}>
            <Main/>
            <Editeurs/>
            <Politique/>
            <Culture/>
        </div>
    </Layout>
)

 
