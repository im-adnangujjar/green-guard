// import { StylesProvider } from '@chakra-ui/react'
import React from 'react'
import styles from "../../../../style/ThirdSection.module.css"

function ThirdSection() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.display}>
        <div className={styles.align}>
          <h1 className={styles.heading}>What is </h1>
          <h1 className={styles.heading1}>Malvertising?</h1>
          <p className={styles.paragraphs}>Malvertising is a malicious cyber strategy that uses online advertising to spread malware. It can be difficult to detect because it’s frequently delivered by believable ad networks. Once clicked on, they can change the security access to your system, leaving your computer exposed to hackers and cybercriminals.</p>
        </div>
        <div className={styles.imageDisplay}>
        <img className={styles.image}src={"/image5.png" } alt="image not found" /> </div>
        </div>
        
      <div className={styles.display}>
        <div >
          <h1 className={styles.heading}>Protection for You   </h1>
          <h1 className={styles.heading1}>and Your Computer </h1>
          <p className={styles.paragraphs2}>Our adblocker stops more
            than pop-ups. It guards you from malware and data profiling, so
            you can browse threat-free 24/7. All while
            keeping your data 100% private, even from us!</p>
        </div>
        <div className={styles.imageDisplay}>
        <img  className={styles.image}src={"/image6.png"} alt="image not found" />
        </div>
      </div>
    </div>
  )
}

export default ThirdSection