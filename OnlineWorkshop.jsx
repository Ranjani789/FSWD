import { useState } from "react";

export default function WorkshopRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    workshop: "React Basics",
    experience: "Beginner",
    notes: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSubmitted(false);
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setErrors({});
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <div style={styles.layout}>
          {/* Form */}
          <form style={styles.card} onSubmit={handleSubmit}>
            <h2 style={styles.title}>🎓 Workshop Registration</h2>

            <input
              style={styles.input}
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p style={styles.error}>{errors.name}</p>}

            <input
              style={styles.input}
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p style={styles.error}>{errors.email}</p>}

            <select
              style={styles.input}
              name="workshop"
              value={formData.workshop}
              onChange={handleChange}
            >
              <option>React Basics</option>
              <option>Advanced JavaScript</option>
              <option>UI/UX Design</option>
              <option>Full-Stack Development</option>
            </select>

            <select
              style={styles.input}
              name="experience"
              value={formData.experience}
              onChange={handleChange}
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>

            <textarea
              style={styles.textarea}
              name="notes"
              placeholder="Additional notes (optional)"
              value={formData.notes}
              onChange={handleChange}
            />

            <button style={styles.button} type="submit">
              Register
            </button>

            {submitted && (
              <p style={styles.success}>✔ Registration submitted successfully!</p>
            )}
          </form>

          {/* Live Preview */}
          <div style={styles.preview}>
            <h3>Live Preview</h3>
            <p><strong>Name:</strong> {formData.name || "—"}</p>
            <p><strong>Email:</strong> {formData.email || "—"}</p>
            <p><strong>Workshop:</strong> {formData.workshop}</p>
            <p><strong>Experience:</strong> {formData.experience}</p>
            <p><strong>Notes:</strong></p>
            <p style={styles.notesPreview}>
              {formData.notes || "No additional notes"}
            </p>
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
      "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')",
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
    padding: "20px",
  },

  layout: {
    display: "flex",
    gap: "25px",
    flexWrap: "wrap",
    maxWidth: "900px",
  },

  card: {
    backgroundColor: "#ffffff",
    padding: "25px",
    width: "340px",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  },

  preview: {
    backgroundColor: "#f9fafb",
    padding: "25px",
    width: "300px",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
  },

  title: {
    textAlign: "center",
    marginBottom: "15px",
  },

  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "8px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },

  textarea: {
    width: "100%",
    height: "80px",
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

  error: {
    color: "red",
    fontSize: "12px",
    marginBottom: "6px",
  },

  success: {
    color: "green",
    textAlign: "center",
    marginTop: "10px",
    fontWeight: "bold",
  },

  notesPreview: {
    fontSize: "14px",
    color: "#374151",
    fontStyle: "italic",
  },
};
