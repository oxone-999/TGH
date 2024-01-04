import React from "react";
import Styles from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className={Styles.Navbar}>
      <div className={Styles.NavbarContainer}>
        <Link style={{ textDecoration: "none", color:"black", fontSize:"1rem", fontWeight:"800" }} to="/">
          Home
        </Link>
        <Link style={{ textDecoration: "none" }} to="/bookmark">
          Bookmarks
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
