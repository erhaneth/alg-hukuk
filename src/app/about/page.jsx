import React from "react";
import Image from "next/image";
import styles from "./about.module.css";
export const metadata = {
  title: "Avukat Ali Gumus",
  description: "Hakkimizda",
};
const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>Hakkımızda</h2>
        <h1 className={styles.title}>Av. Ali GÜMÜŞ Hukuk Bürosunda.</h1>
        <p className={styles.description}>
          Av. Ali GÜMÜŞ Hukuk Bürosunda ağırlıklı olarak Ceza ve Ceza Usul
          Hukuku, Fikri ve Sınai Mülkiyet Hukuku, İcra ve İflas Hukuku, Ticaret
          Hukuku, Şirketler Hukuku, Şirket Danışmanlıkları, İdare Hukuku, Vergi
          Hukuku, Bankacılık Hukuku ve diğer hukuk dallarında çalışmalarını
          sürdürmektedir.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 </h1>
            <p>deneyimi</p>
          </div>
          <div className={styles.box}>
            <h1>10k</h1>
            <p>deneyimi</p>
          </div>
          <div className={styles.box}>
            <h1>10k</h1>
            <p>deneyimi</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/image/about.png"
          alt="About Imgae"
          fill
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default AboutPage;
