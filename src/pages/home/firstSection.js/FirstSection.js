import React from 'react'
import styles from "../../../../style/FirstSection.module.css"

function FirstSection() {
  return (
    <div className={styles.mainContainer}>
      <div  className={styles.display}>
      <img src={"/treeimage.png"} className={styles.treeImage} alt="treeImage"/>
      <div className={styles.padding}>
        <h1 className={styles.heading}>Less Ads, Safer Browsing</h1>
        <p className={styles.paragraph}>Ads are annoying, slow down our browsers and can hide spyware and malware inside of them. Our adblocker weeds out the bad ads, so your data stays safe and your browser keeps running fast.</p>
      </div>
      </div>
      <div className={styles.display}>
        <div className={styles.padding1}>
        <h1 className={styles.heading1}> Bring on the Trees</h1>
        <p className={styles.paragraph1}>Trees are the lungs of our planet and the heart of our business. That’s why we partner with the shops you love to plant trees at no extra cost to you. We’re the only adblocker with both a healthy browsing and living experience as our mission.</p>
        </div>
    <img src={"/treeimage1.png"} alt ="image not found"/>
    </div>
    </div>
  )
}
export default FirstSection