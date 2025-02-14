

import htmlquestions from './data/htmlquestions';
import { useState } from 'react';
import Image from 'next/image';

import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [userChoice, setUserChoice] = useState(null);

  const handleAnswer = (selectedOption) => {
    const isCorrect = selectedOption === htmlquestions[currentQuestion].correctAnswer;
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
    <Image src="/icon-html.svg" alt="Logo" width={40} height={40} />   HTML </h1>
                 
                  <div div className={styles.main}> 
    
    {currentQuestion < htmlquestions.length ? (
        <>
      
           {/* Show Current Score */}
         <div className={styles.score}> 
           {/* Show Question Number */}
        <p>
            Question {currentQuestion + 1} of {htmlquestions.length}
          </p>
        
         <h2 className={styles.currentQ}>  {htmlquestions[currentQuestion].question}  </h2>
         <h2 className={styles.currentScore}> Current Score: {score}    </h2>
          </div>
          
        
          
          <div className={styles.questionCont}>  
        
          <ul>
          
            {htmlquestions[currentQuestion].options.map((option, index) => (
              <li className={styles.choice}
                key={index} 
                
               
                onClick={() => handleAnswer(option)}
                style={{
                    
                  cursor: 'pointer',
                  border: userChoice === option ? '1px solid' : 'none',
                  
                  backgroundColor:
                    userChoice === option
                      ? option === htmlquestions[currentQuestion].correctAnswer
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
        <>
        <div className={styles.completed}>
         <div className={styles.completedOne}> <h2>Quiz Completed!</h2>
          <p>You Scored... </p>
         </div>
        
        </div>
     
    

    
    <div className={styles.completedTwo}>
     <div className={styles.innerCompletedTwo}>
        <p>HTML</p>
        <div className={styles.scoreFinal}>
        {score}
        </div>
        <p>out of 10</p>
        </div>
            {/* Reset Button */}
          <button onClick={handleReset} className={styles.btn} >Play Again</button>
       </div>
       </>
     
        )}
    
        </div>
                 

</>
  );
}