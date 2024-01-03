import React from 'react'
import styles from './RecentQuizCard.module.css'
import speakingIcon from './assets/speaking.svg'
import readingIcon from './assets/reading.svg'

export default function RecentQuizCard( {title, progress, progressColor}) {
    const icons = {
        'speaking': speakingIcon,
        'reading': readingIcon
    }
    
  return (
    <div className={styles.card}>
        <div className={styles.icon_container}>
            <img src={icons[title.toLowerCase()]}  alt={`Recent Quiz ${title} icon`} />
        </div>
        <h2>{title}</h2>
        <p className={styles.text}>You completed {progress}%</p>
        <div className={styles.progressbar}>
            <div className={styles.progress} style={{width: progress + '%', backgroundColor: progressColor}}></div>
        </div>
    </div>
  )
}
