import React, { useState } from "react";
import styles from "./table-component.module.css";
import downloadImg from "../../images/download.png";
import rightArrowImg from "../../images/rightArrow.png";

const Table = () => {
  const [hoveredRow, setHoveredRow] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredRow(index);
  };

  const handleMouseLeave = () => {
    setHoveredRow(null);
  };

  return (
    <div className={styles.tableSec}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableHead}>
            <th>Asset</th>
            <th>Code</th>
            <th>Department</th>
            <th>Date & Time</th>
            <th>Down Time</th>
            <th>Status</th>
            <th>Report</th>
          </tr>
        </thead>
        <tbody>
          {[
            {
              asset: "Ge ECG Machine",
              code: "AG-7645698",
              department: "Blood Center",
              date: "03/04/2023 @ 12.30",
              downTime: "10 hr : 24 m : 32 s",
              status: "Cleared",
            },
            {
              asset: "Ge ECG Machine",
              code: "AG-7645698",
              department: "Blood Center",
              date: "03/04/2023 @ 12.30",
              downTime: "10 hr : 24 m : 32 s",
              status: "Open",
            },
          ].map((item, index) => (
            <tr key={index}>
              <td>{item.asset}</td>
              <td>{item.code}</td>
              <td>{item.department}</td>
              <td>{item.date}</td>
              <td>{item.downTime}</td>
              <td
                className={
                  item.status === "Cleared" ? styles.clear : styles.open
                }
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {hoveredRow === index ? (
                  <>
                    Details{" "}
                    <img
                      src={rightArrowImg}
                      alt="Right Arrow"
                      className={styles.rightArrow}
                    />
                  </>
                ) : (
                  item.status
                )}
              </td>
              <td>
                <img src={downloadImg} alt="Download" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
