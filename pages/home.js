import React from 'react'
import HeaderSection from '../src/pages/home/headerSection/HeaderSection'
import LastSection from '../src/pages/home/lastSection/LastSection'
import ThirdSection from '../src/pages/home/thirdSection/ThirdSection'
import SecondSection from '../src/pages/home/secondSection/SecondSection'

function home() {
  return (
    <div>
        <HeaderSection/>
        <SecondSection/>
        <ThirdSection/>
        <LastSection/>
    </div>
  )
}

export default home