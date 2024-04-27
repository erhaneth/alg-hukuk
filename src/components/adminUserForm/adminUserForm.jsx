"use client";

import { addUser } from "@/lib/action";
import styles from "./adminUserForm.module.css";
import { useFormState } from "react-dom";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);
  const handleFileInput = (e) => {
    const file = e.target.files[0];
    // You can handle the file here, e.g., by setting it in the state or preparing it to be uploaded
    console.log(file);
  };
  return (
    <form action={formAction} className={styles.container}>
      <h1>Yeni Kullanici Ekle</h1>
      <input type="text" name="username" placeholder="username" />
      <input type="text" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <input type="text" name="img" placeholder="img" />
      <select name="isAdmin">
        <option value="false">Admin mi?</option>
        <option value="false">Hayir</option>
        <option value="true">Evet</option>
      </select>
      <button>Ekle</button>
      {state?.error}
    </form>
  );
};

export default AdminUserForm;
