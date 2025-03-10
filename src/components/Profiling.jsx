import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1>Welcome to TenantFlow</h1>
      <p>Seamless property management for landlords & tenants.</p>

      {/* Profiling Button */}
      <button style={styles.profilingButton} onClick={() => navigate("/profiling")}>
        🔍 Go to Tenant Profiling
      </button>
    </div>
  );
};

/* Styles */
const styles = {
  container: { textAlign: "center", padding: "40px", backgroundColor: "#f7f7f7" },
  profilingButton: { marginTop: "20px", padding: "12px 20px", backgroundColor: "#4F46E5", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px" },
};

export default Home;
