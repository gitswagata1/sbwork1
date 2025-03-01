import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Webcam from 'react-webcam';
import { db } from '../firebase-config';
import { collection, query, where, getDocs } from 'firebase/firestore';

function Quiz() {
  const { domain } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showCamera, setShowCamera] = useState(false);

  useEffect(() => {
    requestCamera();
    fetchQuestions();
  }, []);

  const requestCamera = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ video: true });
      setShowCamera(true);
    } catch (error) {
      alert('Camera access is required for the quiz');
    }
  };

  const fetchQuestions = async () => {
    try {
      const q = query(
        collection(db, 'questions'),
        where('domain', '==', domain)
      );
      const querySnapshot = await getDocs(q);
      const questionsList = [];
      querySnapshot.forEach((doc) => {
        questionsList.push({ id: doc.id, ...doc.data() });
      });
      setQuestions(questionsList);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleAnswer = (answer) => {
    setUserAnswers({ ...userAnswers, [currentQuestion]: answer });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className="quiz-container">
      {showCamera && (
        <div className="camera-container">
          <Webcam />
        </div>
      )}
      <div className="question-section">
        {questions[currentQuestion] && (
          <>
            <h2>{domain} Quiz</h2>
            <p>Question {currentQuestion + 1} of {questions.length}</p>
            <div className="question">
              <h3>{questions[currentQuestion].question}</h3>
              <div className="options">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className={userAnswers[currentQuestion] === option ? 'selected' : ''}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;