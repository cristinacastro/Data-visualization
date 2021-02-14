import React from "react";
import "./Navbar.css";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import AcUnitOutlinedIcon from "@material-ui/icons/AcUnitOutlined";
import OpacityOutlinedIcon from "@material-ui/icons/OpacityOutlined";
import WavesOutlinedIcon from "@material-ui/icons/WavesOutlined";
import LinkedCameraOutlinedIcon from "@material-ui/icons/LinkedCameraOutlined";
import HistoryOutlinedIcon from "@material-ui/icons/HistoryOutlined";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <p className="logo">LOGO</p>
      <nav className="navbar">
        <ul className="navbar-ul">
          <li>
            <a href="/">
              <DashboardOutlinedIcon style={{ fontSize: 30 }} />
            </a>
          </li>
          <li>
            <AcUnitOutlinedIcon style={{ fontSize: 30 }} />
          </li>
          <li>
            <OpacityOutlinedIcon style={{ fontSize: 30 }} />
          </li>
          <li>
            <WavesOutlinedIcon style={{ fontSize: 30 }} />
          </li>
          <li>
            <LinkedCameraOutlinedIcon style={{ fontSize: 30 }} />
          </li>
          <li>
            <HistoryOutlinedIcon style={{ fontSize: 30 }} />
          </li>
        </ul>
      </nav>
    </div>
  );
}
