import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>HEG</div>
      <div className={styles.text}>Copyright © 2024 | Tüm hakları saklıdır</div>
    </div>
  );
};

export default Footer;
