import React from "react";
import styles from "./search.add-incident.module.css";
import searchImg from "../../images/search.png";
import filterImg from "../../images/filter.png";
import sortImg from "../../images/sort.png";
import downloadImg from "../../images/download.png";

const SearchAddIncident = () => {
  return (
    <div className={styles.search}>
      <div className={styles.filterSec}>
        <div className={styles.input}>
          <input type="text" placeholder="search" />
          <img src={searchImg} alt="search" />
        </div>
        <select>
          <option value="janauary" selected>
            Janauary
          </option>
          <option value="febrauary">Febrauary</option>
          <option value="march">March</option>
        </select>
        <select>
          <option value="2024" selected>
            2024
          </option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
        <img src={filterImg} alt="Filter" />
        <img src={sortImg} alt="Sort" />
        <img src={downloadImg} alt="Download" />
      </div>
      <div className={styles.addSec}>
        <button type="button" className={styles.addBtn}>
          Add incident<span>+</span>
        </button>
      </div>
    </div>
  );
};

export default SearchAddIncident;
