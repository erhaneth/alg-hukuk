import React from "react";
import Image from "next/image";
import styles from "./about.module.css";
const AboutPage = () => {
  return (
    <div className={styles.imgContainer}>
      <div>
        <Image src="/image/about.png" alt="" fill />
      </div>
    </div>
  );
};

export default AboutPage;
