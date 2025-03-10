import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Left - Company Info */}
        <div style={styles.section}>
          <h3>TenantFlow</h3>
          <p>Making property management seamless and efficient.</p>
        </div>

        {/* Center - Quick Links */}
        <div style={styles.section}>
          <h3>Quick Links</h3>
          <ul style={styles.links}>
            <li><a href="/pricing" style={styles.link}>Pricing</a></li>
            <li><a href="/features" style={styles.link}>Features</a></li>
            <li><a href="/contact" style={styles.link}>Contact</a></li>
            <li><a href="/faq" style={styles.link}>FAQ</a></li>
          </ul>
        </div>

        {/* Right - Social Media & Contact */}
        <div style={styles.section}>
          <h3>Follow Us</h3>
          <div style={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>📘</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>🐦</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>🔗</a>
          </div>
          <p>📧 support@tenantflow.com</p>
          <p>📞 +1 (123) 456-7890</p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div style={styles.bottom}>
        <p>© {new Date().getFullYear()} TenantFlow. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: { backgroundColor: "#333", color: "white", padding: "40px 20px", marginTop: "40px" },
  container: { display: "flex", justifyContent: "space-between", maxWidth: "1200px", margin: "0 auto", flexWrap: "wrap" },
  section: { flex: "1", minWidth: "250px", textAlign: "center", padding: "10px" },
  links: { listStyle: "none", padding: 0 },
  link: { textDecoration: "none", color: "#ddd", fontSize: "14px", display: "block", padding: "5px" },
  socialIcons: { display: "flex", justifyContent: "center", gap: "10px", marginTop: "10px" },
  icon: { textDecoration: "none", fontSize: "20px", color: "white", padding: "5px" },
  bottom: { textAlign: "center", paddingTop: "20px", fontSize: "12px", borderTop: "1px solid #555" },
};

export default Footer;
