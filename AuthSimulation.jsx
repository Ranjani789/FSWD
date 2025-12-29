import { useState } from "react";

export default function AuthSimulation() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Hardcoded demo credentials
  const DEMO_USER = {
    username: "user",
    password: "1234",
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setError("");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      credentials.username === DEMO_USER.username &&
      credentials.password === DEMO_USER.password
    ) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("❌ Invalid username or password");
    }
  };

  // Logged-in screen
  if (isAuthenticated) {
    return (
      <div style={styles.successScreen}>
        <h1>✅ Login Successful</h1>
        <p>Welcome, {credentials.username}!</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <form style={styles.card} onSubmit={handleLogin}>
          <h2 style={styles.title}>Login</h2>

          <input
            style={styles.input}
            type="text"
            name="username"
            placeholder="Username"
            value={credentials.username}
            onChange={handleChange}
            required
          />

          <input
            style={styles.input}
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            required
          />

          {error && <div style={styles.errorAlert}>{error}</div>}

          <button style={styles.button} type="submit">
            Login
          </button>

          <p style={styles.hint}>
            Demo Login → <strong>user / 1234</strong>
          </p>
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
      "url('https://images.unsplash.com/photo-1517433456452-f9633a875f6f')",
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
    boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
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
    fontSize: "14px",
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

  errorAlert: {
    backgroundColor: "#fee2e2",
    color: "#b91c1c",
    padding: "8px",
    borderRadius: "6px",
    marginBottom: "10px",
    fontSize: "14px",
  },

  hint: {
    marginTop: "12px",
    fontSize: "12px",
    color: "#6b7280",
  },

  successScreen: {
    minHeight: "100vh",
    backgroundColor: "#f0fdf4",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
    color: "#166534",
  },
};
