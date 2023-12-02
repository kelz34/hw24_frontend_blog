import {useMemo} from "react";
import {Link, useParams} from "react-router-dom";

// destructuring the props needed to get our post, including router prop match
const SinglePost = ({posts}) => {
  const params = useParams()

  const currentPost = useMemo(() => posts.find(post => post.id === parseInt
  (params.id)), [params.id, posts]);

  ////////////////////
  // Styles
  ///////////////////
  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  };

  return (
    <div style={div}>
      <h1>{currentPost.title}</h1>
      <h2>{currentPost.body}</h2>
      <Link to={`/edit/${params.id}`}>
        <button>Edit Blog</button>
      </Link>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default SinglePost;
