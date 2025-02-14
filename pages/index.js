import { useState } from 'react';
//import questions from './data/questions.json';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Navbar from '@/components/Navbar';

export default function Home() {
 
  <div>

</div>
  return (
    < div className={styles.mainIndex}>
     <div className={styles.oneIndex}>
      <h1 className={styles.frontQuiz2}>Welcome to the</h1>
      <h1 className={styles.frontQuiz}>Frontend Quiz!</h1>
      <h3>Pick a topic to get started.</h3>
      </div>
      <div className={styles.twoIndex}>
        <div className={styles.choiceIndex}>
      <Link href="/html">
        HTML
      </Link>
      </div>
      <div className={styles.choiceIndex}>
      <Link href="/css">
        CSS
      </Link>
      </div>
      <div className={styles.choiceIndex}>
      <Link href="/js">
        JavaScript
      </Link>
        </div>
        <div className={styles.choiceIndex}>
      <Link href="/acc">
        ACC
      </Link>
        </div>
      </div>
   
    </div>
  );
}
