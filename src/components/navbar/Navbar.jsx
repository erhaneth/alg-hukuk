import Link from "next/link";
import React from "react";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import { auth } from "@/lib/auth";

const Navbar = async () => {
  const session = await auth();
  // console.log("sessionn", session);
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Av.Ali Gümüş
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
