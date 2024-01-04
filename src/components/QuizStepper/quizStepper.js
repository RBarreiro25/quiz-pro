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
          "image": "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?q=80&w=1946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "options": [
            { "text": "Data center", "correct": true },
            { "text": "Virtual reality room", "correct": false },
            { "text": "Game development studio", "correct": false },
            { "text": "Office workspace", "correct": false }
          ]
        },
        {
          "question": "What is the subject of the image?",
          "image": "https://images.unsplash.com/photo-1515630278258-407f66498911?q=80&w=2098&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "options": [
            { "text": "Computer mouse internals", "correct": false },
            { "text": "Motherboard circuitry", "correct": true },
            { "text": "Solar panel structure", "correct": false },
            { "text": "Radio antenna design", "correct": false }
          ]
        },
        {
          "question": "What technology is being showcased in the image?",
          "image": "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?q=80&w=2037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "options": [
            { "text": "Virtual Reality (VR)", "correct": false },
            { "text": "Artificial Intelligence (AI)", "correct": false },
            { "text": "Augmented Reality (AR)", "correct": true },
            { "text": "Wearable Fitness Tech", "correct": false }
          ]
        },
        {
          "question": "What activity is likely happening in the image?",
          "image": "https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "options": [
            { "text": "Video editing", "correct": false },
            { "text": "Web development", "correct": true },
            { "text": "3D modeling", "correct": false },
            { "text": "Graphic design", "correct": false }
          ]
        },
        {
          "question": "What is the main technology featured in the image?",
          "image": "https://images.unsplash.com/photo-1508444845599-5c89863b1c44?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "options": [
            { "text": "Artificial Intelligence", "correct": false },
            { "text": "Robotics", "correct": true },
            { "text": "Blockchain", "correct": false },
            { "text": "Satellite Communication", "correct": false }
          ]
        },
        {
          "question": "What concept does the image represent?",
          "image": "https://plus.unsplash.com/premium_photo-1688678097425-00bba1629e32?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "options": [
            { "text": "Edge computing", "correct": false },
            { "text": "Blockchain network", "correct": false },
            { "text": "Cloud computing", "correct": true },
            { "text": "Quantum computing", "correct": false }
          ]
        },
        {
          "question": "What does the image portray?",
          "image": "https://plus.unsplash.com/premium_photo-1688686804638-fadb460edc4a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "options": [
            { "text": "Traditional home design", "correct": false },
            { "text": "Sustainable living space", "correct": false },
            { "text": "Smart home with IoT devices", "correct": true },
            { "text": "Vintage interior design", "correct": false }
          ]
        },
        {
          "question": "What technology is demonstrated in the image?",
          "image": "https://images.unsplash.com/photo-1582879304171-8041c73bedbd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "options": [
            { "text": "Virtual Reality (VR)", "correct": false },
            { "text": "Augmented Reality (AR)", "correct": false },
            { "text": "3D Printing", "correct": true },
            { "text": "Holography", "correct": false }
          ]
        },
        {
          "question": "What security feature is implied in the image?",
          "image": "https://images.unsplash.com/photo-1667453466805-75bbf36e8707?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "options": [
            { "text": "Facial recognition", "correct": false },
            { "text": "Two-factor authentication", "correct": false },
            { "text": "Fingerprint authentication", "correct": true },
            { "text": "Iris scanning", "correct": false }
          ]
        },
        {
          "question": "What technology is showcased in the image?",
          "image": "https://images.unsplash.com/photo-1625924305476-d8f96c560c21?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "options": [
            { "text": "Artificial Intelligence (AI)", "correct": true },
            { "text": "Quantum Computing", "correct": false },
            { "text": "Virtual Reality (VR)", "correct": false },
            { "text": "Nanotechnology", "correct": false }
          ]
        },
        {
          "question": "Finished!",
          "image": "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }
      ],
    Sport: [
        {
          "question": "What does the provided image depict?",
          "image": "https://images.unsplash.com/photo-1519766304817-4f37bda74a26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "options": [
            { "text": "Basketball game", "correct": true },
            { "text": "Volleyball match", "correct": false },
            { "text": "Soccer match", "correct": false },
            { "text": "Track and field event", "correct": false }
          ]
        },
        {
          "question": "What is the subject of the image?",
          "image": "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "options": [
            { "text": "Soccer trophy", "correct": true },
            { "text": "Olympic medal", "correct": false },
            { "text": "Baseball award", "correct": false },
            { "text": "Tennis championship cup", "correct": false }
          ]
        },
        {
          "question": "What sport is being showcased in the image?",
          "image": "https://images.unsplash.com/flagged/photo-1576972405668-2d020a01cbfa?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "options": [
            { "text": "Augmented Reality basketball court", "correct": false },
            { "text": "Virtual Reality gaming arena", "correct": false },
            { "text": "Wimbledon tennis court", "correct": true },
            { "text": "Indoor soccer field", "correct": false }
          ]
        },
        {
          "question": "Who holds the record for the most Olympic gold medals in athletics?",
          "image": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "options": [
            { "text": "Usain Bolt", "correct": true },
            { "text": "Michael Phelps", "correct": false },
            { "text": "Simone Biles", "correct": false },
            { "text": "Serena Williams", "correct": false }
          ]
        },
        {
          "question": "In which sport would you perform a slam dunk?",
          "image": "https://images.unsplash.com/photo-1573196444192-cc9f26e94408?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "options": [
            { "text": "Soccer", "correct": false },
            { "text": "Basketball", "correct": true },
            { "text": "Volleyball", "correct": false },
            { "text": "Tennis", "correct": false }
          ]
        },
        {
          "question": "Who is known as 'The Rocket' in snooker?",
          "image": "https://images.unsplash.com/photo-1582626265275-67a72c563a3d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "options": [
            { "text": "Ronnie O'Sullivan", "correct": true },
            { "text": "Mark Selby", "correct": false },
            { "text": "Stephen Hendry", "correct": false },
            { "text": "John Higgins", "correct": false }
          ]
        },
        {
          "question": "Which baseball player holds the record for the most home runs in a single season?",
          "image": "https://images.unsplash.com/photo-1659132252130-5dc2962bc425?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "options": [
            { "text": "Babe Ruth", "correct": false },
            { "text": "Barry Bonds", "correct": true },
            { "text": "Hank Aaron", "correct": false },
            { "text": "Ken Griffey Jr.", "correct": false }
          ]
        },
        {
          "question": "What is the scoring system called in a game of tennis?",
          "image": "https://images.unsplash.com/photo-1531315396756-905d68d21b56?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "options": [
            { "text": "Points", "correct": false },
            { "text": "Rounds", "correct": false },
            { "text": "Games", "correct": true },
            { "text": "Sets", "correct": false }
          ]
        },
        {
          "question": "Finished!",
          "image": "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }
      ],
    Music: [
        {
          "question": "What does the provided image depict?",
          "image": "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "options": [
            { "text": "Recording studio session", "correct": false },
            { "text": "Live concert performance", "correct": true },
            { "text": "Music festival crowd", "correct": false },
            { "text": "Rehearsal in a garage", "correct": false }
          ]
        },
        {
          "question": "Who is the legendary guitarist shown in the image?",
          "image": "https://media.gettyimages.com/id/1210215335/pt/foto/london-england-eric-clapton-performs-on-stage-during-music-for-the-marsden-2020-at-the-o2.jpg?s=2048x2048&w=gi&k=20&c=lhRbKra6tQz5sMHRrMTVu8DyCfhh8ZLMGJ4WE-UYwTo=",
          "options": [
            { "text": "Eric Clapton", "correct": true },
            { "text": "Jimi Hendrix", "correct": false },
            { "text": "Jimmy Page", "correct": false },
            { "text": "Slash", "correct": false }
          ]
        },
        {
          "question": "What type of instrument is predominantly featured in the image?",
          "image": "https://images.unsplash.com/photo-1594333160155-a0f1827c724c?q=80&w=2077&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "options": [
            { "text": "Electric guitar", "correct": false },
            { "text": "Drum set", "correct": false },
            { "text": "Saxophone", "correct": true },
            { "text": "Piano", "correct": false }
          ]
        },
        {
          "question": "Which music genre is associated with the image?",
          "image": "https://images.unsplash.com/photo-1545959570-a94084071b5d?q=80&w=1997&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "options": [
            { "text": "Classical music", "correct": false },
            { "text": "Salsa", "correct": true },
            { "text": "Heavy metal", "correct": false },
            { "text": "Country music", "correct": false }
          ]
        },
        {
          "question": "Who is the lead singer of the band shown in the image?",
          "image": "https://media.gq.com/photos/570fc010bf3a8ba177b0b60d/16:9/w_2580,c_limit/axl-rose-05.jpg",
          "options": [
            { "text": "Freddie Mercury", "correct": false },
            { "text": "Mick Jagger", "correct": false },
            { "text": "Axl Rose", "correct": true },
            { "text": "Steven Tyler", "correct": false }
          ]
        },
        {
          "question": "What is the primary instrument being played in the image?",
          "image": "https://plus.unsplash.com/premium_photo-1681841305228-2f9b0d5b5d9e?q=80&w=2085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "options": [
            { "text": "Flute", "correct": false },
            { "text": "Violin", "correct": true },
            { "text": "Trumpet", "correct": false },
            { "text": "Cello", "correct": false }
          ]
        },
        {
          "question": "Which musical era is represented in the image?",
          "image": "https://www.blackpast.org/wp-content/uploads/prodimages/files/blackpast_images/Edythe_Turnham_and_Knights_of_Syncopation_Seattle_1925.jpg",
          "options": [
            { "text": "Baroque era", "correct": false },
            { "text": "Renaissance era", "correct": false },
            { "text": "Roaring Twenties jazz era", "correct": true },
            { "text": "Romantic era", "correct": false }
          ]
        },
        {
          "question": "What musical instrument is the focus of the image?",
          "image": "https://images.unsplash.com/flagged/photo-1578681954439-c82244fce655?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "options": [
            { "text": "Electric guitar", "correct": false },
            { "text": "Drum set", "correct": true },
            { "text": "Bass guitar", "correct": false },
            { "text": "Keyboard", "correct": false }
          ]
        },
        {
          "question": "Who is the famous pianist shown in the image?",
          "image": "https://blog.blombo.com/wp-content/uploads/2020/05/Pianista-Lang-Lang.jpg",
          "options": [
            { "text": "Lang Lang", "correct": true },
            { "text": "Arthur Rubinstein", "correct": false },
            { "text": "Herbie Hancock", "correct": false },
            { "text": "Elton John", "correct": false }
          ]
        },
        {
          "question": "What music genre is associated with the image?",
          "image": "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "options": [
            { "text": "Country music", "correct": false },
            { "text": "Electronic dance music (EDM)", "correct": true },
            { "text": "Hip-hop", "correct": false },
            { "text": "Reggae", "correct": false }
          ]
        },
        {
          "question": "Who is the iconic pop star shown in the image?",
          "image": "https://mjbeats.com.br/wp-content/uploads/2023/06/Michael-Jackson-Off-the-wall-scaled.jpg",
          "options": [
            { "text": "Madonna", "correct": false },
            { "text": "Michael Jackson", "correct": true },
            { "text": "Beyoncé", "correct": false },
            { "text": "Justin Timberlake", "correct": false }
          ]
        },
        {
          "question": "What music instrument is the central focus of the image?",
          "image": "https://images.unsplash.com/photo-1591573784754-e9498ebb4913?q=80&w=2154&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "options": [
            { "text": "Accordion", "correct": false },
            { "text": "Flamenco guitar", "correct": true },
            { "text": "Banjo", "correct": false },
            { "text": "Harp", "correct": false }
          ]
        },
        {
          "question": "Finished!",
          "image": "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        <div className={styles.question_image} style={{backgroundImage: "url(" + (questions[title][currentStep - 1].image || '') + ")"}}>
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