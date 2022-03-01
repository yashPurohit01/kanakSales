import React from 'react'
import styles from '../styles/about.module.scss'
import { BiLastPage } from 'react-icons/bi'

function About() {
  return (
    <div className={styles.abouts}>
      <div className={styles.pageHeader}>
        <BiLastPage />
        <span>About</span>
      </div>

    </div>
  )
}

export default About