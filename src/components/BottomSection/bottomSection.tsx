import React, { useState } from 'react'
import styles from './BottomSection.module.css'
import PopularQuizCard from './PopularQuizCard/popularQuizCard'
import QuizDetails from '../modals/QuizDetails/quizDetails'

export default function BottomSection() {
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(Object);
  const popularQuizCards = [
    {"id": "1", "title": "Technology", "questions": 10, "bgColor": "var(--bg-icon-yellow)", "rate": 4.9, 'maxTime': 60},
    {"id": "2", "title": "Sport", "questions": 8, "bgColor": "var(--bg-icon-blue)", "rate": 4.8, 'maxTime': 80},
    {"id": "3", "title": "Music", "questions": 12, "bgColor": "var(--bg-icon-red)", "rate": 4.6, 'maxTime': 45},
  ];


  return (
    <>
      <div className={styles.bottom_section}>
        <h2 className={styles.h2}>Popular Quiz</h2>
        <div className={styles.cards}>
          {popularQuizCards.map(card => (
            <PopularQuizCard
              key={card.id}
              title={card.title}
              questions={card.questions}
              bgColor={card.bgColor}
              rate={card.rate}
              maxTime={card.maxTime}
              setShowDetailsModal={setShowDetailsModal}
              setSelectedCard={setSelectedCard}
              blockClick={false}
            />
          ))}
        </div>
      </div>
      <div>
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
    </>
  );
}