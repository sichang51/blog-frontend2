export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyPost(props.post);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Post Information</h1>
        <div>
          Title: <input defaultValue={props.post.title} name="title" type="text" />
        </div>
        <div>
          Body: <input defaultValue={props.post.body} name="body" type="text" />
        </div>
        <div>
          Image: <input defaultValue={props.post.image} name="image" type="text" />
        </div>
        <br></br>

        <div className="row">
          <div className="col-md-6">
            <button type="submit" className="btn btn-primary">
              Update Post
            </button>
          </div>

          <div className="col-md-6">
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button onClick={handleClick} className="btn btn-danger">
                Destroy Post
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
