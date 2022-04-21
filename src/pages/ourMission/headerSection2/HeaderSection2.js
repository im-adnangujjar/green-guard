import React from 'react'
import Card from "../../../component/card/Card"
import { trend } from "../../../constant/Data"
import FooterSection from '../footerSection/FooterSection'
import Navbar from '../../../component/navbar/Navbar'
import styles from "../../../../style/HeaderSection2.module.css"



function OurMission() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.subDiv}>
        <div className={styles.Navigation}>
        <Navbar  />
        </div>
      
        <div className={styles.display}>
          <div>
            <h2 className={styles.heading}>Our Mission</h2>
            <h3 className={styles.heading1}>At GreenGuard We Take Our Name Literally</h3>
            <p className={styles.paragraph}>We’re the only adblocker (that we know of) that blocks all ads, protects you from malware/tracking and guards the earth while you enjoy a better, faster browsing experience. </p>
          </div>
          <div className={styles.imageCenter}>
            <img className={styles.imageMargin} src={"/image1.png"} alt="image not found" />
          </div>
        </div>

        <div className={styles.tree}><img src={"/tree.png"} /></div>

        <div className={styles.display2}>
          <div className={styles.image}>
            <img src={"/leafs.png"} alt="image not found" />
            <h2 className={styles.leafHeading}>Our DNA</h2>
            <p className={styles.leafParagraph}>We are Rik and Bartel Blom, two brothers who share the same respect our grandfather had for the environment. Our passion for building a better online experience just happened to turn into a way for us to fulfill our purpose of helping the earth.</p>
          </div>
          <div className={styles.image1}>
            <img src={"/icon.png"} alt="image not found" />
            <h1 className={styles.leafHeading}>Our Inspiration</h1>
            <p className={styles.leafParagraph}>Our grandfather was the director of a woodcutting company in Africa. Doesn’t sound very inspiring does it? The thing is, his company was one of the few that planted the same amount of trees that they cut down. </p>
          </div>
        </div>
        <div className={styles.bgCenter} >
          <div className={styles.image2}>

            <img src={"/icon.png"} alt="image not found" />
            <h1 className={styles.leafHeading}>Continuing Tradition </h1>
            <p className={styles.leafParagraph}>Obviously, we won’t be cutting down any trees. But with our adblocker, we hope to raise enough funds to replace as many carelessly destroyed trees as we can.</p>
          </div>
        </div>

        <h2 className={styles.heading2} >Reversing the trend</h2>

        <div className={styles.mapDisplay}>
          {
            trend.map((item, index) => {

              return <Card key={index} trend={item} />
            })
          }
        </div>
      </div>
      <FooterSection />
    </div>
  )
}

export default OurMission