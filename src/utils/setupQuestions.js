import { db } from '../firebase-config';
import { collection, addDoc } from 'firebase/firestore';

const questions = {
  technical: [
    {
      question: "What is the primary purpose of version control systems?",
      options: [
        "Track code changes",
        "Run automated tests",
        "Deploy applications",
        "Debug code"
      ],
      correct: "Track code changes"
    },
    // Add more technical questions here
  ],
  design: [
    {
      question: "Which color theory principle refers to how the human eye perceives color?",
      options: [
        "Color Psychology",
        "Color Harmony",
        "Color Context",
        "Color Perception"
      ],
      correct: "Color Context"
    },
    // Add more design questions here
  ],
  // Add editorial and management questions similarly
};

export const setupQuestions = async () => {
  try {
    for (const [domain, domainQuestions] of Object.entries(questions)) {
      for (const question of domainQuestions) {
        await addDoc(collection(db, 'questions'), {
          domain,
          ...question
        });
      }
    }
    return true;
  } catch (error) {
    console.error('Error setting up questions:', error);
    return false;
  }
};