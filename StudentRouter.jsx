import React from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";

/* ---------- STYLES ---------- */
const appStyle = {
  minHeight: "100vh",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  backgroundImage:
    "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/bg.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  fontFamily: "Segoe UI, sans-serif"
};

const navStyle = {
  background: "rgba(0,0,0,0.75)",
  padding: "18px 30px",
  display: "flex",
  gap: "25px",
  backdropFilter: "blur(6px)",
  boxShadow: "0 4px 12px rgba(0,0,0,0.4)"
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: "600",
  letterSpacing: "0.5px",
  paddingBottom: "5px",
  borderBottom: "2px solid transparent",
  transition: "all 0.3s ease"
};

const activeLink = {
  borderBottom: "2px solid #e5ed77ff",
  color: "#f3f37aff"
};

const cardStyle = {
  maxWidth: "10000px",
  margin: "40px auto",
  padding: "30px",
  background: "rgba(231, 241, 119, 0.9)",
  borderRadius: "15px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
  animation: "fadeIn 0.6s ease"
};

const listItemStyle = {
  background: "#b0b1a5ff",
  margin: "8px 0",
  padding: "10px 15px",
  borderRadius: "8px",
  fontWeight: "500"
};

/* ---------- SAMPLE DATA ---------- */
const student = {
  name: "Ranjani",
  roll: "23BCS086",
  department: "Computer Science",
  semester: "5th",
  courses: ["React JS", "Data Structures", "DBMS", "Operating Systems"],
  attendance: "98%"
};

/* ---------- PAGES ---------- */
const Dashboard = () => (
  <div style={cardStyle}>
    <h1>Student Dashboard</h1>
    <p><b>Name:</b> {student.name}</p>
    <p><b>Roll No:</b> {student.roll}</p>
    <p><b>Department:</b> {student.department}</p>
    <p><b>Semester:</b> {student.semester}</p>
  </div>
);

const Profile = () => (
  <div style={cardStyle}>
    <h1>Profile</h1>
    <p><b>Name:</b> {student.name}</p>
    <p><b>Roll No:</b> {student.roll}</p>
    <p><b>Attendance:</b> {student.attendance}</p>
  </div>
);

const Courses = () => (
  <div style={cardStyle}>
    <h1>Courses</h1>
    <ul style={{ listStyle: "none", padding: 0 }}>
      {student.courses.map((course, index) => (
        <li key={index} style={listItemStyle}>{course}</li>
      ))}
    </ul>
  </div>
);

const Settings = () => (
  <div style={cardStyle}>
    <h1>Settings</h1>
    <p>Theme: Light</p>
    <p>Notifications: Enabled</p>
  </div>
);

/* ---------- NAV LINK COMPONENT ---------- */
const NavLink = ({ to, label }) => {
  const location = useLocation();
  return (
    <Link
      to={to}
      style={{
        ...linkStyle,
        ...(location.pathname === to ? activeLink : {})
      }}
    >
      {label}
    </Link>
  );
};

/* ---------- MAIN COMPONENT ---------- */
export default function StudentRouter() {
  return (
    <BrowserRouter>
      {/* Keyframes for animation */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(15px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      <div style={appStyle}>
        <nav style={navStyle}>
          <NavLink to="/" label="Dashboard" />
          <NavLink to="/profile" label="Profile" />
          <NavLink to="/courses" label="Courses" />
          <NavLink to="/settings" label="Settings" />
        </nav>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
