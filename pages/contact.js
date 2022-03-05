import React from 'react'
import styles from '../styles/contact.module.scss'
import { BiLastPage  } from 'react-icons/bi'
import Image from 'next/image' 
import { GeneralInformation } from '../Components/Informations'
import { GrMapLocation} from 'react-icons/gr'



function Contact() {
  
  

  return (
    <div className={styles.contact}>
      <div className={styles.pageHeader}>
        <BiLastPage />
        <span>Contact Us</span>
      </div>
      <div>
        <div>
          <GrMapLocation/>
          <div>
            <p></p>
          </div>
        </div>
      </div>
     
      <div className={styles.location}>
        <Image src="/images/location.png" alt="location" height="800" width="1500"/>
      </div>
      <div className={styles.note}>
        <p>Please feel free to keep in touch with us about any of your business related requirements/queries.</p>
        <div className={styles.call}> call on : {GeneralInformation.contactTel} </div>
      </div>
    </div>
  )
}

export default Contact