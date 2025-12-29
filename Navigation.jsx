import { useState } from "react";

export default function StudentDashboard() {
  const [activePage, setActivePage] = useState("Dashboard");

  const students = [
    { id: 1, name: "Alice Johnson", grade: "A", email: "alice@example.com" },
    { id: 2, name: "Bob Smith", grade: "B+", email: "bob@example.com" },
    { id: 3, name: "Charlie Brown", grade: "A-", email: "charlie@example.com" },
    { id: 4, name: "Diana Ross", grade: "B", email: "diana@example.com" },
  ];

  const renderContent = () => {
    switch (activePage) {
      case "Dashboard":
        return <h2 style={styles.contentTitle}>Welcome to the Student Dashboard</h2>;
      case "Students":
        return (
          <div>
            <h2 style={styles.contentTitle}>Students List</h2>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>ID</th>
                  <th style={styles.th}>Name</th>
                  <th style={styles.th}>Grade</th>
                  <th style={styles.th}>Email</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s) => (
                  <tr key={s.id}>
                    <td style={styles.td}>{s.id}</td>
                    <td style={styles.td}>{s.name}</td>
                    <td style={styles.td}>{s.grade}</td>
                    <td style={styles.td}>{s.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "Reports":
        return <h2 style={styles.contentTitle}>Reports Section (Coming Soon)</h2>;
      default:
        return null;
    }
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h2 style={styles.logo}>Student Management</h2>
        <nav style={styles.nav}>
          {["Dashboard", "Students", "Reports"].map((page) => (
            <div
              key={page}
              style={{
                ...styles.navItem,
                backgroundColor: activePage === page ? "#2563eb" : "transparent",
                color: activePage === page ? "#fff" : "#e5e7eb",
              }}
              onClick={() => setActivePage(page)}
            >
              {page}
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div style={styles.main}>{renderContent()}</div>
    </div>
  );
}


const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    width: "100vw",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1581092580494-7b63e6b7c91b')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    fontFamily: "Arial, sans-serif",
    color: "#f9fafb",
  },

  sidebar: {
    width: "220px",
    backgroundColor: "rgba(0,0,0,0.75)",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
  },

  logo: {
    marginBottom: "30px",
    fontSize: "18px",
    fontWeight: "bold",
  },

  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  navItem: {
    padding: "10px 12px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.2s",
  },

  main: {
    flex: 1,
    padding: "25px",
    backgroundColor: "rgba(255,255,255,0.85)",
    color: "#111827",
    overflowY: "auto",
  },

  contentTitle: {
    marginBottom: "20px",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  th: {
    border: "1px solid #d1d5db",
    padding: "8px",
    textAlign: "left",
    backgroundColor: "#e5e7eb",
  },

  td: {
    border: "1px solid #d1d5db",
    padding: "8px",
    textAlign: "left",
  },
};
