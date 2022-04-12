import React from 'react'
import {data} from "../../constant/data";
import styles from "../../../style/Card.module.css"

function Card() {
  return (
      <div>
           <h2 className={styles.heading}>Reversing the trend</h2>
      
    <div className={styles.bgColor}>
       <img src={"/icon1.png"} alt="image not found" />
       <p className={styles.paragraph}>The UN announced 2021-2030 will be dedicated to Ecosystem Restoration</p>

    </div>
    </div>
  )
}

export default Card