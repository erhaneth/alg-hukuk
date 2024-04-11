"use client";

import { addPost } from "@/lib/action";
import styles from "./adminPostForm.module.css";
import { userFormState } from "react-dom";
export const AdminPostForm = ({ userId }) => {
  const [state, formAction] = userFormState(addPost, undefined);
  return (
    <form action={formAction} className={styles.container}>
      <h1>Yeni Makele Ekle</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="slug" placeholder="slug" />
      <input type="text" name="img" placeholder="img" />
      <textarea type="text" name="desc" placeholder="desc" rows={10} />
      <button>Ekle</button>
      {state?.error}
    </form>
  );
};
