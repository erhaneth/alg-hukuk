import React from "react";
import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "Avukat Ali Gumus",
  description: "Hakkimizda",
};

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>Hakkımızda</h2>
        <h1 className={styles.title}>Av. Ali GÜMÜŞ Hukuk Bürosunda.</h1>
        <p className={styles.description}>
          Av. Ali GÜMÜŞ Hukuk Bürosunda ağırlıklı olarak Ceza ve Ceza Usul
          Hukuku, Fikri ve Sınai Mülkiyet Hukuku, İcra ve İflas Hukuku, Ticaret
          Hukuku, Şirketler Hukuku, Şirket Danışmanlıkları, İdare Hukuku, Vergi
          Hukuku, Bankacılık Hukuku ve diğer hukuk dallarında çalışmalarını
          sürdürmektedir.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>Deneyim</h1>
            <p>
              Türk hukukuyla ilgili karmaşık süreçlerden mi geçiyorsunuz?
              Tanışın, [Avukatın Adı], Türk hukuk sisteminde [sayı] yıllık
              deneyime sahip bir uzman. İster iş sözleşmeleri, ister mülkiyet
              anlaşmazlıkları, ister göçmenlik meseleleri olsun, [Avukatın Adı]
              Türkiye'deki özel hukuki ihtiyaçlarınıza uygun benzersiz rehberlik
              ve stratejik çözümler sunar.
            </p>
          </div>
          <div className={styles.box}>
            <h1>Güven</h1>
            <p>
              Mirasınızı güvence altına alın ve sevdiklerinizi [Avukatın Adı]
              ile koruyun, güvenilir bir vasiyet hukuku danışmanı. [Sayı] yıl
              uzmanlık deneyimi ile [Avukatın Adı], varlıklarınızı koruyan ve
              dileklerinizi onurlandıran titiz planlama ve kişiselleştirilmiş
              hukuki stratejiler sağlar. Mal varlığınızla ilgili her kararda
              huzur için [Avukatın Adı] ile iş birliği yapın.
            </p>
          </div>
          <div className={styles.box}>
            <h1>Çözüm İçin</h1>
            <p>
              Hukuki sorunlarla mı karşı karşıyasınız? Beklemeyin! Hemen
              [Avukatın Adı]'nı [telefon numarası] numarasından arayın ve derhal
              yardım alın. [Sayı] yıl deneyimi ve kanıtlanmış bir başarı geçmişi
              ile [Avukatın Adı], güvenebileceğiniz uzman hukuki danışmanlık
              sunar. Haklarınızı korumak ve olumlu bir sonuç almak için şimdi
              harekete geçin.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/image/about.png"
          alt="About Image"
          layout="fill"
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default AboutPage;
