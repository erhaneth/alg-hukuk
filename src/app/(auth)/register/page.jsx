import { register } from "@/lib/action";
import React from "react";
import styles from "./register.module.css";
const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={register} className={styles.form}>
          <input type="text" placeholder="Ad" name="username" />
          <input type="email" placeholder="Email" name="email" />
          <input type="password" placeholder="Sifre" name="password" />
          <input
            type="password"
            placeholder="Tekrar sifre"
            name="passwordRepeat"
          />

          <button className={styles.button}>Kayit Ol</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
