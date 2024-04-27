import styles from "./home.module.css";
import Image from "next/image";
import Whatsapp from "@/lib/whatsapp/whatsapp";
import { GoLaw } from "react-icons/go";
import Link from "next/link"; // Import Link from next/link

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Alg hukuk burosu guven verir</h1>
        <p className={styles.description}>
          Alg hukuk burosu, yillarin deneyimi ile yasal haklariniza sahip cikar
        </p>
        <div className={styles.buttons}>
          {/* <button className={styles.button}>Daha Fazla</button> */}
          <Link href="/contact" passHref>
            {" "}
            {/* Use Link component here */}
            <button className={styles.button}>İletişim</button>{" "}
            {/* Apply className to button */}
          </Link>
          <div>
            <Whatsapp />
          </div>
        </div>
        <div className={styles.brands}>
          {/* Image component can be uncommented and used here */}
          {/* <Image
              src="/image/brands.png"
              alt=""
              fill
              className={styles.brandImg}
          /> */}
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/image/slide-terazi.jpg"
          alt="Decorative image"
          fill
          className={styles.heroImg}
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 600px"
        />
      </div>
    </div>
  );
};

export default Home;
