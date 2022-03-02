import Link from 'next/link'
import React from 'react'
import styles from './header.module.scss'
import { ImLocation2 } from 'react-icons/im'
import { IoMdMailUnread } from 'react-icons/io'
import { GeneralInformation } from '../Informations'
import { MdCall } from 'react-icons/md'
import { RiSettings6Fill } from 'react-icons/ri'
import Image from 'next/image'
import NavBar from '../shared/NavBar/NavBar'
import DropDownNavBar from '../shared/NavBar/DropDownNavBar'



function HeaderComponent() {
    const { email, location, contactMob, contactTel, companyName, companyDesc, Date, timeLaps } = GeneralInformation

    return (
        <div>
            <section className={styles.headerContainer} >
                <div className={styles.top_section}>
                    <div className={styles.first_child}>
                        <div className={styles.infosec}>
                            <ImLocation2 />
                            <span className={styles.locationinfo}>{location}</span>
                        </div>
                    </div>
                    <div className={styles.second_child}>
                        <div className={styles.infosec}>
                            <div>
                                <IoMdMailUnread className={styles.icon} />
                                <span className={styles.emailinfo}>{email}</span>
                            </div>
                            <div>
                                <MdCall className={styles.icon} />
                                <span className={styles.Mobinfo}>{contactMob}</span>
                            </div>

                        </div>
                    </div>
                    <div>

                    </div>


                </div>
                <div className={styles.Mid_Section}>
                    <div className={styles.companyLogoInfo}>
                        <Image src="/images/companylogo.png" alt="comapnyLogo" width="100" height="100" />
                        <div className={styles.companyMainInfo} >
                            <span className={styles.comName}>{companyName}</span>
                            <div className={styles.horizontalLine} />
                            <p className={styles.comDes}>{companyDesc}</p>
                        </div>
                    </div>
                    <div className={styles.col_two}>
                        <div className={styles.trustlogo}>
                            <RiSettings6Fill />
                        </div>
                        <div className={styles.basicInfo}>
                            <h2>{timeLaps}</h2>
                            <p className={styles.basicPara}>An ISO Certified Since 9001:2000</p>
                        </div>

                    </div>
                   {/*  <div className={styles.callInfo}>
                        <div className={styles.callLogo}>
                            <MdCall />
                            <h3 style={{ marginBottom: 0 }}>Tel</h3>
                        </div>

                        <p style={{ margin: 0 }}>{contactTel}</p>
                    </div> */}
                    <div className={styles.NavBar}>
                         <NavBar /> 
             
                    </div>
                </div>
               {/*  <div>
                <DropDownNavBar/>
                </div> */}
                <div className={styles.navigations}>
                    <div className={styles.navLinks}>

                        <div className={styles.pageLink} >
                            <Link href="/" ><a>HOME</a></Link>
                        </div>
                        <div className={styles.pageLink}>
                            <Link href="/products"><a>PRODUCTS</a></Link>
                        </div>
                        <div className={styles.pageLink}>
                            <Link href="/about"><a>ABOUT US</a></Link>
                        </div>
                        <div className={styles.pageLink}>
                            <Link href="/contact"><a>CONTACT US</a></Link>
                        </div>
                    </div>



                </div>

            </section>
        </div>
    )
}

export default HeaderComponent