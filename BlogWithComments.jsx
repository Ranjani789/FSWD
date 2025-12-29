import { useState } from "react";

export default function BlogWithComments() {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([
    "Great article!",
    "Very helpful explanation 👍",
  ]);

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    setComments([...comments, commentText]);
    setCommentText("");
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <div style={styles.blogLayout}>
          {/* Blog Content */}
          <div style={styles.blogCard}>
            <h1 style={styles.title}>Building Modern Web Apps</h1>
            <p style={styles.meta}>Posted on Sept 2025 · By Admin</p>

            <p style={styles.content}>
              Modern web applications focus on responsiveness, real-time
              interaction, and great user experience. React makes it easy
              to build interactive UIs using components and state.
            </p>

            <p style={styles.content}>
              In this article, we explored how to build a responsive blog
              layout and update comments in real time without refreshing
              the page.
            </p>
          </div>

          {/* Comments Section */}
          <div style={styles.commentCard}>
            <h3>💬 Comments ({comments.length})</h3>

            <div style={styles.commentList}>
              {comments.map((c, index) => (
                <div key={index} style={styles.comment}>
                  {c}
                </div>
              ))}
            </div>

            <form onSubmit={handleAddComment}>
              <textarea
                style={styles.textarea}
                placeholder="Write a comment..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              />

              <button style={styles.button} type="submit">
                Add Comment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}


const styles = {
  container: {
    minHeight: "100vh",
    width: "100vw",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1499750310107-5fef28a66643')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    fontFamily: "Arial, sans-serif",
  },

  overlay: {
    minHeight: "100vh",
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    padding: "20px",
  },

  blogLayout: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    maxWidth: "900px",
    width: "100%",
  },

  blogCard: {
    flex: "1 1 520px",
    backgroundColor: "#ffffff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  },

  commentCard: {
    flex: "1 1 300px",
    backgroundColor: "#f9fafb",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
    display: "flex",
    flexDirection: "column",
  },

  title: {
    marginBottom: "8px",
  },

  meta: {
    fontSize: "12px",
    color: "#6b7280",
    marginBottom: "15px",
  },

  content: {
    marginBottom: "12px",
    lineHeight: "1.6",
  },

  commentList: {
    flex: 1,
    overflowY: "auto",
    marginBottom: "10px",
  },

  comment: {
    backgroundColor: "#e5e7eb",
    padding: "8px",
    borderRadius: "6px",
    marginBottom: "6px",
    fontSize: "14px",
  },

  textarea: {
    width: "100%",
    height: "60px",
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    resize: "none",
    marginBottom: "8px",
  },

  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
  },
};
