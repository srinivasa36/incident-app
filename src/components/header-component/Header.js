import React from "react";
import styles from "./header.module.css";
import backArrow from "../../images/back-arrow.png";
import windowsIcon from "../../images/windows.png";
import bellIcon from "../../images/bell.png";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.incident}>
        <span className={styles.imgSec}>
          <img src={backArrow} alt="Back arrow" />
        </span>
        <h3>Incidents.</h3>
      </div>
      <div className={styles.rightContent}>
        <span className={styles.nonBio}>
          <h3>B</h3>
          <h5>Non Bio Medical</h5>
        </span>
        <select className={styles.nonBio}>
          <option value="vijayanagar" selected>
            Vijayanagar
          </option>
          <option value="banashankari">Banashankari</option>
          <option value="hebbal">Hebbal</option>
        </select>
        <span className={styles.icons}>
          <img src={windowsIcon} alt="windows" />
        </span>
        <span className={styles.icons}>
          <img src={bellIcon} alt="Bell" />
        </span>
        <span className={styles.user}>A</span>
      </div>
    </div>
  );
};

export default Header;
