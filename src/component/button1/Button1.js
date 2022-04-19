import { Heading } from '@chakra-ui/react'
import React from 'react'
import styles from "../../../style/Button1.module.css"

function Button1() {
    return (
        <div className={styles.mainContainer}>
             <div style={{margin:'0px 20px 30px '}}>
            <div className={styles.button}>
                <div className={styles.display}>
                    <img src={"/chrome.png"} alt="image not found" />
                    <div>
                        <h2 className={styles.heading}>Chrome</h2>
                        <h2 className={styles.heading1}>version 1.2</h2>
                    </div>
                </div>
                </div>
            </div>
            <div style={{margin:'0px 20px 30px'}}>
            <div className={styles.button}>
                <div className={styles.display}>
                    <img src={"/opera.png"} alt="image not found" />
                    <div>
                        <h2 className={styles.heading}>Opera</h2>
                        <h2 className={styles.heading1}>version 1.2</h2>
                    </div>
                </div>
            </div>
            </div>
            <div style={{margin:'0px 20px 30px '}}>
            <div className={styles.button}>
                <div className={styles.display}>
                    <img src={"/firefox.png"} alt="image not found" />
                    <div>
                        <h2 className={styles.heading}>Firefox</h2>
                        <h2 className={styles.heading1}>Coming soon</h2>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Button1