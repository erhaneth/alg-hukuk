import styles from "./singlePost.module.css";
import Image from "next/image";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";
//FETCH WITH AN API
const getData = async (slug) => {
  // Use an environment variable for the API URL
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/blog/${slug}`);
  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  return res.json();
};

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return {
    title: post?.title,
    description: post?.desc,
  };
};

const SinglePostPage = async ({ params }) => {
  // console.log("params here");
  const { slug } = params;
  const post = await getData(slug);
  // const post = await getPost(slug);
  // console.log("postsss", post);
  if (!post) {
    return <div>Makale bulunamdi...</div>; // Or any other appropriate fallback
  }
  return (
    <div className={styles.container}>
      {post?.img && (
        <div className={styles.imgContainer}>
          <Image alt="" src={post?.img} fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Paylasildi</span>
            <span className={styles.detailValue}>
              {post.createdAt && post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post?.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
