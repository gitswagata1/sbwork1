import { db } from '../firebase-config';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

export const saveUserDomains = async (userId, domains) => {
  try {
    await addDoc(collection(db, 'user_domains'), {
      userId,
      domains,
      timestamp: new Date()
    });
    return true;
  } catch (error) {
    console.error('Error saving domains:', error);
    return false;
  }
};

export const saveQuizResults = async (userId, domain, answers) => {
  try {
    await addDoc(collection(db, 'quiz_results'), {
      userId,
      domain,
      answers,
      timestamp: new Date()
    });
    return true;
  } catch (error) {
    console.error('Error saving quiz results:', error);
    return false;
  }
};