import React from "react";
import styles from "./contact.module.css";
import Image from "next/image";
const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/image/contact.png" alt="" fill />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Ad ve Soyad" />
          <input type="text" placeholder="Emal Adres" />
          <input type="text" placeholder="Telefon Numarasi (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="mesaj"
          ></textarea>
          <button>Gonder</button>
        </form>
      </div>
      {/* <div></div> */}
    </div>
  );
};

export default ContactPage;
