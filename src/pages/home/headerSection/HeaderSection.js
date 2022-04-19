import React from 'react'
import styles from "../../../../style/HeaderSection.module.css"
import Navbar from '../../../component/navbar/Navbar'
import Button from '../../../component/button/Button'

function HeaderSection() {
  return (
    <div className={styles.bgImage}>
      <div className={styles.subDiv}>
      <Navbar/>
      <div className={styles.display}>
        <div className={styles.item}>
          <h1 className={styles.heading}> The Sustainable Adblocker</h1>
          <p className={styles.paragraph}>Get rid of intrusive ads, online tracking and malware while planting trees. Browse faster, safer, and sustainably with GreenGuard.</p>
         <Button/>
          <p className={styles.paragraph3}>It’s free to help the earth breathe</p>
           </div>
       
        <img className={styles.image} src={"/block.png"} alt="image not found" />
        </div>
        </div> 
      </div>


  )
}

export default HeaderSection