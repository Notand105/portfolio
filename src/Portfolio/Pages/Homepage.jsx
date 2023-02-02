import React from "react";
import styles from "../styles/Homepage.module.css";
import { TypeAnimation } from "react-type-animation";
import Projects from "../Components/Projects";

const Homepage = () => {
  return (
    <div className={styles.Homepage} id='HOMEPAGE'>
      <div className={styles.textContainer}>
        <h3>Hi there, I'm</h3>
        <TypeAnimation
          sequence={["Fernando.", 3000, "Notand.", 3000, "[ ! & ].", 3000]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          className={styles.typingText}
          
        />

        <h3>Front-end web trainee</h3>
        <p className={styles.desc}>
          I´m a front-end enthusiast willing to create amazing interactive
          websites
        </p>
      </div>
    </div>
  );
};

export default Homepage;
