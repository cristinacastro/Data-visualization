import React from "react";
import "./Navbar.css";
import Dashboard from "@material-ui/icons/DashboardOutlined";
import Temperature from "@material-ui/icons/AcUnitOutlined";
import Humidity from "@material-ui/icons/OpacityOutlined";
import Radiation from "@material-ui/icons/WavesOutlined";
import Photosensor from "@material-ui/icons/LinkedCameraOutlined";
import History from "@material-ui/icons/HistoryOutlined";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <p className="logo">LOGO</p>
      <nav className="navbar">
        <ul className="navbar-ul">
          <li>
            <a href="/">
              <Dashboard style={{ fontSize: 35 }} />
            </a>
          </li>
          <li>
            <Temperature style={{ fontSize: 35 }} />
          </li>
          <li>
            <Humidity style={{ fontSize: 35 }} />
          </li>
          <li>
            <Radiation style={{ fontSize: 35 }} />
          </li>
          <li>
            <Photosensor style={{ fontSize: 35 }} />
          </li>
          <li>
            <History style={{ fontSize: 35 }} />
          </li>
        </ul>
      </nav>
    </div>
  );
}
