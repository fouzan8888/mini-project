import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulate authentication
    if (email === "admin@example.com" && password === "password") {
      localStorage.setItem("isAuthenticated", "true"); // Store login state
      setIsAuthenticated(true);
      navigate("/"); // Redirect to Home Page after login
    } else {
      alert("Invalid credentials! Try admin@example.com / password");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required style={styles.input} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required style={styles.input} />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

/* Styles */
const styles = {
  container: { maxWidth: "400px", margin: "0 auto", padding: "20px", textAlign: "center" },
  form: { display: "flex", flexDirection: "column", gap: "10px" },
  input: { width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" },
  button: { padding: "10px", backgroundColor: "#4F46E5", color: "white", border: "none", cursor: "pointer", borderRadius: "5px" },
};

export default Login;
