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
import Decouvrez from '../components/Author/Decouvrez'

export default (data) => (

    
    <Layout>
        <SEO title="Sudfa Media" description="Petit média franco-soudanais"/>
        <div className={styles.homeDiv}>
            <Main/>
            <Editeurs/>
            <Politique/>
            <Culture/>
        </div>
        <Decouvrez/>
    </Layout>
)

 
