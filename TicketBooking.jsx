export default function FlightTicketBooking() {
  const bookFlight = () => {
    const passenger = prompt("Enter Passenger Name:");
    if (!passenger) {
      alert("Booking Cancelled");
      return;
    }

    const destination = prompt("Enter Destination:");
    if (!destination) {
      alert("Booking Cancelled");
      return;
    }

    const confirmBooking = confirm(
      `Confirm Flight Booking?\n\nPassenger: ${passenger}\nDestination: ${destination}`
    );

    if (confirmBooking) {
      alert(
        `✅ Flight Booked Successfully!\n\nPassenger: ${passenger}\nDestination: ${destination}`
      );
    } else {
      alert("Booking Cancelled ❌");
    }
  };

  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <h1>Flight Ticket Booking ✈️</h1>
        <p>Book your flight using "Book Ticket"</p>
        <button style={styles.button} onClick={bookFlight}>
          Book Ticket
        </button>
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
      "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    background: "rgba(255,255,255,0.95)",
    padding: "30px",
    borderRadius: "10px",
    textAlign: "center",
    width: "320px"
  },
  button: {
    marginTop: "15px",
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer"
  }
};
