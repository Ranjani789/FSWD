import { useState } from "react";

export default function DashboardNotifications() {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New assignment uploaded", read: false },
    { id: 2, message: "Workshop starts at 5 PM today", read: false },
    { id: 3, message: "Profile updated successfully", read: true },
  ]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const addNotification = () => {
    const newNotification = {
      id: Date.now(),
      message: "You have a new system alert",
      read: false,
    };
    setNotifications([newNotification, ...notifications]);
  };

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n
      )
    );
  };

  const clearAll = () => {
    setNotifications([]);
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <div style={styles.dashboard}>
          {/* Header */}
          <div style={styles.header}>
            <h2>Dashboard</h2>

            <div style={styles.bell}>
              🔔
              {unreadCount > 0 && (
                <span style={styles.badge}>{unreadCount}</span>
              )}
            </div>
          </div>

          {/* Actions */}
          <div style={styles.actions}>
            <button style={styles.button} onClick={addNotification}>
              + Add Notification
            </button>
            <button style={styles.clearButton} onClick={clearAll}>
              Clear All
            </button>
          </div>

          {/* Notifications List */}
          <div style={styles.list}>
            {notifications.length === 0 && (
              <p style={styles.empty}>No notifications</p>
            )}

            {notifications.map((n) => (
              <div
                key={n.id}
                style={{
                  ...styles.notification,
                  backgroundColor: n.read ? "#f3f4f6" : "#e0f2fe",
                }}
                onClick={() => markAsRead(n.id)}
              >
                <p>{n.message}</p>
                {!n.read && <span style={styles.unread}>New</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


const styles = {
  container: {
    minHeight: "100vh",
    width: "100vw",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1526378722484-cc5c510f7c84')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    fontFamily: "Arial, sans-serif",
  },

  overlay: {
    minHeight: "100vh",
    backgroundColor: "rgba(0,0,0,0.65)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },

  dashboard: {
    backgroundColor: "#ffffff",
    width: "380px",
    padding: "25px",
    borderRadius: "14px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.3)",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
  },

  bell: {
    fontSize: "22px",
    position: "relative",
    cursor: "pointer",
  },

  badge: {
    position: "absolute",
    top: "-8px",
    right: "-10px",
    backgroundColor: "#ef4444",
    color: "#fff",
    borderRadius: "50%",
    fontSize: "12px",
    padding: "2px 6px",
  },

  actions: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "15px",
  },

  button: {
    padding: "8px 12px",
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
  },

  clearButton: {
    padding: "8px 12px",
    backgroundColor: "#dc2626",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
  },

  list: {
    maxHeight: "260px",
    overflowY: "auto",
  },

  notification: {
    padding: "10px",
    borderRadius: "6px",
    marginBottom: "8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    fontSize: "14px",
  },

  unread: {
    backgroundColor: "#2563eb",
    color: "#fff",
    fontSize: "10px",
    padding: "2px 6px",
    borderRadius: "10px",
  },

  empty: {
    textAlign: "center",
    color: "#6b7280",
    fontSize: "14px",
  },
};
