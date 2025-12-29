import { useState } from "react";

export default function RoleBasedLogin() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "Student",
  });

  const [loggedInRole, setLoggedInRole] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulated login success
    setLoggedInRole(formData.role);
  };

  if (loggedInRole === "Admin") {
    return <Dashboard title="Admin Dashboard" />;
  }

  if (loggedInRole === "Instructor") {
    return <Dashboard title="Instructor Dashboard" />;
  }

  if (loggedInRole === "Student") {
    return <Dashboard title="Student Dashboard" />;
  }

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <form style={styles.card} onSubmit={handleSubmit}>
          <h2 style={styles.title}>Login</h2>

          <input
            style={styles.input}
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <input
            style={styles.input}
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <select
            style={styles.input}
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option>Student</option>
            <option>Instructor</option>
            <option>Admin</option>
          </select>

          <button style={styles.button} type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

function Dashboard({ title }) {
  return (
    <div style={styles.dashboard}>
      <h1>{title}</h1>
      <p>Welcome! You have been redirected based on your role.</p>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    width: "100vw",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')",
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
    width: "320px",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    textAlign: "center",
  },

  title: {
    marginBottom: "20px",
  },

  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
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

  dashboard: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f3f4f6",
    fontFamily: "Arial, sans-serif",
  },
};
