import styles from "./home.module.css";
import Image from "next/image";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Alg hukuk burosu guven verir</h1>
        <p className={styles.description}>
          Alg hukuk burosu, yillarin deneyimi ile yasal haklariniza sahip cikar
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image
            src="/image/brands.png"
            alt=""
            fill
            className={styles.brandImg}
          />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/image/slide-terazi.jpg"
          alt=""
          fill
          className={styles.heroImg}
        />
      </div>
    </div>
  );
};

export default Home;
