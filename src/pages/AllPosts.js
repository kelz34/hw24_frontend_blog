import Post from "../components/post";
import {Link} from 'react-router-dom'

const AllPosts = (props) => (
  <>
  <Link to='/new'>
    <button>Add a Blog</button>
  </Link>
  {props.posts.map(
    (post) => <Post post={post} key={post.id} deleteBlog={props.deleteBlog} />
  )}
  </>
);

export default AllPosts;
  