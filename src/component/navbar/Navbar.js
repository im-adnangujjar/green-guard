import React from 'react'
import styles from "../../../style/navbar.module.css"
import { Link } from '@chakra-ui/react'

function Navbar() {
  return (
    <div className={styles.display}>
        <div>
            <img src ={"/Logo.png"} alt ="logo" />
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
    </div>
  )
}

export default Navbar