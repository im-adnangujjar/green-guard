import React from 'react'
import styles from "../../../../style/FooterSection.module.css"
import Button1 from  "../../../component/button1/Button1"

function FooterSection() {
    return (
        <div>
            <div className={styles.shape}></div>
            
            <div className={styles.bgColor}>
            <div className={styles.mainContainer}>
                <div className={styles.display}>
                    <div>
                        <h1 className={styles.heading}>Ending Misclick Anxiety</h1>
                        <p className={styles.paragraph}>We’ve all experienced that gut-flipping moment of clicking something on accident. It either ends in a mass flow of pop ups or never-ending anxiety that our computer has been compromised. We got tired of that feeling, which is why we made GreenGuard, so it doesn’t matter what you click, you’ll always be protected.</p>
                    </div>

                    <img className={styles.image} src={"/image.png"} alt="image not found" />
                </div>
                <div className={styles.display1}>
                    <h1 className={styles.heading1}>Still have questions about GreenGuard Adblocker?</h1>
                    <div className={styles.button}>Visit our FAQ!</div>
                </div>
                <p className={styles.paragraph1}>Block Ads For Good</p>
                <p  className={styles.paragraph2}>Download GreenGuard Today</p>
                <div className={styles.margin}><Button1/></div>
            </div>
            </div>
        </div>
    )
}

export default FooterSection