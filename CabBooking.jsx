import React from "react";

export default function CabBooking() {
  const bookCab = () => {
    const passenger = prompt("Enter your name:");
    if (!passenger) {
      alert("Booking Cancelled");
      return;
    }

    const pickup = prompt("Enter Pickup Location:");
    if (!pickup) {
      alert("Booking Cancelled");
      return;
    }

    const drop = prompt("Enter Drop Location:");
    if (!drop) {
      alert("Booking Cancelled");
      return;
    }

    const cabType = prompt(
      "Enter Cab Type (Sedan / SUV / Hatchback / Luxury):"
    );
    if (!cabType) {
      alert("Booking Cancelled");
      return;
    }

    const confirmBooking = confirm(
      `Confirm Cab Booking?\n\nPassenger: ${passenger}\nPickup: ${pickup}\nDrop: ${drop}\nCab Type: ${cabType}`
    );

    if (confirmBooking) {
      alert(
        `🚖 Cab Booked Successfully!\n\nPassenger: ${passenger}\nPickup: ${pickup}\nDrop: ${drop}\nCab Type: ${cabType}`
      );
    } else {
      alert("❌ Booking Cancelled");
    }
  };

  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <h1>Online Cab Booking</h1>
        <button style={styles.button} onClick={bookCab}>
          Book Cab
        </button>
      </div>
    </div>
  );
}

const styles = {
  background: {
    margin: 0,
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1556122071-e404eaedb77f?q=80&w=1134&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    background: "rgba(255, 255, 255, 0.95)",
    padding: "30px",
    borderRadius: "12px",
    textAlign: "center",
    width: "360px",
    boxShadow: "0px 0px 15px rgba(0,0,0,0.3)"
  },
  button: {
    marginTop: "15px",
    padding: "10px 22px",
    fontSize: "16px",
    backgroundColor: "#ff5722",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "6px"
  }
};
