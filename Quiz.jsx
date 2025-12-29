import React, { useState } from "react";

export default function Quiz() {
  const questions = [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyperlinks Text Mark Language",
        "None of these",
      ],
      answer: "Hyper Text Markup Language",
    },
    {
      question: "Which hook is used to manage state in React?",
      options: ["useEffect", "useState", "useRef", "useMemo"],
      answer: "useState",
    },
    {
      question: "Which language is used for styling web pages?",
      options: ["HTML", "CSS", "Java", "Python"],
      answer: "CSS",
    },
    {
      question: "Which company developed React?",
      options: ["Google", "Microsoft", "Facebook", "Amazon"],
      answer: "Facebook",
    },
    {
      question: "What does JSX stand for?",
      options: [
        "JavaScript XML",
        "Java Syntax Extension",
        "JSON XML",
        "Java Source X",
      ],
      answer: "JavaScript XML",
    },
  ];

  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[currentQ].answer) {
      setScore(score + 1);
    }

    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div style={styles.background}>
      <div style={styles.quizBox}>
        <h1 style={styles.title}>Online Quiz</h1>

        {showScore ? (
          <h2 style={styles.score}>
            Your Score: {score} / {questions.length}
          </h2>
        ) : (
          <>
            <p style={styles.progress}>
              Question {currentQ + 1} of {questions.length}
            </p>

            <h3 style={styles.question}>
              {questions[currentQ].question}
            </h3>

            {questions[currentQ].options.map((option, index) => (
              <button
                key={index}
                style={styles.button}
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  background: {
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  quizBox: {
    background: "rgba(255, 255, 255, 0.92)",
    padding: "30px",
    borderRadius: "12px",
    width: "380px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
  },
  title: {
    marginBottom: "10px",
    color: "#2c3e50",
  },
  progress: {
    fontSize: "14px",
    color: "#555",
  },
  question: {
    fontSize: "18px",
    margin: "15px 0",
  },
  button: {
    width: "100%",
    padding: "10px",
    margin: "8px 0",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#3498db",
    color: "#fff",
    fontSize: "15px",
    cursor: "pointer",
  },
  score: {
    color: "#27ae60",
  },
};