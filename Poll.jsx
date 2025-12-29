import React, { useState } from "react";

export default function Poll() {
  const [votes, setVotes] = useState({
    OptionA: 0,
    OptionB: 0,
    OptionC: 0,
    OptionD: 0,
  });

  const totalVotes =
    votes.OptionA +
    votes.OptionB +
    votes.OptionC +
    votes.OptionD;

  const vote = (option) => {
    setVotes({ ...votes, [option]: votes[option] + 1 });
  };

  return (
    <div style={styles.background}>
      <div style={styles.pollBox}>
        <h1 style={styles.title}>📊 Classroom Live Poll</h1>

        <h3 style={styles.question}>
          Which technology are you most interested in?
        </h3>

        <button style={styles.button} onClick={() => vote("OptionA")}>
          Artificial Intelligence
        </button>
        <button style={styles.button} onClick={() => vote("OptionB")}>
          Blockchain
        </button>
        <button style={styles.button} onClick={() => vote("OptionC")}>
          Cloud Computing
        </button>
        <button style={styles.button} onClick={() => vote("OptionD")}>
          Cyber Security
        </button>

        <hr />

        <h3>📈 Live Results</h3>

        <p>AI: {votes.OptionA} votes</p>
        <p>Blockchain: {votes.OptionB} votes</p>
        <p>Cloud: {votes.OptionC} votes</p>
        <p>Cyber Security: {votes.OptionD} votes</p>

        <h4>Total Votes: {totalVotes}</h4>
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
      "url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  pollBox: {
    background: "rgba(255,255,255,0.95)",
    padding: "30px",
    borderRadius: "12px",
    width: "420px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  },
  title: {
    color: "#2c3e50",
    marginBottom: "10px",
  },
  question: {
    marginBottom: "15px",
    fontSize: "18px",
  },
  button: {
    width: "100%",
    padding: "10px",
    margin: "6px 0",
    border: "none",
    borderRadius: "6px",
    fontSize: "15px",
    cursor: "pointer",
    backgroundColor: "#3498db",
    color: "#fff",
  },
};