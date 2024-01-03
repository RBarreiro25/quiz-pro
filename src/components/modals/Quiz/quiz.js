import React, { useState } from 'react'
import styles from './Quiz.module.css'
import returnButton from '../assets/arrow-back-icon.svg'
import smallClock from './assets/small-clock-icon.svg'

export default function Quiz( {title, maxTime, setShowQuizModal} ) {
    const [isClosing, setIsClosing] = useState(false);
    function handleCloseModal() {
        setIsClosing(true);
        setTimeout(() => {
            setShowQuizModal(false);
        }, 200);
    }
  return (
    <div className={`${styles.modal} ${isClosing ? styles.closing : ''}`}>
        <div className={`${styles.modal_content} ${isClosing ? styles.closing : ''}`}>
          <div className={styles.modal_header}>
                <button className={styles.return_button} onClick={handleCloseModal}>
                    <img src={returnButton} alt='Return button that closes the Quiz modal' />
                </button>
                <h3>{title}</h3>
                <div className={styles.cronometer}>
                    <img  src={smallClock} alt='Small clock that shows the remaing time to finish the quiz' />
                    {/* <div>{cronometer()}</div> */}
                </div>
          </div>
          <div className={styles.quiz_progress}>

          </div>
          <section className={styles.quiz_questions}>

          </section>
          <div className={styles.buttons}>
            <button className={`${styles.modal_button} ${styles.button_blue} ${styles.button_medium}`}>
                Previous
            </button>
            <button className={`${styles.modal_button} ${styles.button_outlined} ${styles.button_medium}`}>
                Next
            </button>
          </div>
        </div>
      </div>
  )
}
