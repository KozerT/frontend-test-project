import BlogPostCard from "@/components/post-card/blog-post-card";
import styles from "./posts.module.css";
import LatestPost from "./fetched-post";

export default function PostsPage() {
  return (
    <div className={styles["blog-card-container"]}>
      <title className={styles["blog-header"]}>Latest Post</title>
      <LatestPost postComponent={BlogPostCard} />
    </div>
  );
}
