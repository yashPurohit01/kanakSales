import React from 'react'
import styles from '../styles/contact.module.scss'
import { BiLastPage } from 'react-icons/bi'
import Image from 'next/image'
import { GeneralInformation } from '../Components/Informations'
import { FaMapMarkerAlt} from 'react-icons/fa'
import { GiRotaryPhone } from 'react-icons/gi'
import { BsTelephoneFill , BsPeopleFill} from 'react-icons/bs'

function Contact() {



  return (
    <div className={styles.contact}>
      <div className={styles.pageHeader}>
        <BiLastPage />
        <span>Contact Us</span>
      </div>
      <div className={styles.all}>
       
        <div className={styles.info_container}>

          <div className={styles.icons}>
            <BsPeopleFill />
          </div>
          <div>
          <p>{GeneralInformation.contactMob}</p>
          </div>
          
        </div>

        <div className={styles.info_container}>
          <div className={styles.icons}>
            <GiRotaryPhone />
          </div>  
            <p>{GeneralInformation.contactTel}</p>       
        </div>

        <div className={styles.info_container}>
          <div className={styles.icons}>
            <FaMapMarkerAlt/>
          </div>
          
            <p>{GeneralInformation.location}</p>
      
        </div>
      </div>

      <div className={styles.location}>
        <Image src="/images/location.png" alt="location" height="800" width="1500" />
      </div>
      <div className={styles.note}>
        <p>Please feel free to keep in touch with us about any of your business related requirements/queries.</p>
        <div className={styles.call}> call on : {GeneralInformation.contactTel} </div>
      </div>
    </div>
  )
}

export default Contact