import React, { useState } from 'react'
import { Dispatch, SetStateAction } from "react";
import styles from './Quiz.module.css'
import returnButton from '../assets/arrow-back-icon.svg'
import smallClock from './assets/small-clock-icon.svg'
import CountdownTimer from './CountdownTimer/countDownTimer';
import Stepper from './QuizStepper/quizStepper';

interface QuizProps {
  title: string,
  maxTime: number,
  setShowQuizModal: Dispatch<SetStateAction<boolean>>,
  questions: number
}

export default function Quiz( {title, maxTime, setShowQuizModal, questions}:QuizProps ) {
    const [isClosing, setIsClosing] = useState(false);
    function handleCloseModal() {
        setIsClosing(true);
        setTimeout(() => {
            setShowQuizModal(false);
        }, 200);
    }
  return (
    <div className={`${styles.modal} ${isClosing ? styles.closing : ''}`}>
        <div className={`${styles.modal_content} ${isClosing ? styles.closing : ''}`}>
          <div className={styles.modal_header}>
                <button className={styles.return_button} onClick={handleCloseModal}>
                    <img src={returnButton} alt='Return button that closes the Quiz modal' />
                </button>
                <h3>{title}</h3>
                <div className={styles.cronometer}>
                    <img src={smallClock} alt='Small clock that shows the remaing time to finish the quiz' />
                    <CountdownTimer minutes={maxTime} />
                </div>
          </div>
          <Stepper totalSteps={questions} title={title} handleCloseModal={handleCloseModal} />
        </div>
      </div>
  )
}
