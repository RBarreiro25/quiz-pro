import React from 'react'
import styles from './ResultStatus.module.css'
import resultsChart from './assets/results-chat.svg'

export default function resultStatus() {
  return (
    <div className={styles.container}>
        <img src={resultsChart} alt='Results chart showing the average number of completed quizzes with a circular progression around it.' />
        <div className={styles.text_content}>
            <h2>Good Result!</h2>
            <p>Share your achievement with your friend</p>
        </div>
    </div>
  )
}
