import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./postCard.module.css";
const postCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>12.02.2023</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>TItle</h1>
        <p className={styles.desc}>
          {" "}
          Yasal olarak, bir dernek üyeleri olan bir tüzel kişiliktir. Bir
          dernek, örneğin bir spor derneği gibi belirli bir amaç için kurulur ve
          kendi kurallarını koyabilir. Kanun, tam hukuki ehliyete sahip bir
          dernek ile sınırlı hukuki ehliyete sahip bir dernek arasında ayrım
          yapmaktadır. Bu blog, gayri resmi dernek olarak da bilinen sınırlı
          yasal kapasiteye sahip derneğin önemli yönlerini tartışıyor. Amaç,
          okuyucuların bunun uygun bir yasal biçim olup olmadığını
          değerlendirmesine yardımcı olmaktır.
        </p>
        <Link className={styles.link} href="/blog/post">
          Fazla Oku
        </Link>
      </div>
    </div>
  );
};

export default postCard;
