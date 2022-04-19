import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HeaderSection from '../src/pages/home/headerSection/HeaderSection'
import FirstSection from '../src/pages/home/firstSection.js/FirstSection'
import SecondSection from '../src/pages/home/secondSection/SecondSection'
import ThirdSection from '../src/pages/home/thirdSection/ThirdSection'
import LastSection from '../src/pages/home/lastSection/LastSection'

export default function Home() {
  return (
    <div className={styles.container}>
       <HeaderSection/>
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <LastSection/>
    </div>
  )
}
