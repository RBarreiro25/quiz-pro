import React, { useState } from 'react'
import styles from './BottomSection.module.css'
import PopularQuizCard from './PopularQuizCard/popularQuizCard'
import QuizDetails from '../modals/QuizDetails/quizDetails'

export default function BottomSection() {
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const popularQuizCards = [
    {"id": "1", "title": "Technology", "questions": 10, "bgColor": "var(--bg-icon-yellow)", "rate": 4.8, 'maxTime': 120},
    {"id": "2", "title": "Sport", "questions": 10, "bgColor": "var(--bg-icon-blue)", "rate": 4.8, 'maxTime': 60},
    {"id": "3", "title": "Music", "questions": 10, "bgColor": "var(--bg-icon-red)", "rate": 4.8, 'maxTime': 45},
  ];


  return (
    <div className={styles.bottom_section}>
      <h2 className={styles.h2}>Popular Quiz</h2>
      <div className={styles.cards}>
        {popularQuizCards.map(card => (
          <PopularQuizCard
            key={card.id}
            id={card.id}
            title={card.title}
            questions={card.questions}
            bgColor={card.bgColor}
            rate={card.rate}
            maxTime={card.maxTime}
            showDetailsModal={showDetailsModal}
            setShowDetailsModal={setShowDetailsModal}
            setSelectedCard={setSelectedCard}
            selectedCard={selectedCard}
          />
        ))}
        {showDetailsModal ?
          <QuizDetails
            title={selectedCard.title}
            questions={selectedCard.questions}
            maxTime={selectedCard.maxTime}
            bgColor={selectedCard.bgColor}
            rate={selectedCard.rate}
            setShowDetailsModal={setShowDetailsModal}
            modalTitle ='Detail Quiz'
          />
        : ''}
      </div>
    </div>
  );
}