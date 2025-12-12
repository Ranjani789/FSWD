import React, { useState } from "react";

function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    password: "",
    confirmPass: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let temp = {};

    if (!form.name.trim()) temp.name = "Name is required";

    if (!form.email.trim()) temp.email = "Email is required";
    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/i.test(form.email))
      temp.email = "Invalid email format";

    if (!form.phone.trim()) temp.phone = "Phone number required";
    else if (!/^[6-9]\d{9}$/.test(form.phone))
      temp.phone = "Enter valid 10-digit Indian number";

    if (!form.age) temp.age = "Age is required";
    else if (form.age < 18 || form.age > 60)
      temp.age = "Age must be between 18 and 60";

    if (!form.password) temp.password = "Password is required";
    else if (form.password.length < 6)
      temp.password = "Minimum 6 characters required";

    if (!form.confirmPass) temp.confirmPass = "Confirm password";
    else if (form.password !== form.confirmPass)
      temp.confirmPass = "Passwords do not match";

    setErrors(temp);

    if (Object.keys(temp).length === 0) {
      alert("Form Submitted Successfully!🎉");
    }
  };

  const styles = {
    wrapper: {
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundImage:
        "url('https://cdn.corporatefinanceinstitute.com/assets/data-validation.jpeg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },

    container: {
      width: "350px",
      padding: "25px",
      borderRadius: "20px",
      background: "rgba(255,255,255,0.3)",
      backdropFilter: "blur(10px)",
      boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
      color: "white",
      fontFamily: "Poppins, sans-serif",
      animation: "fadeIn 0.8s ease-in",
    },

    title: {
      textAlign: "center",
      fontSize: "24px",
      marginBottom: "20px",
      color: "#fff",
      fontWeight: "bold",
    },

    input: {
      width: "100%",
      padding: "12px",
      marginTop: "10px",
      borderRadius: "10px",
      border: "none",
      outline: "none",
      fontSize: "15px",
      transition: "0.3s",
    },

    error: {
      fontSize: "13px",
      color: "#ffe6e6",
      margin: "4px 0",
    },

    button: {
      width: "100%",
      padding: "12px",
      marginTop: "20px",
      border: "none",
      borderRadius: "12px",
      background: "#660066",
      color: "white",
      cursor: "pointer",
      fontSize: "18px",
      transition: "0.3s",
    },
  };

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-15px); }
          to { opacity: 1; transform: translateY(0); }
        }

        input:focus {
          transform: scale(1.03);
          background-color: #fff;
        }

        button:hover {
          background: #440044;
          transform: translateY(-2px);
        }
      `}</style>

      <div style={styles.wrapper}>
        <div style={styles.container}>
          <h1 style={styles.title}>Validation Form</h1>

          <form onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              style={styles.input}
              placeholder="Full Name"
              onChange={handleChange}
            />
            <p style={styles.error}>{errors.name}</p>

            <input
              name="email"
              type="text"
              style={styles.input}
              placeholder="Email Address"
              onChange={handleChange}
            />
            <p style={styles.error}>{errors.email}</p>

            <input
              name="phone"
              type="text"
              style={styles.input}
              placeholder="Phone Number"
              onChange={handleChange}
            />
            <p style={styles.error}>{errors.phone}</p>

            <input
              name="age"
              type="number"
              style={styles.input}
              placeholder="Age (18–60)"
              onChange={handleChange}
            />
            <p style={styles.error}>{errors.age}</p>

            <input
              name="password"
              type="password"
              style={styles.input}
              placeholder="Create Password"
              onChange={handleChange}
            />
            <p style={styles.error}>{errors.password}</p>

            <input
              name="confirmPass"
              type="password"
              style={styles.input}
              placeholder="Confirm Password"
              onChange={handleChange}
            />
            <p style={styles.error}>{errors.confirmPass}</p>

            <button style={styles.button} type="submit">
              Submit 🚀
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;