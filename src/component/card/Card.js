import React from 'react'
import styles from "../../../style/Card.module.css"

function Card({trend}) {
  return (
  
          
      
    <div className={styles.bgColor}>
       <img src={trend.img} alt="image not found" />
       <p className={styles.paragraph}>{trend.title}</p>

    </div>
  
  )
}

export default Card