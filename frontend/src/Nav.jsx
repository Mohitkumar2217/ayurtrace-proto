import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
    const [openReport, setOpenReport] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a className="brand" href="/">
                    <svg
                        className="brand-logo"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden
                    >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 2.76 2.24 5 5 5h4c2.76 0 5-2.24 5-5 0-3.87-3.13-7-7-7zm0 20c-4.42 0-8-1.79-8-4v-2h16v2c0 2.21-3.58 4-8 4z" />
                    </svg>
                    <span className="brand-text">WasteTrace</span>
                </a>

                {/* Nav Links */}
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li><a href="/upload">Upload</a></li>

                    {/* Reports Dropdown */}
                    <li className="dropdown">
                        <button
                            className="dropdown-btn"
                            onClick={() => setOpenReport(!openReport)}
                        >
                            Reports ▾
                        </button>
                        {openReport && (
                            <div className="dropdown-menu">
                                <a href="/reports/segregation">Segregation Scores</a>
                                <a href="/reports/uploads">Upload History</a>
                                <a href="/reports/tokens">Token Rewards</a>
                                <a href="/reports/locations">Waste by Location</a>
                            </div>
                        )}
                    </li>

                    <li><a href="/rewards">Rewards</a></li>
                    <li><a href="/profile">Profile</a></li>
                </ul>

                {/* Mobile menu (future use) */}
                <button className="menu-btn">☰</button>
            </div>
        </nav>
    );
}

