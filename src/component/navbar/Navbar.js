import { useState } from 'react'
import styles from "../../../style/navbar.module.css"
import { Link } from '@chakra-ui/react'
import { HamburgerIcon,CloseIcon } from '@chakra-ui/icons'

function Navbar() {
  const [show, setShow] = useState(false)

  const onclickHandler = (() => {
    setShow(!show)
  })

 


  return (
    <div className={styles.display}>
      <div>
        <img src={"/Logo.png"} alt="logo" />
      </div>

      <ul className={styles.list}
      >
        <Link href='/'>
          <li className={styles.li}>Home</li>
        </Link>
        <Link href='/ourMission'>
          <li className={styles.li}>Our Mission</li>
        </Link>
        <Link href='/about'>
          <li className={styles.li}>About</li>
        </Link>
        <div className={styles.button}>download</div>
      </ul>
      {show? 
      <div className={styles.icon}>
        <div onClick={onclickHandler}>
        <CloseIcon />
        </div>
      </div>
      :
      <div  className={styles.icon}>
        <div onClick={onclickHandler}><HamburgerIcon /></div>
        </div>
}

      {show?

      <div >
        <ul className={styles.listItem}
    ><div className={styles.center}>

    
      <Link href='/'>
        <li className={styles.li}>Home</li>
        </Link>
        <Link href='/ourMission'>
        <li className={styles.li}>Our Mission</li>
        </Link>
        <Link href='/about'>
        <li className={styles.li}>About</li>
        </Link>
        <div className={styles.button}>download</div>
        </div>
    </ul>
      </div>
      :''
}
    </div>
  )
}

export default Navbar