import styles from "./home.module.css";
import { GoLaw } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon
import Link from "next/link"; // Import Link from next/link

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>{" "}
      {/* Overlay for better text readability */}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Alg Hukuk Bürosu Güven Verir</h1>
        <p className={styles.description}>
          Alg Hukuk Bürosu, yılların deneyimi ile yasal haklarınıza sahip çıkar.
        </p>
      </div>
      <div className={styles.buttons}>
        <Link href="/contact" passHref>
          <button className={styles.button}>İletişim</button>
        </Link>
        <a
          href="https://wa.me/+905355022106" // Replace with your WhatsApp number
          className={styles.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
};

export default Home;
