import BlogPostCard from "@/components/post-card/blog-post-card";
import styles from "./posts.module.css";

export default function PostsPage({ latestPost }) {
  return (
    <div className={styles["blog-card-container"]}>
      <h1 className={styles["blog-header"]}>Latest Post</h1>
      <BlogPostCard post={latestPost} />
    </div>
  );
}

// export async function getStaticProps() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const posts = await res.json();
//   const latestPost = posts[posts.length - 1];

//   return {
//     props: {
//       latestPost,
//     },
//   };
// }
