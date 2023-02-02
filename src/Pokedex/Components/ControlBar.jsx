import React from "react";
import styles from "../styles/ControlBar.module.css";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const ControlBar = ({ previousPage, nextPage }) => {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.btn} onClick={previousPage}>
        <ArrowBackIosNewOutlinedIcon />
        Previous Page
      </button>
      <button className={styles.btn} onClick={nextPage}>
        Next Page
        <ArrowForwardIosOutlinedIcon />
      </button>
    </div>
  );
};

export default ControlBar;
