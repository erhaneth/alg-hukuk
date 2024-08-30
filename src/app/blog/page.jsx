import React from "react";
import styles from "./blog.module.css";
import PostCard from "@/components/postCard/postCard";
import { getPosts } from "@/lib/data";

export const metadata = {
  title: "Avukat Ali Gumus",
  description: "Blog",
};
const getData = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${baseUrl}/api/blog`, {
    next: { revalidate: 3600 },
  });
  console.log("THIS IS RESPONSE", res);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};
const BlogPage = async () => {
  const posts = await getData();
  // const posts = await getPosts();
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
