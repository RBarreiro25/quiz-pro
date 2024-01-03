import React from 'react'
import styles from './PopularQuizCard.module.css'
import techIcon from './assets/computer-icon.svg'
import ballIcon from './assets/ball-icon.svg'
import musicIcon from './assets/music-icon.svg'
import starIcon from './assets/star-icon.svg'

export default function PopularQuizCard( {title, questions, bgColor, rate} ) {
    const icons = {
        'technology': techIcon,
        'sport': ballIcon,
        'music': musicIcon
    }
    return (
    <div className={styles.card}>
        <div  className={styles.icon_container} style={{backgroundColor: bgColor}}>
            <img src={icons[title.toLowerCase()]} alt={`Popular Quiz ${title} icon`} />
        </div>
        <div className={styles.texts}>
            <h3>{title}</h3>
            <p>{questions} Question</p>
        </div>
        <div className={styles.rating}>
            <img src={starIcon} alt='Start icon refering to rating note'/>
            <span>{rate}</span>
        </div>
    </div>
  )
}
