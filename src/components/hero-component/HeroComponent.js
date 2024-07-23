import React from "react";
import styles from "./hero-component.module.css";
import Header from "../header-component/Header";
import Report from "../report-component/Report";
import SearchAddIncident from "../search-add-incident/SearchAddIncident";
import Table from "../table-component/Table";

const HeroComponent = () => {
  return (
    <div className={styles.heroSec}>
      <div>
        <Header />
        <Report />
        <SearchAddIncident />
        <Table />
      </div>
    </div>
  );
};

export default HeroComponent;
