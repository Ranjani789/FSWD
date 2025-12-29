import { useState } from "react";

export default function StudentFeedback() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (rating === 0) {
      setError("Please select a rating");
      return;
    }

    if (comment.trim().length < 5) {
      setError("Comment must be at least 5 characters");
      return;
    }

    setError("");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={styles.successScreen}>
        <h1>🎉 Thank You!</h1>
        <p>Your feedback has been submitted successfully.</p>
        <p><strong>Rating:</strong> {rating} / 5</p>
        <p><strong>Comment:</strong> {comment}</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <form style={styles.card} onSubmit={handleSubmit}>
          <h2 style={styles.title}>Student Feedback</h2>

          {/* Rating */}
          <div style={styles.ratingContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                style={{
                  ...styles.star,
                  color: star <= rating ? "#facc15" : "#d1d5db",
                }}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))}
          </div>

          {/* Comment */}
          <textarea
            style={styles.textarea}
            placeholder="Write your feedback..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          {error && <div style={styles.errorAlert}>{error}</div>}

          <button style={styles.button} type="submit">
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}


const styles = {
  container: {
    minHeight: "100vh",
    width: "100vw",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    fontFamily: "Arial, sans-serif",
  },

  overlay: {
    minHeight: "100vh",
    backgroundColor: "rgba(0,0,0,0.65)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  card: {
    backgroundColor: "#ffffff",
    padding: "30px",
    width: "340px",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    textAlign: "center",
  },

  title: {
    marginBottom: "20px",
  },

  ratingContainer: {
    marginBottom: "15px",
  },

  star: {
    fontSize: "32px",
    cursor: "pointer",
    marginRight: "5px",
  },

  textarea: {
    width: "100%",
    height: "90px",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    resize: "none",
    marginBottom: "10px",
  },

  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
  },

  errorAlert: {
    backgroundColor: "#fee2e2",
    color: "#b91c1c",
    padding: "8px",
    borderRadius: "6px",
    marginBottom: "10px",
    fontSize: "14px",
  },

  successScreen: {
    minHeight: "100vh",
    width: "100vw",
    backgroundColor: "#ecfeff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
    color: "#0f172a",
    padding: "20px",
    textAlign: "center",
  },
};
