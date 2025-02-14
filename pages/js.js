import jsquestions from './data/jsquestions';
import { useState } from 'react';

import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Image from 'next/image';

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [userChoice, setUserChoice] = useState(null);

  const handleAnswer = (selectedOption) => {
    const isCorrect = selectedOption === jsquestions[currentQuestion].correctAnswer;
    setUserChoice(selectedOption); // Save the user's choice for displaying feedback

    if (isCorrect) {
      setScore(score + 1);
    }

    // Move to the next question after a brief delay
    setTimeout(() => {
      setCurrentQuestion(currentQuestion + 1);
      setUserChoice(null); // Clear user's choice for the next question
    }, 1000);
  };

  const handleReset = () => {
    // Reset to the first question and clear the score
    setCurrentQuestion(0);
    setScore(0);
    setUserChoice(null);
  };

  return (
    <>
    <Navbar />
    <h1 className={styles.html}>  
    <Image src="/icon-js.svg" alt="Logo" width={40} height={40} />  JS </h1>
                  <div div className={styles.main}> 
    
    {currentQuestion < jsquestions.length ? (
        <>
      
           {/* Show Current Score */}
         <div className={styles.score}> 
           {/* Show Question Number */}
        <p>
            Question {currentQuestion + 1} of {jsquestions.length}
          </p>
        
         <h2 className={styles.currentQ}>  {jsquestions[currentQuestion].question}  </h2>
         <h2 className={styles.currentScore}> Current Score: {score}    </h2>
          </div>
          
        
          
          <div className={styles.questionCont}>  
        
          <ul>
          
            {jsquestions[currentQuestion].options.map((option, index) => (
              <li className={styles.choice}
                key={index} 
                
               
                onClick={() => handleAnswer(option)}
                style={{
                    
                  cursor: 'pointer',
                  border: userChoice === option ? '1px solid' : 'none',
                  
                  backgroundColor:
                    userChoice === option
                      ? option === jsquestions[currentQuestion].correctAnswer
                        ? 'green'
                        : 'red': '',
                      
                    
                }}
              >
                {option}
              </li>
            ))}
          </ul>
          </div>
          
          
        
    </>

      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <p>Your Score: {score}</p>
           {/* Reset Button */}
      <button onClick={handleReset}>Reset Quiz</button>
        </div>
     
        )}
    
        </div>
                 

</>
    );
  }
    