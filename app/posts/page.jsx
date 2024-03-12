import BlogPostCard from "@/components/post-card/blog-post-card";
import styles from "./posts.module.css";
import LatestPost from "./latest-post";

export default function PostsPage({ latestPost }) {
  return (
    <div className={styles["blog-card-container"]}>
      <h1 className={styles["blog-header"]}>Latest Post</h1>
      <LatestPost />
    </div>
  );
}
