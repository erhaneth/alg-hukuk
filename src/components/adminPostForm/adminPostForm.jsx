"use client";

import { addPost } from "@/lib/action";
import styles from "./adminPostForm.module.css";
import { useFormState } from "react-dom";

const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);

  return (
    <form action={formAction} className={styles.container}>
      <h1>Yeni Makale Ekle</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Baslik" />
      <input type="text" name="slug" placeholder="Alt baslik" />
      <input type="text" name="img" placeholder="Fotograf" />
      <textarea type="text" name="desc" placeholder="Anlatim" rows={10} />
      <button>Ekle</button>
      {state?.error}
    </form>
  );
};

export default AdminPostForm;
