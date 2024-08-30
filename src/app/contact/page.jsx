"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./contact.module.css";
import axios from "axios";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("/api/sendgrid", {
        name,
        email,
        phone,
        message,
      });

      if (response.status !== 200) {
        throw new Error("Failed to send email");
      }

      setSuccess(true);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
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
          <button type="submit" disabled={loading}>
            {loading ? "Gönderiliyor..." : "Gönder"}
          </button>
          {error && <p style={{ color: "red" }}>Error: {error}</p>}
          {success && (
            <p style={{ color: "green" }}>Email sent successfully!</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
