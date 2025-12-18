import { useState } from "react";

export default function TaskDashboard() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function addTask(e) {
    e.preventDefault();
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask.trim()]);
    setNewTask("");
  }

  function removeTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #e8f5e9, #c8e6c9)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "480px",
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#33691e",
            fontSize: "28px",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          Task Dashboard
        </h2>

        <form onSubmit={addTask} style={{ marginBottom: "25px" }}>
          <input
            type="text"
            placeholder="Enter a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            style={{
              width: "80%",
              padding: "12px 18px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
              marginRight: "8px",
              outline: "none",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "12px 20px",
              backgroundColor: "#33691e",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#2c6b1e")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#33691e")}
          >
            Add
          </button>
        </form>

        <ul style={{ listStyleType: "none", padding: 0, marginBottom: "20px" }}>
          {tasks.map((task, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "12px",
                padding: "12px",
                backgroundColor: "#e8f5e9",
                borderRadius: "8px",
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                fontSize: "16px",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.02)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
              <span style={{ color: "#388e3c", fontWeight: "500" }}>{task}</span>
              <button
                onClick={() => removeTask(index)}
                style={{
                  backgroundColor: "#c62828",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  padding: "6px 14px",
                  fontSize: "14px",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#d32f2f")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#c62828")}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>

        {tasks.length === 0 && (
          <p style={{ color: "#777", fontSize: "16px" }}>No tasks yet.</p>
        )}
      </div>
    </div>
  );
}
