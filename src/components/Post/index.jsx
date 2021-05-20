import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Post = (props) => {
  const content = props.content;
  const isLogged = useSelector(state => state.isLogged);

  return(
    <div>
      {
        isLogged ? (<Link to={`/users/${content.user.id}`}>{content.user.username}</Link>) : ("")
      }
      <p>{content.text}</p>
    </div>
  );
}

export default Post;