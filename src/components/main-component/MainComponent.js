import React from "react";
import SideBar from "../side-bar/SideBar";
import HeroComponent from "../hero-component/HeroComponent";
import styles from "./main-component.module.css";

const MainComponent = () => {
  return (
    <div className={styles.layout}>
      <SideBar />
      <HeroComponent />
    </div>
  );
};

export default MainComponent;
