import React from 'react'
import styles from './BottomSection.module.css'
import PopularQuizCard from './PopularQuizCard/popularQuizCard'

export default function BottomSection() {
  return (
    <div className={styles.bottom_section}>
        <h2 className={styles.h2}>Popular Quiz</h2>
        <div className={styles.cards}>
            <PopularQuizCard title="Technology" questions="10" bgColor="var(--bg-icon-yellow)" rate="4.8" />
            <PopularQuizCard title="Sport" questions="10" bgColor="var(--bg-icon-blue)" rate="4.8" />
            <PopularQuizCard title="Music" questions="10" bgColor="var(--bg-icon-red)" rate="4.8" />
        </div>
    </div>
  )
}
