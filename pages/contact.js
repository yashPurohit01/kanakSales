import React from 'react'
import styles from '../styles/contact.module.scss'
import { BiLastPage } from 'react-icons/bi'
import Image from 'next/image'
import { ContactPerson, GeneralInformation } from '../Components/Informations'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { GiRotaryPhone } from 'react-icons/gi'
import { BsTelephoneFill, BsPeopleFill } from 'react-icons/bs'

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
          <div className={styles.info_contact_div}>
            <h6>Contact Person</h6>
            {
              ContactPerson.map(detail => {
                return (
                  <div >
                    <h5>{detail.name}</h5>
                    <p>{detail.number}</p>
                  </div>
                )
              })
            }
            <p>{GeneralInformation.email}</p>
          </div>

        </div>

        <div className={styles.info_container}>
          <div className={styles.icons}>
            <GiRotaryPhone />
          </div>
          <div className={styles.info_contact_div}>
            <h6>General Contact </h6>
            <p>Tel :{GeneralInformation.contactTel}</p>
            <p>Mobile :+91-{GeneralInformation.contactMob2}</p>
            <p>Mobile :+91-{GeneralInformation.contactMob}</p>
          </div>

        </div>

        <div className={styles.info_container}>
          <div className={styles.icons}>
            <FaMapMarkerAlt />
          </div>
          <div className={styles.info_contact_div}>
            <h6>Address</h6>
            <p>{GeneralInformation.splitAdd.main}</p>
            <p>{GeneralInformation.splitAdd.city}</p>
            <p>{GeneralInformation.splitAdd.country}</p>
          </div>


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