import LatestPost from "../fetched-post";
import styles from "../posts.module.css";
import postDetail from "@/components/post-detail-section/post-detail";

export default function PostDetailsPage({ latestPost }) {
  return (
    <div className={styles["blog-card-container"]}>
      <LatestPost postComponent={postDetail} />
    </div>
  );
}
