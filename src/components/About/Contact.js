import React from 'react'
import styles from '../../css/about.module.css'


const Contact = () => {
    return (
        <section className={styles.contact}>
                <h3>Contactez-nous</h3>
                <form className={styles.form} action="https://formspree.io/pcarillion@yahoo.fr" method="POST">
                    <div>
                        <label htmlFor="name">Nom</label>
                        <input type="text" name="name" className={styles.formControl} placeholder="nom"/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" className={styles.formControl} placeholder="email"/>
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" className={styles.formControl} placeholder="message" rows="40"/>
                    </div>
                    <div>
                        <input type="submit" value="Envoyer" className={styles.submit}/>
                    </div>
                </form>

        </section>
    )
}

export default Contact
