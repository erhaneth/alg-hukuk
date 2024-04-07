"use client";
import { login } from "@/lib/action";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);
  const router = useRouter();
  //   useEffect(() => {
  //     state?.success && router.push("/login");
  //   }, [state?.success, router]);
  return (
    <form action={formAction} className={styles.form}>
      <input type="text" placeholder="Ad" name="username" />
      <input type="password" placeholder="Sifre" name="password" />

      <button className={styles.button}>Giris Yap</button>
      {state?.error}
      <Link href="/register">
        {"Hesabin yoksa?"} <b>Kayit Ol</b>
      </Link>
    </form>
  );
};

export default LoginForm;
