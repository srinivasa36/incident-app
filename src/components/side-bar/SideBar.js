import React from "react";
import styles from "./side-bar.module.css";
import logo from "../../images/logo.png";
import dashboardIcon from "../../images/dashboard.png";
import unionIcon from "../../images/union.png";
import caretIcon from "../../images/caret-down.png";
import incidentIcon from "../../images/incident.png";
import serviceIcon from "../../images/service.png";
import requestIcon from "../../images/request.png";
import usersIcon from "../../images/users.png";
import reportsIcon from "../../images/reports.png";
import headfoneIcon from "../../images/headfone.png";
import logOutIcon from "../../images/logOut.png";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.mainContent}>
        <div className={styles.imageSec}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.linkSec}>
          <ul className={styles.links}>
            <li className={styles.link}>
              <span>
                <img src={dashboardIcon} alt="dashboard" />
              </span>
              <h5>Dashboard</h5>
            </li>
            <li className={styles.link}>
              <span>
                <img src={unionIcon} alt="Union" />
              </span>
              <h5>Assets</h5>
              <span>
                <img src={caretIcon} alt="Caret" />
              </span>
            </li>
            <li className={styles.link}>
              <span>
                <img src={incidentIcon} alt="Incident" />
              </span>
              <h5>Incidents</h5>
            </li>
            <li className={styles.link}>
              <span>
                <img src={serviceIcon} alt="service" />
              </span>
              <h5>Services</h5>
            </li>
            <li className={styles.link}>
              <span>
                <img src={requestIcon} alt="Request" />
              </span>
              <h5>Request</h5>
            </li>
            <li className={styles.link}>
              <span>
                <img src={usersIcon} alt="Users" />
              </span>
              <h5>Users</h5>
              <span>
                <img src={caretIcon} alt="Caret" />
              </span>
            </li>
            <li className={styles.link}>
              <span>
                <img src={reportsIcon} alt="Reports" />
              </span>
              <h5>Reports</h5>
              <span>
                <img src={caretIcon} alt="Caret" />
              </span>
            </li>
          </ul>
        </div>
        <div className={styles.contactSec}>
          <div className={styles.supportSec}>
            <span>
              <img src={headfoneIcon} alt="Contact us" />
            </span>
            <h5>Contact us</h5>
          </div>
          <div className={styles.supportSec}>
            <span>
              <img src={logOutIcon} alt="Log out" />
            </span>
            <h5>Log Out</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
