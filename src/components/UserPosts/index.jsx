import Post from "components/Post";
import Cookies from "js-cookie";
const { useEffect, useState } = require("react");


const UserPosts = (props) => {
  const user_id = props.user_id;
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:1337/posts?user.id=${user_id}`, {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`, 
        'Content-Type': 'application/json'
      }})
        .then(response => response.json())
        .then(response => setUserList(response))
  }, [user_id]);

  return(
    <ul>
      {
        userList.map((post, index) => (
          <li key={`ligne${index}`}>
            <Post key={`post${index}`} content={post} />
          </li>
        ))
      }

    </ul>
  )
}

export default UserPosts;