import React from 'react'
import Navbar from "../../component/navbar/Navbar"
import styles from "../../../style/HeaderSection1.module.css"

function HeaderSection1() {
  return (
    <div className={styles.bgImage}>
        function CollapseEx() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Button onClick={onToggle}>Click Me</Button>
      <Collapse in={isOpen} animateOpacity>
        <Box
          p='40px'
          color='white'
          mt='4'
          bg='teal.500'
          rounded='md'
          shadow='md'
        >
          <Lorem count={1} />
        </Box>
      </Collapse>
    </>
  )
}
<Navbar/>
    </div>
  )
}

export default HeaderSection1