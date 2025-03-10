import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1>Dashboard</h1>
      <p>Manage your properties and tenants with ease.</p>

      {/* Quick Links */}
      <div style={styles.quickLinks}>
        <button style={styles.button} onClick={() => navigate("/profiling")}>
          🔍 Tenant Profiling
        </button>
        <button style={styles.button}>
          📊 View Reports
        </button>
        <button style={styles.button}>
          🏠 Manage Properties
        </button>
      </div>
    </div>
  );
};

/* Styles */
const styles = {
  container: { textAlign: "center", padding: "50px", backgroundColor: "#ffffff" },
  quickLinks: { display: "flex", justifyContent: "center", gap: "20px", marginTop: "30px" },
  button: { padding: "12px 20px", backgroundColor: "#4F46E5", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px" },
};

export default Dashboard;
