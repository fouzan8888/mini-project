import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1>Welcome to TenantFlow</h1>
        <p>Seamless property management for landlords & tenants.</p>
        <Link to="/tenantflow" style={styles.ctaButton}>Explore Now</Link>
      </section>

      {/* Features Section */}
      <section style={styles.features}>
        <h2>Why Choose TenantFlow?</h2>
        <div style={styles.featureGrid}>
          <div style={styles.featureCard}>
            <h3>📊 Smart Analytics</h3>
            <p>Track revenue, properties, and tenants with real-time data.</p>
          </div>
          <div style={styles.featureCard}>
            <h3>🔐 Secure Payments</h3>
            <p>Automate rent collection with integrated payment systems.</p>
          </div>
          <div style={styles.featureCard}>
            <h3>📁 Easy Property Management</h3>
            <p>Manage leases, maintenance, and documents in one place.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

/* Styles */
const styles = {
  container: { textAlign: "center", padding: "40px", backgroundColor: "#f7f7f7" },
  hero: { padding: "60px", backgroundColor: "#4F46E5", color: "white", borderRadius: "10px" },
  ctaButton: { display: "inline-block", padding: "12px 20px", backgroundColor: "white", color: "#4F46E5", borderRadius: "5px", marginTop: "10px", textDecoration: "none", fontWeight: "bold" },
  features: { marginTop: "40px" },
  featureGrid: { display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" },
  featureCard: { backgroundColor: "white", padding: "20px", borderRadius: "8px", boxShadow: "0px 2px 5px rgba(0,0,0,0.1)", width: "250px" },
};

export default Home;
