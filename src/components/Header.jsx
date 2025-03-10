import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <Link to="/" style={styles.logo}>TenantFlow</Link>
        <div style={styles.navLinks}>
          <Link to="/" style={styles.navItem}>Home</Link>
          <Link to="/dashboard" style={styles.navItem}>Dashboard</Link>
          <Link to="/pricing" style={styles.navItem}>Pricing</Link>
          <Link to="/about" style={styles.navItem}>About</Link>
        </div>
        <div style={styles.authButtons}>
          <Link to="/login" style={styles.loginButton}>Log In</Link>
          <Link to="/signup" style={styles.signupButton}>Sign Up</Link>
        </div>
      </nav>
    </header>
  );
};

const styles = {
  header: { backgroundColor: "#fff", boxShadow: "0px 1px 5px rgba(0,0,0,0.1)", padding: "10px 20px" },
  nav: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  logo: { fontSize: "20px", fontWeight: "bold", textDecoration: "none", color: "#333" },
  navLinks: { display: "flex", gap: "15px" },
  navItem: { textDecoration: "none", color: "#333", fontSize: "16px" },
  authButtons: { display: "flex", gap: "10px" },
  loginButton: { textDecoration: "none", padding: "8px 16px", border: "1px solid #4F46E5", color: "#4F46E5" },
  signupButton: { textDecoration: "none", padding: "8px 16px", backgroundColor: "#4F46E5", color: "white", border: "none" },
};

export default Header;
