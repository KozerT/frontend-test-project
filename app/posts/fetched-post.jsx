async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

export default async function LatestPost({ postComponent: PostComponent }) {
  const allPosts = await getPosts();
  const latestPost = allPosts[allPosts.length - 1];

  return (
    <>
      {latestPost ? (
        <PostComponent post={latestPost} />
      ) : (
        <p>Loading latest post...</p>
      )}
    </>
  );
}
