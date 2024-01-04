import React from 'react'
import { Dispatch, SetStateAction } from "react";
import styles from './PopularQuizCard.module.css'
import techIcon from './assets/computer-icon.svg'
import ballIcon from './assets/ball-icon.svg'
import musicIcon from './assets/music-icon.svg'
import starIcon from './assets/star-icon.svg'

interface PopularQuizProps {
    title: string,
    questions: number,
    bgColor: string,
    rate: number,
    maxTime?: number,
    blockClick: boolean,
    setSelectedCard: Dispatch<SetStateAction<object>> | (() => {}),
    setShowDetailsModal: Dispatch<SetStateAction<boolean>> | (() => {})
}

export default function PopularQuizCard({ title, questions, bgColor, rate, maxTime, setShowDetailsModal, setSelectedCard, blockClick } :PopularQuizProps) {
    const icons = {
        'technology': techIcon,
        'sport': ballIcon,
        'music': musicIcon
    }
    const handleCardClick = () => {
        const card = {
            "title": title,
            "questions": questions,
            "bgColor": bgColor,
            "rate": rate,
            "maxTime": maxTime
        };
        setSelectedCard(card);
        window.scrollTo(0, 0);
        setShowDetailsModal(true);
    };
    return (
    <div className={styles.card} onClick={() => handleCardClick()} style={{pointerEvents: blockClick ? 'none' : 'auto'}}>
        <div className={styles.icon_container} style={{backgroundColor: bgColor}}>
            <img src={icons[title?.toLowerCase() as keyof typeof icons]} alt={`Popular Quiz ${title} icon`} />
        </div>
        <div className={styles.texts}>
            <h3>{title}</h3>
            <p>{questions} Question</p>
        </div>
        <div className={styles.rating}>
            <img src={starIcon} alt='Star icon refering to rating note'/>
            <span>{rate}</span>
        </div>
    </div>
  )
}
