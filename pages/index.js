import Image from 'next/image'
import ControlledCarousel from '../Components/Caurosel/Caurosel'
import AutoPlay from '../Components/Caurosel/Slider'
import { GrCertificate } from 'react-icons/gr';
import { AiFillSafetyCertificate} from 'react-icons/ai'
import styles from '../styles/Home.module.scss'
import { GeneralInformation } from '../Components/Informations';
import { FiCheckCircle } from 'react-icons/fi'
import {FaHandshake} from 'react-icons/fa'

export default function Home() {

   const {description} = GeneralInformation
  return (
    <div className={styles.container}>
      {/*  <AutoPlay/>  */}
      <ControlledCarousel />
      <div>
        <div className={styles.home_first_row}>
          <div className={styles.home_info_card}>
            <div className={styles.home_info_child}>
              <div className={styles.home_row_card}>
                <FiCheckCircle/>
                <h2>Quality</h2>
                <p>{description}</p>
              </div>

            </div>
            <div className={styles.home_info_child}>
              <div  className={styles.home_row_card}>
                <FaHandshake />
                <h2>Service</h2>
                <p>{description}</p>
              </div>
            </div>
            <div className={styles.home_info_child}>
              <div  className={styles.home_row_card}>
                <AiFillSafetyCertificate/>
                <h2>Trust</h2>
                <p>{description}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
