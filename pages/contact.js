import React from 'react'
import styles from '../styles/about.module.scss'
import { BiLastPage } from 'react-icons/bi'

function Contact() {
  return (
    <div className={styles.abouts}>
      <div className={styles.pageHeader}>
        <BiLastPage />
        <span>Contact Us</span>
      </div>

    </div>
  )
}

export default Contact