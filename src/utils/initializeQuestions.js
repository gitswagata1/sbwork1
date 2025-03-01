import { db } from '../firebase-config';
import { collection, addDoc } from 'firebase/firestore';

const initialQuestions = {
  technical: [
    {
      question: "What is the primary purpose of React hooks?",
      options: [
        "To add state to functional components",
        "To create class components",
        "To handle routing",
        "To manage databases"
      ],
      correct: "To add state to functional components"
    },
    {
      question: "Which data structure follows LIFO principle?",
      options: ["Queue", "Stack", "Array", "Tree"],
      correct: "Stack"
    },
    {
      question: "What is the time complexity of binary search?",
      options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
      correct: "O(log n)"
    },
    {
      question: "What does API stand for?",
      options: [
        "Application Programming Interface",
        "Advanced Programming Integration",
        "Automated Program Interface",
        "Application Process Integration"
      ],
      correct: "Application Programming Interface"
    },
    {
      question: "Which protocol is used for secure data transmission?",
      options: ["HTTP", "HTTPS", "FTP", "SMTP"],
      correct: "HTTPS"
    }
  ],
  design: [
    {
      question: "What is the purpose of white space in design?",
      options: [
        "To improve readability and visual hierarchy",
        "To waste space",
        "To reduce content",
        "To increase loading speed"
      ],
      correct: "To improve readability and visual hierarchy"
    },
    {
      question: "What is the color wheel used for?",
      options: [
        "Creating color harmonies",
        "Drawing circles",
        "Making logos",
        "Website loading"
      ],
      correct: "Creating color harmonies"
    },
    {
      question: "What does UI stand for?",
      options: [
        "User Interface",
        "User Integration",
        "Universal Interface",
        "Unified Integration"
      ],
      correct: "User Interface"
    },
    {
      question: "Which file format is best for logos?",
      options: ["SVG", "JPG", "BMP", "GIF"],
      correct: "SVG"
    },
    {
      question: "What is the purpose of a wireframe?",
      options: [
        "Planning layout and functionality",
        "Creating final designs",
        "Writing code",
        "Testing websites"
      ],
      correct: "Planning layout and functionality"
    }
  ],
  editorial: [
    {
      question: "What is a style guide?",
      options: [
        "A document defining writing standards",
        "A fashion magazine",
        "A web browser",
        "A text editor"
      ],
      correct: "A document defining writing standards"
    },
    {
      question: "What is the purpose of a headline?",
      options: [
        "To grab attention and summarize content",
        "To fill space",
        "To add images",
        "To list references"
      ],
      correct: "To grab attention and summarize content"
    },
    {
      question: "What is proofreading?",
      options: [
        "Reviewing for errors",
        "Writing new content",
        "Creating images",
        "Publishing content"
      ],
      correct: "Reviewing for errors"
    },
    {
      question: "What is SEO?",
      options: [
        "Search Engine Optimization",
        "Social Editorial Output",
        "System Editorial Organization",
        "Search Editorial Operations"
      ],
      correct: "Search Engine Optimization"
    },
    {
      question: "What is the inverted pyramid style?",
      options: [
        "Most important information first",
        "Least important information first",
        "Random information order",
        "Alphabetical order"
      ],
      correct: "Most important information first"
    }
  ],
  management: [
    {
      question: "What is a Gantt chart used for?",
      options: [
        "Project timeline visualization",
        "Financial reporting",
        "Team messaging",
        "Code debugging"
      ],
      correct: "Project timeline visualization"
    },
    {
      question: "What is stakeholder management?",
      options: [
        "Managing relationships with interested parties",
        "Managing money",
        "Managing time",
        "Managing resources"
      ],
      correct: "Managing relationships with interested parties"
    },
    {
      question: "What is a KPI?",
      options: [
        "Key Performance Indicator",
        "Knowledge Process Integration",
        "Kinetic Project Implementation",
        "Key Project Initiative"
      ],
      correct: "Key Performance Indicator"
    },
    {
      question: "What is risk management?",
      options: [
        "Identifying and handling potential issues",
        "Managing employees",
        "Managing budgets",
        "Managing schedules"
      ],
      correct: "Identifying and handling potential issues"
    },
    {
      question: "What is agile methodology?",
      options: [
        "Iterative approach to project management",
        "Traditional project management",
        "Financial management",
        "Resource management"
      ],
      correct: "Iterative approach to project management"
    }
  ]
};

export const initializeDatabase = async () => {
  try {
    for (const [domain, questions] of Object.entries(initialQuestions)) {
      for (const question of questions) {
        await addDoc(collection(db, 'questions'), {
          domain,
          ...question
        });
      }
    }
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
};