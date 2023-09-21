import React from 'react'
import styles from './SideBar.module.scss'
import Logo from './Logo'
import Menu from './Menu'

const SideBar = () => {
  return (
	  <aside className={styles.sideBar}>
      <div>
        <Logo />
        <Menu />
      </div>
      <div>
        test
      </div>
    </aside>
  )
}

export default SideBar