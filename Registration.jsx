import React, { useState } from "react";

export default function Registration() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    address: "",
    gender: "",
    symptoms: [],
    bloodGroup: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      let updatedSymptoms = [...formData.symptoms];
      if (checked) {
        updatedSymptoms.push(value);
      } else {
        updatedSymptoms = updatedSymptoms.filter((symptom) => symptom !== value);
      }
      setFormData({ ...formData, symptoms: updatedSymptoms });
    } else if (type === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Patient Registered Successfully!");
    console.log(formData);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          "url('https://images.pexels.com/photos/1250655/pexels-photo-1250655.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: "30px",
          borderRadius: "10px",
          maxWidth: "500px",
          width: "100%",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Patient Registration</h2>

        <label>Full Name:</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <label>Phone Number:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone || ""}
          onChange={handleChange}
          placeholder="Enter phone number"
          required
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <label>Address:</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          rows="3"
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <label>Gender:</label>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === "Male"}
            onChange={handleChange}
          />{" "}
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === "Female"}
            onChange={handleChange}
            style={{ marginLeft: "10px" }}
          />{" "}
          Female
        </div>

        <label>Symptoms:</label>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="checkbox"
            name="symptoms"
            value="Fever"
            checked={formData.symptoms.includes("Fever")}
            onChange={handleChange}
          />{" "}
          Fever
          <input
            type="checkbox"
            name="symptoms"
            value="Cough"
            checked={formData.symptoms.includes("Cough")}
            onChange={handleChange}
            style={{ marginLeft: "10px" }}
          />{" "}
          Cough
          <input
            type="checkbox"
            name="symptoms"
            value="Fatigue"
            checked={formData.symptoms.includes("Fatigue")}
            onChange={handleChange}
            style={{ marginLeft: "10px" }}
          />{" "}
          Fatigue
        </div>

        <label>Blood Group:</label>
        <select
          name="bloodGroup"
          value={formData.bloodGroup}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px" }}
        >
          <option value="">Select</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>

        <label>Upload File:</label>
        <input
          type="file"
          name="file"
          onChange={handleChange}
          style={{ marginBottom: "20px" }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}