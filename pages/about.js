import React from 'react'
import styles from '../styles/about.module.scss'
import { BiLastPage } from 'react-icons/bi'
import { about, GeneralInformation } from '../Components/Informations'
import Image from 'next/image'

function About() {
  const { companyName, companyDesc } = GeneralInformation;
  const { products, desc } = about
  return (
    <div className={styles.abouts}>
      <div className={styles.pageHeader}>
        <BiLastPage />
        <span>About</span>
      </div>
      <div className={styles.about_content_outer_div}>
        <div className={styles.about_content_heading}>
          <h3>{companyName}</h3>
          <p>-{companyDesc}</p>

        </div>
        <div className={styles.about_Description}>
          <Image src="/images/aboutImage.jpeg" alt="" height="800" width="500" />
          <div>
            <h4>Introduction</h4>
            <p>{desc.para1}</p>
            <p>{desc.para2}</p>
            <p>{desc.para3}</p>
            <p>{desc.para4}</p>
            <h4>Product Range</h4>
            {
              products.map(product => {
                return (
                  <div key={product.id}>
                    <li>  {product.name}</li>
                  </div>
                )
              })
            }
            <div>
              <Image src="/images/companyLogo.png" height="100" width="150" alt="logo" />
              <Image src="/images/SHARK.png" height="100" width="150" alt="logo" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About