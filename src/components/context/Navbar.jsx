import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav
      style={{
        background: theme === "dark" ? "#1e1e2f" : "#ffffff",
        color: theme === "dark" ? "#ffffff" : "#222222",
        padding: "12px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: theme === "dark" ? "2px solid #8b5cf6" : "2px solid #ddd",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ margin: 0 }}>My Website</h2>

      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        style={{
          background: theme === "dark" ? "#333344" : "#f1f1f1",
          border: "none",
          borderRadius: "50%",
          width: "42px",
          height: "42px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={
            theme === "dark"
              ? "https://cdn-icons-png.flaticon.com/128/439/439842.png"
              : "https://cdn-icons-png.flaticon.com/128/606/606807.png"
          }
          alt="Toggle Theme"
          style={{ width: "24px", height: "24px" }}
        />
      </button>
    </nav>
  );
};

export default Navbar;