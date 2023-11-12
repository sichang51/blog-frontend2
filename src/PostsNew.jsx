export function PostsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePost(params, () => event.target.reset());
  };

  return (
    <div>
      <h2>New Posts</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          New Post Title:
          <input className="form-control" type="text" name="title" />
        </div>
        <div className="form-group">
          New Blog Post: <input className="form-control" type="text" name="body" />
        </div>
        <div className="form-group">
          New Image URL: <input className="form-control" type="text" name="image" />
        </div>
        <br></br>
        <button type="Submit" className="btn btn-primary">
          Create New Post
        </button>
      </form>
      <br></br>
      <br></br>
    </div>
  );
}
