import React, { Suspense } from "react";
import AdminPosts from "@/components/adminPosts/adminPosts";
import styles from "./admin.module.css";
import { AdminPostForm } from "@/components/adminPostForm/adminPostForm";
import AdminUserForm from "@/components/adminUserForm/adminUserForm";
import AdminUsers from "@/components/adminUsers/adminUsers";
import { auth } from "@/lib/auth";
const AdminPage = async () => {
  const session = auth();
  console.log("session..", session);
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading..</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={styles.col}>
          <div className={styles.col}>
            <AdminPostForm userId={session.userId} />
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading..</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className={styles.col}>
          <div className={styles.col}>
            <AdminUserForm userId={session.userId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
