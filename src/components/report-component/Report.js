import React from "react";
import rightArrow from "../../images/rightArrow.png";
import styles from "./report-component.module.css";

const Report = () => {
  return (
    <div className={styles.reportSec}>
      <div className={styles.report}>
        <div>
          <h4>04</h4>
          <p>
            <h5>Incident reported</h5>
            <img src={rightArrow} alt="Right arrow" />
          </p>
        </div>
      </div>
      <div className={styles.report}>
        <div>
          <h4>06</h4>
          <p>
            <h5>Check In</h5>
            <img src={rightArrow} alt="Right arrow" />
          </p>
        </div>
      </div>
      <div className={styles.report}>
        <div>
          <h4>03/05</h4>
          <p>
            <h5>Services open</h5>
            <img src={rightArrow} alt="Right arrow" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Report;
