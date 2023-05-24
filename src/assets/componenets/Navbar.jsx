import { color } from "framer-motion";
import React from "react";

const Navbar = () => {
  const handleHover = (event) => {
    event.target.style.color = "#87CEFA";
  };

  const handleLeave = (event) => {
    event.target.style.color = "white";
  };
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoname}>
        <div>
          <img
            height="70"
            width="70"
            src="/src/assets/png/logo_white.png"
            alt=""
          />
        </div>
        <div style={styles.name}>
          <h1 style={styles.logo1}>Weather</h1>
          <h4 style={styles.logo2}>Web App</h4>
        </div>
      </div>
      <div>
        <ul style={styles.menu}>
          <li style={styles.menuItem}>
            <a
              href="#Home"
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            >
              Home
            </a>
          </li>
          <li style={styles.menuItem}>
            <a
              href="#Input"
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            >
              Search City
            </a>
          </li>
          <li style={styles.menuItem}>
            <a
              href="#Blogs"
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            >
              Technical Blogs
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "black",
    padding: "10px 20px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  logoname: {
    display: "flex",
  },
  logo1: {
    marginTop: "16px",
    fontSize: "20px",
  },
  logo2: {
    fontSize: "15px",
  },
  name: {
    display: "block",
    lineHeight: "1",
    color: "#87CEFA",
    fontFamily: "monospace",
  },
  menu: {
    listStyle: "none",
    display: "flex",
    padding: "20px",
    fontSize: "20px",
  },
  menuItem: {
    marginLeft: "50px",
    cursor: "pointer",
    transition: "color 0.3s ease",
  },
};

export default Navbar;
