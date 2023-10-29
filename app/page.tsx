async function fetchPost() {
  const API_URL = `https://jsonplaceholder.typicode.com/posts`;

  // Test to make sure API requests and environment variables are working
  // in the production Digital Ocean APP platform.
  const blogPostResponse = await fetch(
    `${API_URL}/${process.env.POST_ID}`
  );

  return blogPostResponse.json();
}

export default async function Home() {
  const blogPost = await fetchPost();

  return (
    <main>
      <h1>NextJS + Digital Ocean + Contentful</h1>
      <h2>{blogPost.title} - {blogPost.id}</h2>
      <p>{blogPost.body}</p>
    </main>
  )
}
