"use client";
import { register } from "@/lib/action";
import styles from "./registerForm.module.css";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();
  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);
  return (
    <form action={formAction} className={styles.form}>
      <input type="text" placeholder="Ad" name="username" />
      <input type="email" placeholder="Email" name="email" />
      <input type="password" placeholder="Sifre" name="password" />
      <input type="password" placeholder="Tekrar sifre" name="passwordRepeat" />

      <button className={styles.button}>Kayit Ol</button>
      {state?.error}
      <Link href="/login">
        Hesabin varsa? <b>Giris</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
