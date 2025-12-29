import { useState } from "react";

export default function UserProfileEdit() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bio: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (formData.bio.length < 10) {
      newErrors.bio = "Bio must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSuccess(true);
      setErrors({});
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <form style={styles.card} onSubmit={handleSubmit}>
          <h2 style={styles.title}>Edit Profile</h2>

          {/* Name */}
          <input
            style={styles.input}
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p style={styles.error}>{errors.name}</p>}

          {/* Email */}
          <input
            style={styles.input}
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={styles.error}>{errors.email}</p>}

          {/* Bio */}
          <textarea
            style={styles.textarea}
            name="bio"
            placeholder="Short Bio"
            value={formData.bio}
            onChange={handleChange}
          />
          {errors.bio && <p style={styles.error}>{errors.bio}</p>}

          <button style={styles.button} type="submit">
            Save Changes
          </button>

          {success && (
            <p style={styles.success}>✔ Profile updated successfully!</p>
          )}
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
      "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    fontFamily: "Arial, sans-serif",
  },

  overlay: {
    minHeight: "100vh",
    backgroundColor: "rgba(0,0,0,0.6)",
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
  },

  title: {
    textAlign: "center",
    marginBottom: "20px",
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
    padding: "10px",
    height: "80px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    resize: "none",
    marginBottom: "8px",
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
    marginTop: "10px",
  },

  error: {
    color: "red",
    fontSize: "12px",
    marginBottom: "6px",
  },

  success: {
    color: "green",
    textAlign: "center",
    marginTop: "12px",
    fontWeight: "bold",
  },
};
