import { useState } from "react";

export default function Feedback() {
  const [data, setData] = useState({
    name: "",
    email: "",
    feedback: ""
  });
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(data);
    setData({ name: "", email: "", feedback: "" });
  };

  return (
    <div style={styles.background}>
      <div style={styles.card}>
        <h2 style={{ textAlign: "center" }}>Feedback Form</h2>

        <form onSubmit={handleSubmit}>
          <input
            style={styles.input}
            type="text"
            name="name"
            placeholder="Name"
            value={data.name}
            onChange={handleChange}
            required
          />

          <input
            style={styles.input}
            type="email"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={handleChange}
            required
          />

          <textarea
            style={styles.textarea}
            name="feedback"
            placeholder="Your Feedback"
            value={data.feedback}
            onChange={handleChange}
            required
          />

          <button style={styles.button} type="submit">
            Submit
          </button>
        </form>

        {submitted && (
          <div style={styles.output}>
            <h3>Submitted Data</h3>
            <p><b>Name:</b> {submitted.name}</p>
            <p><b>Email:</b> {submitted.email}</p>
            <p><b>Feedback:</b> {submitted.feedback}</p>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  background: {
    position: "fixed",       // ⬅ locks to viewport
    top: 0,
    left: 0,
    width: "100vw",          // ⬅ full width
    height: "100vh",         // ⬅ full height
    backgroundImage:
      "url('https://images.unsplash.com/photo-1506765515384-028b60a970df')",
    backgroundSize: "cover", // ⬅ fills screen
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    background: "rgba(255,255,255,0.92)",
    padding: "25px",
    borderRadius: "10px",
    width: "320px"
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "10px"
  },
  textarea: {
    width: "100%",
    height: "80px",
    padding: "8px",
    marginBottom: "10px"
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer"
  },
  output: {
    marginTop: "15px",
    padding: "10px",
    background: "#f2f2f2",
    borderRadius: "5px"
  }
};
