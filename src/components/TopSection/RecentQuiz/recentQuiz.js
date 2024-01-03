import React from 'react'
import styles from './RecentQuiz.module.css'
import RecentQuizCard from './RecentQuizCard/recentQuizCard'

export default function RecentQuiz() {
  return (
    <div className={styles.container}>
        <h2>Recent Quiz</h2>
        <div className={styles.cards}>
            <RecentQuizCard title="Reading" progress="65" progressColor="var(--blue)" />
            <RecentQuizCard title="Speaking" progress="85"  progressColor="var(--royal-blue)"/>
        </div>
    </div>
  )
}
