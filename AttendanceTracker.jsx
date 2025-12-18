import React, { useState } from "react";

export default function AttendanceTracker() {
  const [students, setStudents] = useState([
    { id: 1, name: "Ranjani", present: false },
    { id: 2, name: "Priya", present: false },
    { id: 3, name: "Ram", present: false },
  ]);

  const toggleAttendance = (id) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id
          ? { ...student, present: !student.present }
          : student
      )
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          maxWidth: "400px",
          width: "100%",
          padding: "20px",
          borderRadius: "12px",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Attendance Tracker
        </h2>

        {students.map((student) => (
          <div
            key={student.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "8px",
              backgroundColor: student.present ? "#ccffcc" : "#ffcccc",
            }}
          >
            <span style={{ fontWeight: "600" }}>{student.name}</span>

            <button
              onClick={() => toggleAttendance(student.id)}
              style={{
                backgroundColor: student.present ? "green" : "red",
                color: "white",
                border: "none",
                padding: "6px 12px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              {student.present ? "Present" : "Absent"}
            </button>
          </div>
        ))}

        <p style={{ textAlign: "center", marginTop: "15px", fontSize: "14px" }}>
          Click button to toggle attendance
        </p>
      </div>
    </div>
  );
}
