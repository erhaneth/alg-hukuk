import styles from "./singlePost.module.css";
import Image from "next/image";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContianer}>
        <Image
          alt=""
          src="https://images.pexels.com/photos/208603/pexels-photo-208603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className={styles.img}
          width={400}
          height={600}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            alt=""
            src="https://images.pexels.com/photos/208603/pexels-photo-208603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Yazan</span>
            <span className={styles.detailValue}>Ali Gumus</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Paylasildi</span>
            <span className={styles.detailValue}>12.04.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Sınırlı hukuki ehliyete sahip bir dernek kurmak için notere gitmenize
          gerek yoktur. Ancak, derneği en az iki kişinin kurması anlamına gelen
          çok taraflı bir yasal işlem olması gerekir.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
