import BlogPostCard from "@/components/post-card/blog-post-card";

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

export default async function LatestPost() {
  const allPosts = await getPosts();
  const latestPost = allPosts[allPosts.length - 1];

  console.log(latestPost, "This is latest post");

  return (
    <>
      {latestPost ? (
        <BlogPostCard post={latestPost} />
      ) : (
        <p>Loading latest post...</p>
      )}
    </>
  );
}
