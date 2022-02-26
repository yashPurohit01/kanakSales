import Image from 'next/image'
import React from 'react'
import styles from '../styles/products.module.scss';
import { BiLastPage } from 'react-icons/bi'
import { ProductsInformations } from '../Components/Informations';


function Products() {

  return (
    <div className={styles.products}>
      <div className={styles.pageHeader}>
        <BiLastPage />
        <span>Products</span>
      </div>
      <div className={styles.productheading}>
        <h2>Manufacturing units </h2>
        <div className={styles.horizontalrow} />
      </div>
      <div className={styles.listedProducts}>


        {
          ProductsInformations.map(product => {
            return (
              <div className={styles.productcontainer} key={product.id}>
                <div className={styles.productImg}>
                  <Image src={product.productpath} alt={product.productName} width="250" height="250" />
                  <p className={styles.productName}>{product.productName}</p>
                </div>
                {/*   <div className={styles.productDesc}>
                <p>{product.productDescription}</p>
              </div> */}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Products