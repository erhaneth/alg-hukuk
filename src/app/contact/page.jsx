"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./contact.module.css";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle the submission, e.g., send data to an API
    console.log({ name, email, phone, message });
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/image/contact.png" alt="Contact Image" fill />
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ad ve Soyad"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email Adresi"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Telefon Numarasi (Optional)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <textarea
            cols="30"
            rows="10"
            placeholder="Mesaj"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit">Gönder</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
