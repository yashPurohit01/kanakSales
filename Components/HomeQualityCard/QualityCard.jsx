import React from 'react';
import { GeneralInformation, HomeQuanlityCard } from '../Informations';
import styles from './card.module.scss';
import { BsCheck2Square } from 'react-icons/bs'
import { Button } from 'react-bootstrap';
function QualityCard() {
    const { contactTel} = GeneralInformation
    return (
        <div className={styles.cardContainer}>
            <div className={styles.card_outer_div}>
                <div className={styles.card_inner_heading}>
                    <h2>Assurance with our Product</h2>
                    <div className={styles.card_inner_content}>
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
                    <Button>
                        Call {contactTel}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default QualityCard