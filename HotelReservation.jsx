import {useState} from "react";

export default function HotelReservation() {
  const reserveHotel = () => {
    // Get guest name
    const guestName = prompt("Enter Guest Name:");
    if (!guestName) {
      alert("Reservation Cancelled");
      return;
    }

    // Get hotel name
    const hotelName = prompt("Enter Hotel Name:");
    if (!hotelName) {
      alert("Reservation Cancelled");
      return;
    }

    // Get number of nights
    const nights = prompt("Enter Number of Nights:");
    if (!nights || isNaN(nights)) {
      alert("Invalid input. Reservation Cancelled");
      return;
    }

    // Confirm reservation
    const confirmReservation = confirm(
      `Confirm Hotel Reservation?\n\nGuest: ${guestName}\nHotel: ${hotelName}\nNights: ${nights}`
    );

    if (confirmReservation) {
      alert(
        `🏨 Reservation Confirmed!\n\nGuest: ${guestName}\nHotel: ${hotelName}\nNights: ${nights}`
      );
    } else {
      alert("❌ Reservation Cancelled");
    }
  };

  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <h1>Hotel Reservation System</h1>
        <p>Reserve your hotel using dialog boxes</p>
        <button style={styles.button} onClick={reserveHotel}>
          Reserve Hotel
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
      "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1470&q=80')",
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
    width: "350px",
    boxShadow: "0px 0px 15px rgba(0,0,0,0.3)"
  },
  button: {
    marginTop: "15px",
    padding: "10px 22px",
    fontSize: "16px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "6px"
  }
};
