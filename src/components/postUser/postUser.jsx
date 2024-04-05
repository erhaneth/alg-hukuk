import React from "react";
import styles from "./postUser.module.css";
import { getUser } from "@/lib/data";
import Image from "next/image";
// const getData = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     { cache: "no-store" }
//   );
//   if (!res.ok) {
//     throw new Error("something went ronggg?");
//   }
//   return res.json();
// };

const PostUser = async ({ userId }) => {
  //   const user = await getData(userId);
  const user = await getUser(userId);
  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        alt=""
        src={user.img ? user.img : "/image/avatar.png"}
        width={50}
        height={50}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Yazar</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
