import Image from 'next/image'
import ControlledCarousel from '../Components/shared/Caurosel/Caurosel'
import { BsCheck2Square } from 'react-icons/bs'
import { AiFillSafetyCertificate } from 'react-icons/ai'
import styles from '../styles/Home.module.scss'
import { GeneralInformation, HomeBrandPromotion, HomeQuanlityCard, reviews, vision } from '../Components/Informations';
import { FiCheckCircle } from 'react-icons/fi'
import { FaHandshake } from 'react-icons/fa'
import QualityCard from '../Components/HomeQualityCard/QualityCard';

export default function Home() {

  const { description ,contactTel } = GeneralInformation
  const { des } = vision
  return (
    <div className={styles.container}>
      {/*  <AutoPlay/>  */}
      <ControlledCarousel/>

      <div className={styles.home_first_row}>
        <div className={styles.home_info_card}>
          <div className={styles.home_info_child}>
            <div className={styles.home_row_card}>
              <FiCheckCircle />
              <h2>Quality</h2>
              <p>{description}</p>
            </div>

          </div>
          <div className={styles.home_info_child}>
            <div className={styles.home_row_card}>
              <FaHandshake />
              <h2>Service</h2>
              <p>{description}</p>
            </div>
          </div>
          <div className={styles.home_info_child}>
            <div className={styles.home_row_card}>
              <AiFillSafetyCertificate />
              <h2>Trust</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.home_second_row}>

        <div className={styles.card}>
          <QualityCard />
        </div> 
    {/*  */}
        
        <div className={styles.inner_heading}>
                    <h2>Assurance with our Product</h2>
                    <div className={styles.inner_content}>
                        {HomeQuanlityCard.map(content => {
                            return (
                                <div key={content.id} className={styles.cardItems}>
                                    <div className={styles.logo}>
                                        <BsCheck2Square />
                                    </div>
                                    <p>{content.des}</p>
                                </div>
                            )
                        })

                        }

                    </div>
                    <button className={styles.cardbttn}>
                        Call {contactTel}
                    </button>
                </div>
        </div>
      

      <div className={styles.home_brands_informations}>
        {/* <div className={styles.home_brands_informations_heading}>
          <h3>Company Two Popular Brand </h3>
        </div> */}
        <div className={styles.home_brands_content}>
          <div className={styles.logo}>
            <div className={styles.brand_logo}>
              <Image src="/images/companylogo.png" alt="logo" height="150" width="150" />
            </div>
            <div className={styles.brand_logo}>
              <Image src="/images/SHARK.png" alt="logo" height="140" width="200" />
            </div>
          </div>
          <div className={styles.text}>
            <span>Kanak Sales Corporation</span>
            <p>
              <strong>{HomeBrandPromotion.tittle}</strong>
              {HomeBrandPromotion.description}
              <div className={styles.products_info}>
                
                {HomeBrandPromotion.products.map((product, idx) =>{
                  return(
                    <div key={idx} className={styles.items_val}>
                       <strong>
                         {product}
                       </strong>
                    </div>
                  )
                })
              
              
              }
              </div>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.home_third_row}>
  {/*       <div className={styles.ownerImg}>

          <Image src="/images/owner01.jpg" height="385" width="280" alt="owner image" />

        </div> */}
        <div className={styles.vision_desc}>
          <h3>Our Vision</h3>
          {/* <strong>"</strong> */}

         {/*  <p>{des}</p> */}
          {
            des.map((data , indx)=>{
              return(
              
                  <p key={indx}>{data}</p>
                
              )
            })
          }
        {/*   <strong className={styles.left_col}>"</strong> */}
        </div>
      </div>

    </div>
  )
}
