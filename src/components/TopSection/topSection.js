import React from 'react'
import styles from './TopSection.module.css'
import ResultStatus from './ResultStatus/resultStatus'
import RecentQuiz from './RecentQuiz/recentQuiz'

export default function TopSection() {
  return (
    <div className={styles.top_section}>
      <ResultStatus />
      <RecentQuiz />
    </div>
  )
}
