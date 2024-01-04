import React, { useState } from 'react'
import styles from './QuizStepper.module.css'
import outlinedCircle from './assets/circle-outlined-icon.svg'
import errorCircle from './assets/circle-error-icon.svg'

export default function Stepper({ totalSteps, title, handleCloseModal }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);

  const questions = {
    Technology: [
        {
          "question": "What does the provided image depict?",
          "image": "An image showcasing a server room with multiple racks of servers.",
          "options": [
            { "text": "Data center", "correct": true },
            { "text": "Virtual reality room", "correct": false },
            { "text": "Game development studio", "correct": false },
            { "text": "Office workspace", "correct": false }
          ]
        },
        {
          "question": "What is the subject of the image?",
          "image": "An illustration of a circuit board with various electronic components.",
          "options": [
            { "text": "Computer mouse internals", "correct": false },
            { "text": "Motherboard circuitry", "correct": true },
            { "text": "Solar panel structure", "correct": false },
            { "text": "Radio antenna design", "correct": false }
          ]
        },
        {
          "question": "What technology is being showcased in the image?",
          "image": "A photo of a person using augmented reality glasses with digital information overlaid on the real world.",
          "options": [
            { "text": "Virtual Reality (VR)", "correct": false },
            { "text": "Artificial Intelligence (AI)", "correct": false },
            { "text": "Augmented Reality (AR)", "correct": true },
            { "text": "Wearable Fitness Tech", "correct": false }
          ]
        },
        {
          "question": "What activity is likely happening in the image?",
          "image": "A screenshot of a programming environment with lines of code and a console.",
          "options": [
            { "text": "Video editing", "correct": false },
            { "text": "Web development", "correct": true },
            { "text": "3D modeling", "correct": false },
            { "text": "Graphic design", "correct": false }
          ]
        },
        {
          "question": "What is the main technology featured in the image?",
          "image": "A picture of a drone flying in the sky.",
          "options": [
            { "text": "Artificial Intelligence", "correct": false },
            { "text": "Robotics", "correct": true },
            { "text": "Blockchain", "correct": false },
            { "text": "Satellite Communication", "correct": false }
          ]
        },
        {
          "question": "What concept does the image represent?",
          "image": "An illustration of a cloud computing infrastructure with interconnected servers.",
          "options": [
            { "text": "Edge computing", "correct": false },
            { "text": "Blockchain network", "correct": false },
            { "text": "Cloud computing", "correct": true },
            { "text": "Quantum computing", "correct": false }
          ]
        },
        {
          "question": "What does the image portray?",
          "image": "A photo of a futuristic smart home with various connected devices.",
          "options": [
            { "text": "Traditional home design", "correct": false },
            { "text": "Sustainable living space", "correct": false },
            { "text": "Smart home with IoT devices", "correct": true },
            { "text": "Vintage interior design", "correct": false }
          ]
        },
        {
          "question": "What technology is demonstrated in the image?",
          "image": "An illustration of a 3D printer creating a physical object.",
          "options": [
            { "text": "Virtual Reality (VR)", "correct": false },
            { "text": "Augmented Reality (AR)", "correct": false },
            { "text": "3D Printing", "correct": true },
            { "text": "Holography", "correct": false }
          ]
        },
        {
          "question": "What security feature is implied in the image?",
          "image": "A screenshot of a mobile app with a fingerprint icon for authentication.",
          "options": [
            { "text": "Facial recognition", "correct": false },
            { "text": "Two-factor authentication", "correct": false },
            { "text": "Fingerprint authentication", "correct": true },
            { "text": "Iris scanning", "correct": false }
          ]
        },
        {
          "question": "What technology is showcased in the image?",
          "image": "A photo of a self-driving car on the road.",
          "options": [
            { "text": "Artificial Intelligence (AI)", "correct": true },
            { "text": "Quantum Computing", "correct": false },
            { "text": "Virtual Reality (VR)", "correct": false },
            { "text": "Nanotechnology", "correct": false }
          ]
        },
        {
          "question": "Finished!",
          "image": "Congrulations image",
        }
      ],
    Sport: [
        {
          "question": "What does the provided image depict?",
          "image": "An iconic image of a basketball player in action.",
          "options": [
            { "text": "Basketball game", "correct": true },
            { "text": "Volleyball match", "correct": false },
            { "text": "Soccer match", "correct": false },
            { "text": "Track and field event", "correct": false }
          ]
        },
        {
          "question": "What is the subject of the image?",
          "image": "A photo of a FIFA World Cup trophy.",
          "options": [
            { "text": "Football trophy", "correct": true },
            { "text": "Olympic medal", "correct": false },
            { "text": "Baseball award", "correct": false },
            { "text": "Tennis championship cup", "correct": false }
          ]
        },
        {
          "question": "What technology is being showcased in the image?",
          "image": "An image of a tennis court during a major tournament.",
          "options": [
            { "text": "Augmented Reality tennis court", "correct": false },
            { "text": "Virtual Reality gaming arena", "correct": false },
            { "text": "Wimbledon tennis court", "correct": true },
            { "text": "Indoor soccer field", "correct": false }
          ]
        },
        {
          "question": "Who holds the record for the most Olympic gold medals in athletics?",
          "image": "A photo of a track and field event at the Olympics.",
          "options": [
            { "text": "Usain Bolt", "correct": true },
            { "text": "Michael Phelps", "correct": false },
            { "text": "Simone Biles", "correct": false },
            { "text": "Serena Williams", "correct": false }
          ]
        },
        {
          "question": "In which sport would you perform a slam dunk?",
          "image": "An illustration of a basketball player dunking the ball.",
          "options": [
            { "text": "Soccer", "correct": false },
            { "text": "Basketball", "correct": true },
            { "text": "Volleyball", "correct": false },
            { "text": "Tennis", "correct": false }
          ]
        },
        {
          "question": "Who is known as 'The Rocket' in snooker?",
          "image": "An image of a snooker table with players in the background.",
          "options": [
            { "text": "Ronnie O'Sullivan", "correct": true },
            { "text": "Mark Selby", "correct": false },
            { "text": "Stephen Hendry", "correct": false },
            { "text": "John Higgins", "correct": false }
          ]
        },
        {
          "question": "Which baseball player holds the record for the most home runs in a single season?",
          "image": "A photo of a baseball player hitting a home run.",
          "options": [
            { "text": "Babe Ruth", "correct": false },
            { "text": "Barry Bonds", "correct": true },
            { "text": "Hank Aaron", "correct": false },
            { "text": "Ken Griffey Jr.", "correct": false }
          ]
        },
        {
          "question": "What is the scoring system called in a game of tennis?",
          "image": "An image of a tennis match in progress.",
          "options": [
            { "text": "Points", "correct": false },
            { "text": "Rounds", "correct": false },
            { "text": "Games", "correct": true },
            { "text": "Sets", "correct": false }
          ]
        },
        {
          "question": "Finished!",
          "image": "Congrulations image",
        }
      ],
    Music: [
        {
          "question": "What does the provided image depict?",
          "image": "An illustration of a concert stage with musicians performing.",
          "options": [
            { "text": "Recording studio session", "correct": false },
            { "text": "Live concert performance", "correct": true },
            { "text": "Music festival crowd", "correct": false },
            { "text": "Rehearsal in a garage", "correct": false }
          ]
        },
        {
          "question": "Who is the legendary guitarist shown in the image?",
          "image": "A photo of a guitarist playing a solo on stage.",
          "options": [
            { "text": "Eric Clapton", "correct": true },
            { "text": "Jimi Hendrix", "correct": false },
            { "text": "Jimmy Page", "correct": false },
            { "text": "Slash", "correct": false }
          ]
        },
        {
          "question": "What type of instrument is predominantly featured in the image?",
          "image": "An image of a jazz band with a saxophonist taking the lead.",
          "options": [
            { "text": "Electric guitar", "correct": false },
            { "text": "Drum set", "correct": false },
            { "text": "Saxophone", "correct": true },
            { "text": "Piano", "correct": false }
          ]
        },
        {
          "question": "Which music genre is associated with the image?",
          "image": "A snapshot from a lively salsa dance club.",
          "options": [
            { "text": "Classical music", "correct": false },
            { "text": "Salsa", "correct": true },
            { "text": "Heavy metal", "correct": false },
            { "text": "Country music", "correct": false }
          ]
        },
        {
          "question": "Who is the lead singer of the band shown in the image?",
          "image": "A picture of a rock band performing on stage with a charismatic lead vocalist.",
          "options": [
            { "text": "Freddie Mercury", "correct": false },
            { "text": "Mick Jagger", "correct": false },
            { "text": "Axl Rose", "correct": true },
            { "text": "Steven Tyler", "correct": false }
          ]
        },
        {
          "question": "What is the primary instrument being played in the image?",
          "image": "An illustration of a person playing the violin in a classical orchestra.",
          "options": [
            { "text": "Flute", "correct": false },
            { "text": "Violin", "correct": true },
            { "text": "Trumpet", "correct": false },
            { "text": "Cello", "correct": false }
          ]
        },
        {
          "question": "Which musical era is represented in the image?",
          "image": "A black and white photo of jazz musicians in the 1920s.",
          "options": [
            { "text": "Baroque era", "correct": false },
            { "text": "Renaissance era", "correct": false },
            { "text": "Roaring Twenties jazz era", "correct": true },
            { "text": "Romantic era", "correct": false }
          ]
        },
        {
          "question": "What musical instrument is the focus of the image?",
          "image": "A close-up photo of a drummer during a live rock concert.",
          "options": [
            { "text": "Electric guitar", "correct": false },
            { "text": "Drum set", "correct": true },
            { "text": "Bass guitar", "correct": false },
            { "text": "Keyboard", "correct": false }
          ]
        },
        {
          "question": "Who is the famous pianist shown in the image?",
          "image": "A picture of a renowned pianist performing on a grand piano.",
          "options": [
            { "text": "Lang Lang", "correct": true },
            { "text": "Arthur Rubinstein", "correct": false },
            { "text": "Herbie Hancock", "correct": false },
            { "text": "Elton John", "correct": false }
          ]
        },
        {
          "question": "What music genre is associated with the image?",
          "image": "An illustration of a DJ at a turntable with a vibrant nightclub in the background.",
          "options": [
            { "text": "Country music", "correct": false },
            { "text": "Electronic dance music (EDM)", "correct": true },
            { "text": "Hip-hop", "correct": false },
            { "text": "Reggae", "correct": false }
          ]
        },
        {
          "question": "Who is the iconic pop star shown in the image?",
          "image": "A photo of a solo artist singing into a microphone with a dazzling stage setup.",
          "options": [
            { "text": "Madonna", "correct": false },
            { "text": "Michael Jackson", "correct": true },
            { "text": "Beyoncé", "correct": false },
            { "text": "Justin Timberlake", "correct": false }
          ]
        },
        {
          "question": "What music instrument is the central focus of the image?",
          "image": "An image of a flamenco guitarist performing with intense focus.",
          "options": [
            { "text": "Accordion", "correct": false },
            { "text": "Flamenco guitar", "correct": true },
            { "text": "Banjo", "correct": false },
            { "text": "Harp", "correct": false }
          ]
        },
        {
          "question": "Finished!",
          "image": "Congrulations image",
        }
      ],
  };

  const handleOptionClick = (e, index) => {
    const currentQuestion = questions[title][currentStep - 1];
    const selected = currentQuestion.options[index];

    if (selected.correct) {
      setSelectedOption('correct');
    } else {
      setSelectedOption(index);
    }
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, totalSteps + 1));
    setSelectedOption(null);
    if (currentStep === totalSteps) {
        const timerNow = document.getElementById('countdown_timer').innerHTML;
        document.getElementById('countdown_timer').innerHTML = timerNow;
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
    setSelectedOption(null);
  };

  const calculateProgress = () => {
    return ((currentStep - 1) / totalSteps) * 100;
  };

  return (
    <div>
        <div className={styles.progressbar}>
            <div className={styles.progress} style={{width: `${calculateProgress()}%`}}></div>
        </div>
        <div className={styles.progress_text}>
            Completed {Math.floor(calculateProgress())}%
        </div>
        <div className={styles.question_text}>
            {questions[title][currentStep - 1].question || ''}
        </div>
        <div className={styles.question_image}>
            {questions[title][currentStep - 1].image || ''}
        </div>
        <div className={styles.question_options} id='question_options'>
            {questions[title][currentStep - 1].options?.map((option, index) => (
                <div
                    className={`${styles.question_option} ${
                        selectedOption !== null ?
                            option.correct ? styles.correct_option :
                                selectedOption === index ? styles.incorrect_option : ''
                        : ''
                    }`}
                    key={index}
                    onClick={(e) => handleOptionClick(e, index)}
                >
                    <img
                        src={
                            selectedOption === index ?
                                errorCircle
                            :
                                outlinedCircle
                        }
                        alt='Empty circle to indicate an option to be choosed'
                    />
                    {option.text}
                </div>
            ))}
        </div>
        <div className={styles.buttons}>
            <button
                className={`${styles.modal_button} ${styles.button_outlined} ${styles.button_medium} ${currentStep === 1 ? styles.disabled : ''}`}
                onClick={handlePrevious}
                disabled={currentStep === 1}
            >
                Previous
            </button>
            <button
                className={`${styles.modal_button} ${styles.button_blue} ${styles.button_medium}`}
                onClick={currentStep === totalSteps + 1 ? handleCloseModal : handleNext}
            >
                {currentStep === totalSteps + 1 ? 'Close' : 'Next' }
            </button>
        </div>
    </div>
  );
}