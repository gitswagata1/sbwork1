import React, { useState, useEffect } from 'react';
import { db } from '../../firebase-config';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';

function QuestionManager() {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState({
    domain: 'technical',
    question: '',
    options: ['', '', '', ''],
    correct: ''
  });

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    const querySnapshot = await getDocs(collection(db, 'questions'));
    const questionsList = [];
    querySnapshot.forEach((doc) => {
      questionsList.push({ id: doc.id, ...doc.data() });
    });
    setQuestions(questionsList);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, 'questions'), newQuestion);
    fetchQuestions();
    setNewQuestion({
      domain: 'technical',
      question: '',
      options: ['', '', '', ''],
      correct: ''
    });
  };

  return (
    <div className="admin-card">
      <h2>Manage Questions</h2>
      <form onSubmit={handleSubmit}>
        <select 
          value={newQuestion.domain}
          onChange={(e) => setNewQuestion({...newQuestion, domain: e.target.value})}
        >
          <option value="technical">Technical</option>
          <option value="design">Design</option>
          <option value="editorial">Editorial</option>
          <option value="management">Management</option>
        </select>
        
        <textarea
          placeholder="Question"
          value={newQuestion.question}
          onChange={(e) => setNewQuestion({...newQuestion, question: e.target.value})}
        />

        {newQuestion.options.map((option, index) => (
          <input
            key={index}
            placeholder={`Option ${index + 1}`}
            value={option}
            onChange={(e) => {
              const newOptions = [...newQuestion.options];
              newOptions[index] = e.target.value;
              setNewQuestion({...newQuestion, options: newOptions});
            }}
          />
        ))}

        <button type="submit">Add Question</button>
      </form>

      <div className="questions-list">
        {questions.map(q => (
          <div key={q.id} className="question-item">
            <h3>{q.question}</h3>
            <p>Domain: {q.domain}</p>
            <button onClick={() => deleteDoc(doc(db, 'questions', q.id))}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionManager;