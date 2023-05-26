import React, { useState, useEffect } from "react";
import logo_icon from "../png/logo_icon.png";

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
    backgroundColor: "transparent",
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
            height="50%"
            width="50%"
            src={logo_icon}
            alt=""
            className="rounded-2xl"
          />
        </div>
        <div style={styles.name}>
          <h1 style={styles.logo1}>Weather</h1>
          <h4 style={styles.logo2}>Web App</h4>
        </div>
      </div>
      <div className="hidden md:block">
        <ul style={styles.menu}>
          <li style={styles.menuItem}>
            <a
              href="#home"
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            >
              Home
            </a>
          </li>
          <li style={styles.menuItem}>
            <a
              href="#input"
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            >
              Get Forecast
            </a>
          </li>
          <li style={styles.menuItem}>
            <a
              href="#blogs"
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
    cursor: "pointer",
  },
  logo1: {
    marginTop: "10px",
    fontSize: "36px",
  },
  logo2: {
    fontSize: "25px",
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
