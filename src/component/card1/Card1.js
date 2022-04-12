import React from 'react'
import styles from  "../../../style/Card1.module.css" 
// import {data} from "../../constant/Data"

function Card1({data}) {
  return (
    <div className={styles.bgColor}>
        <img src= {'data.img'} alt="image not found"/>
        <p className={styles.paragraph}>{data.text}</p>
        

    </div>
  )
}

export default Card1