import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Brand / Logo */}
        <div className="footer-section">
          <h2 className="footer-logo">WasteTrace</h2>
          <p className="footer-text">
            Tracking waste responsibly, rewarding sustainability.  
            Together we keep our cities clean 🌍.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/upload">Upload</a></li>
            <li><a href="/rewards">Rewards</a></li>
            <li><a href="/profile">Profile</a></li>
          </ul>
        </div>

        {/* Contact / Socials */}
        <div className="footer-section">
          <h3 className="footer-title">Connect With Us</h3>
          <p className="footer-text">Email: support@wastetrace.org</p>
          <div className="socials">
            <a href="#">🌐</a>
            <a href="#">🐦</a>
            <a href="#">📘</a>
            <a href="#">📸</a>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} WasteTrace. All rights reserved.
      </div>
    </footer>
  );
}
