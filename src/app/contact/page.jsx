"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./contact.module.css";
import axios from "axios";
import CustomizedSnackbar, { severities } from "@/utils/CustomizedSnackbar"; // Import the Snackbar component

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false); // State for Snackbar
  const [snackbarMessage, setSnackbarMessage] = useState(""); // State for Snackbar message
  const [snackbarSeverity, setSnackbarSeverity] = useState(severities.SUCCESS); // State for Snackbar severity

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

      // Clear the form
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");

      // Show success snackbar
      setSnackbarMessage("Mesaj başarıyla gönderildi!");
      setSnackbarSeverity(severities.SUCCESS);
      setSnackbarOpen(true);
    } catch (error) {
      setError(error.message);
      setLoading(false);

      // Show error snackbar
      setSnackbarMessage("Mesaj gönderilemedi. Lütfen tekrar deneyin.");
      setSnackbarSeverity(severities.ERROR);
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/image/contact.png"
          alt="Contact Image"
          fill
          className={styles.img}
        />
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
            type="email" /* Changed type to email for better validation */
            placeholder="Email Adresi"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel" /* Changed type to tel for better validation */
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
          {success}
        </form>
      </div>
      <CustomizedSnackbar
        open={snackbarOpen}
        onClose={handleSnackbarClose}
        severity={snackbarSeverity}
        message={snackbarMessage}
      />
    </div>
  );
};

export default ContactPage;
