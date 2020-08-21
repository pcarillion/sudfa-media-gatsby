import React from 'react'

// css
import styles from '../../css/auteur.module.css'

// plugins
import Image from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'


const Author = ({data}) => {

    console.log(data)

    return (
        <section className={styles.auteurSection}>
            {data.photo && <Image className={styles.imageDiv} fluid={data.photo.fluid}/>}    
            <div className={styles.contentDiv}>
                <AniLink paintDrip hex="black" duration={0.8} to={`/auteur/${data.slug}`}><h4>{data.nom}</h4></AniLink>
                {data.description && <p dangerouslySetInnerHTML={{__html: data.description.description}}></p>}
            </div>
        </section>
    )
}

export default Author
