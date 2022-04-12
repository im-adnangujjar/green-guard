import React from 'react'
import styles from "../../../style/Button.module.css"

function button() {
    return (

        <div className={styles.mainContainer}>

     
        <div className={styles.button}>
            <div className={styles.display}>
                <img src={"/download.png"} alt="img not found" />
                <p className={styles.buttonText}> Download Extension</p>
            </div>
        </div>
        </div>

    )
}

export default button