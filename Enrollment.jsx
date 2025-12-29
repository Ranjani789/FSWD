import { useState } from "react";

export default function CourseEnrollment() {
  const [studentName, setStudentName] = useState("");
  const [course, setCourse] = useState("");
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const handleEnroll = (e) => {
    e.preventDefault();
    if (!studentName || !course) return;

    setEnrolledCourses([...enrolledCourses, { studentName, course }]);
    setCourse("");
  };

  return (
    <div style={styles.background}>
      <div style={styles.card}>
        <h2 style={{ textAlign: "center" }}>Course Enrollment</h2>

        <form onSubmit={handleEnroll}>
          <input
            style={styles.input}
            type="text"
            placeholder="Student Name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            required
          />

          <select
            style={styles.input}
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          >
            <option value="">Select Course</option>
            <option>React Basics</option>
            <option>Java Programming</option>
            <option>Python for Beginners</option>
            <option>Web Development</option>
          </select>

          <button style={styles.button} type="submit">
            Enroll
          </button>
        </form>

        <div style={styles.list}>
          <h3>Enrolled Courses</h3>

          {enrolledCourses.length === 0 ? (
            <p>No enrollments yet</p>
          ) : (
            enrolledCourses.map((item, index) => (
              <p key={index}>
                <b>{item.studentName}</b> enrolled in <b>{item.course}</b>
              </p>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  background: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    background: "rgba(255,255,255,0.93)",
    padding: "25px",
    borderRadius: "10px",
    width: "350px"
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "10px"
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    cursor: "pointer"
  },
  list: {
    marginTop: "15px",
    padding: "10px",
    background: "#f2f2f2",
    borderRadius: "5px",
    maxHeight: "150px",
    overflowY: "auto"
  }
};
