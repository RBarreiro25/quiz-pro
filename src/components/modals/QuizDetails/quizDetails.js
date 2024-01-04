import React, { useState } from 'react';
import styles from './QuizDetails.module.css'
import PopularQuizCard from '../../BottomSection/PopularQuizCard/popularQuizCard'
import returnButton from '../assets/arrow-back-icon.svg'
import moreVertButton from './assets/more-vert-icon.svg'
import questionIcon from './assets/question-icon.svg'
import clockIcon from './assets/clock-icon.svg'
import Quiz from '../Quiz/quiz';

export default function QuizDetails( {title, questions, bgColor, rate, setShowDetailsModal, modalTitle, maxTime} ) {
  const [isClosing, setIsClosing] = useState(false);
  const [showQuizModal, setShowQuizModal] = useState(false);

  function toHoursAndMinutes(totalMinutes) {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);
    return `${padTo2Digits(hours)} hour ${padTo2Digits(minutes)} min`;
  }
  
  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

  function handleCloseModal() {
      setIsClosing(true);
      setTimeout(() => {
          setShowDetailsModal(false);
      }, 200);
  }

  const handleStartClick = (e) => {
    window.scrollTo(0, 0);
    setShowQuizModal(true)
  }

  return (
    <>
      <div className={`${styles.modal} ${isClosing ? styles.closing : ''}`}>
        <div className={`${styles.modal_content} ${isClosing ? styles.closing : ''}`}>
          <div className={styles.modal_header}>
              <button className={styles.return_button} onClick={handleCloseModal}>
                <img src={returnButton} alt='Return button that closes the Quiz Details modal' />
              </button>
              <h3 className={styles}>{modalTitle}</h3>
              <button className={styles.more_button}>
                <img src={moreVertButton} alt='3 dots button that shows hidden options' />
              </button>
          </div>
          <section className={styles.about_quiz}>
              <PopularQuizCard title={title} questions={questions} bgColor={bgColor} rate={rate} blockClick={true} />
              <h3 className={styles.modal_title}>Brief explanation about this quiz</h3>
              <div className={styles.quiz_info}>
                <div className={styles.icon_container}>
                  <img src={questionIcon} alt='question icon' />
                </div>
                <div>
                  <h4>{questions} Question</h4>
                  <p>10 point for a correct answer</p>
                </div>
              </div>
              <div className={styles.quiz_info}>
                <div className={styles.icon_container}>
                  <img src={clockIcon} alt='clock icon' />
                </div>
                <div>
                  <h4>{toHoursAndMinutes(maxTime)}</h4>
                  <p>Total duration of the quiz</p>
                </div>
              </div>
              <div className={styles.quiz_instructions}>
                <h3 className={styles.modal_title}>Please read the text below carefully so you can understand it</h3>
                <div className={styles.list}>
                  <div className={styles.list_item}>
                    <div className={styles.list_marker}></div>
                    <p>10 point awarded for a correct answer and no marks for a incorrect answer</p>
                  </div>
                  <div className={styles.list_item}>
                    <div className={styles.list_marker}></div>
                    <p>Tap on options to select the correct answer</p>
                  </div>
                  <div className={styles.list_item}>
                    <div className={styles.list_marker}></div>
                    <p>Click submit if you are sure you want to complete all the quizzes</p>
                  </div>
                </div>
              </div>
          </section>
          <div className={styles.buttons}>
            <button
              className={`${styles.modal_button} ${styles.button_blue} ${styles.button_large}`}
              onClick={(e) => handleStartClick(e)}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div>
        {showQuizModal ?
          <Quiz 
            title={title}
            maxTime={maxTime}
            setShowQuizModal={setShowQuizModal}
            questions={questions}
          />
        : ''}
      </div>
    </>
  )
}
