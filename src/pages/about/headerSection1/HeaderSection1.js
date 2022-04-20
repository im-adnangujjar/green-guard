import React from 'react'
import styles from  "../../../../style/HeaderSection1.module.css"
import Navbar from '../../../component/navbar/Navbar'
import Button1 from '../../../component/button1/Button1'
import Dropdown from "../../../component/dropdown/Dropdown"
import { dropDown } from "../../../constant/Data"

function About() {

  return (
    <div className={styles.mainContainer}>
      <div className={styles.subDiv}>
      <div><Navbar /></div>

      <h2 className={styles.heading}>FAQ</h2>
      {
        dropDown.map((item, index) => {
          return (
            <Dropdown key={index} dropDown={item} />
          )
        }
        )}
     <div className={styles.bgImage}><h2 className={styles.heading2}>Watch Short Video</h2>
      <div className={styles.bgDisplay}>
      <div className={styles.bgColor}>
        <div className={styles.bgDisplay}><img className={styles.image} src={"/play.png"} alt="image not found"/></div></div>
      </div>
      <p className={styles.heading3}>Download GreenGuard</p>
      <div className={styles.margin}><Button1/></div>
      </div>
      </div>
        </div>
  )
}
export default About