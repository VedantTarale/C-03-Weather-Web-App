import React, { useState, useEffect } from "react";
import { color } from "framer-motion";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyle = {
    position: isSticky ? "sticky" : "static",
    top: "0",
backdropFilter: "brightness(60%) blur(5px)",
    zIndex: "100",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: 'transparent',
    padding: "10px 20px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  };

  const handleHover = (event) => {
    event.target.style.color = "#87CEFA";
  };

  const handleLeave = (event) => {
    event.target.style.color = "white";
  };
  return (
    <nav style={navbarStyle}>
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
  logoname: {
    display: "flex",
    cursor: "pointer"
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
