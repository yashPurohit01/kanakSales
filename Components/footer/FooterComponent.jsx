import Image from 'next/image'
import React from 'react'
import { GeneralInformation } from '../Informations'
import styles from './footer.module.scss'
import { BiCurrentLocation } from 'react-icons/bi'
import { MdCall } from 'react-icons/md'
import { IoMdMailUnread } from 'react-icons/io'
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
import Link from 'next/link'

function FooterComponent() {
  const { companyName, companyDesc, description, location, email, contactMob, splitAdd, contactMob3, contactMob2 } = GeneralInformation
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.companyInfo}>
          <div className={styles.companyMainInfo} >
            <span className={styles.comName}>{companyName}</span>
            <div className={styles.horizontalLine} />
            <p className={styles.comDes}>{companyDesc}</p>
          </div>
          <div className={styles.para}>
            <p>{description}</p>
            <h3>Company Brands</h3>
            <div className={styles.footer_logo}>
            <Image src="/images/companylogo.png" alt='logo' width="100" height="100" />
            <div className={styles.shark_logo}>
              <Image src="/images/SHARK02.png" height="90" width="150" alt="logo" />
            </div>
            </div>
          </div>
        </div>
        <div className={styles.contact}>
          <h3>Contact Information</h3>
          <div className={styles.hr} />
          <div className={styles.contact_container}>

            <div className={styles.info}>
              <div>
                <BiCurrentLocation />
              </div>
              {/*      <p className={styles.location}> {location}</p> */}
              <div className={styles.address}>
                <p>{splitAdd.main}</p>
                <p>{splitAdd.city}</p>
                <p>{splitAdd.country}</p>
              </div>
            </div>
            <div className={styles.info}>
              <div>
                <MdCall />
              </div>
              <p className={styles.location}>{contactMob} / {contactMob2} /{contactMob3}</p>
            </div>
            <div className={styles.info}>
              <div>
                <IoMdMailUnread />
              </div>
              <p className={styles.location}>{email}</p>
            </div>
          </div>
        </div>
        <div className={styles.quickLinks}>
          <h3>Quick Links</h3>
          <div className={styles.hr} />
          <div className={styles.navLinks}>

            <div className={styles.pageLink} >
              <Link href="/" ><a><li>HOME</li></a></Link>
            </div>
            <div className={styles.pageLink}>
              <Link href="/products"><a><li>PRODUCTS</li></a></Link>
            </div>
            <div className={styles.pageLink}>
              <Link href="/about"><a><li>ABOUT US</li></a></Link>
            </div>
            <div className={styles.pageLink}>
              <Link href="/contact"><a><li>CONTACT US</li></a></Link>
            </div>
          </div>
        </div>

      </div>
      <div className={styles.copyright}>
        <div className={styles.lowerFooter}>
          <span>ISO Certified 9001:2000</span>

          <div className={styles.socialMedia}>
            <Link href='' className={styles.medias}><a><AiFillFacebook /></a></Link>
            <Link href=''><a><AiFillInstagram /></a></Link>
          </div>

        </div>
      </div>
    </div>


  )
}

export default FooterComponent