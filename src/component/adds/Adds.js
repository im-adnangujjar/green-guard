import React from 'react'
import styles from '../../../style/Adds.module.css'

function Adds({ services }) {
    return (
        <div>
        
            <h1 className={styles.heading1}>{services.value}</h1>
            <p className={styles.heading}>{services.title}</p>
            <div className={styles.display}>
                <div className={styles.border}></div>
            </div>
            <div className={styles.display}>
                <p className={styles.paragraph} >{services.text}</p>
            </div>
        </div>
    )
}

export default Adds