export function PostsIndex(props) {
  console.log(props.myPosts);
  return (
    <div>
      <h2>All Posts</h2>
      {props.posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <img src={post.image} alt="" height="200px" widt="50px" />
          <br></br>
          <br></br>
          <button className="btn btn-primary" onClick={() => props.onShowPost(post)}>
            More Info
          </button>
          <br></br>
          <br></br>
        </div>
      ))}
    </div>
  );
}
