// Layout.js
import React from "react";
import Navbar from "./Navbar";
import PropTypes from "prop-types";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <ToastContainer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
