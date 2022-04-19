import React from 'react'
import { useDisclosure, Collapse, Box } from '@chakra-ui/react'
import styles from "../../../style/Dropdown.module.css"

function Dropdown({dropDown}) {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <div>
         <div className={styles.align}>
    <div className={styles.subDiv}>
      <div className={styles.display}>
        <p className={styles.paragraph}>{dropDown.numbers}</p>
        <h1 className={styles.heading}>{dropDown.title}</h1>
        <div onClick={onToggle}><img src={"/plus.png"} alt="image not found" /></div>
      </div>
      <Collapse in={isOpen} animateOpacity>
        <Box
        width='100%'
        m='0px 0px 0px 0px'
          p='40px'
          mt='4'
          bg='white'
          rounded='md'
          shadow='md'
        >
          <p className={styles.paragraph1}>{dropDown.text}</p>
        </Box>
      </Collapse>
    </div>
  </div>
  </div>
  )
}

export default Dropdown