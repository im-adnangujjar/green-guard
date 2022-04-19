
import styles from "../../../../style/LastSection.module.css"
import React from 'react'
import Button1 from "../../../component/button1/Button1"
import Adds from "../../../component/adds/Adds"
import { services } from  "../../../constant/Data"

function LastSection() {
  return (
    <div className={styles.bgImage}>
      <div className={styles.display}>

        <div>
          <img src={"/group-image.png"} className={styles.image} alt=" image not found" />
          <div className={styles.margin1}>
            <h1 className={styles.heading}>
              Make the Planet a Better Place
            </h1>
            <p className={styles.paragraph}>Trees are essential for climate regulation, carbon capture and biodiversity within animals and plants. And, they give us humans clean air, food and medicines. The problem is, they’re being cut down faster than they’re growing. By installing GreenGuard adblocker, you’re helping our world strengthen its lungs and take the breath it deserves. </p>
          </div>
        </div>

        <div className={styles.margin}>
          <h1 className={styles.heading}>How Are We Planting Trees?</h1>
          <p className={styles.paragraph}>We’ve partnered with thousands of online stores who are as passionate about the environment as we are. With every purchase you make, they give a small donation toward tree planting at no extra cost to you.</p>
          <p className={styles.paragraph}>Each tree is planted by tree-forward organizations like <ur>Trees for All</ur> and smaller non-profits like *names*.</p>
          <div className={styles.button}>GO GREEN WITH US</div>
          <p className={styles.paragraph1}>Total Trees Planted:</p>
          <h1 className={styles.heading1}>0014972</h1>
        </div>
      </div>
      <div className={styles.backgroundImage}>
        <h1 className={styles.heading2}>What Makes Us</h1>
<h1 className={styles.heading2}>the Best Adblocker? </h1>
      <div className={styles.display1}>

 
      {
         services.map((item,index)=>{
            return(
              <div key={index}>
              <Adds services={item}/>
              </div>
            )
         })
}
</div>
     </div>
     <div className={styles.textCenter}>
       <h1 className={styles.heading3}>Enjoy Ad Block
In Two Clicks</h1>
</div>
<Button1/>
   

    </div>
  )
}

export default LastSection