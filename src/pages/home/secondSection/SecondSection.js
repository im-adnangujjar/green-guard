import React from 'react'
import styles from "../../../../style/SecondSection.module.css"
import Card1 from "../../../component/card1/Card1"
import { data } from "../../../constant/Data";
import Button from "../../../component/button/Button";

function SecondSection() {
  return (
    <div className={styles.bgImage}>
    
        <h2 className={styles.heading}>Get a Better Browsing Experience</h2>
        <div>
            <div  className={styles.display}>
{
    data.map((item,index)=>{
        return <Card1 key={index} data={item}/>
    })
}
</div>
      </div>
      <div className={styles.display1}>
      <Button/>
      </div>


    </div>
  )
}

export default SecondSection