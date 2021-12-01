import React from "react";

import { Link } from "react-router-dom";

import Reachability from "./Reachability";

const Navigation = () => (
  <div style={wrapperStyle}>
    <h1 style={navigationHeader}>PWA BY BZYK</h1>
    <nav style={navigationStyle}>
      <ul style={navigationListStyle}>
        <li style={navigationItemStyle}>
          <Link style={navigationLinkStyle} to="/">
            Notes
          </Link>
        </li>
        <li style={navigationItemStyle}>
          <Link style={navigationLinkStyle} to="/camera">
            Camera
          </Link>
        </li>
        <li style={navigationItemStyle}>
          <Link style={navigationLinkStyle} to="/device-position">
            Device Position
          </Link>
        </li>
        <li style={navigationItemStyle}>
          <Link style={navigationLinkStyle} to="/geolocation">
            Geolocation
          </Link>
        </li>
      </ul>
    </nav>
    <Reachability />
  </div>
);

export default Navigation;

const wrapperStyle = {
  backgroundColor: "#db9c53",
  padding: "10px 5px",
  marginBottom: "10px",
};

const navigationHeader = {
  color: "#303030",
  padding: "5px 0 15px",
  borderBottom: "1px solid #303030",
  marginBottom: "5px",
  letterSpacing: "2px",
};

const navigationStyle = {};

const navigationListStyle = {
  listStyle: "none",
};

const navigationItemStyle = {
  textDecorationStyle: "none",
  padding: "4px 0",
};

const navigationLinkStyle = {
  textDecoration: "none",
  textTransform: "upperCase",
  color: "#303030",
  fontWeight: "bold",
};
