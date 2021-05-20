import UserPosts from "components/UserPosts";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const UserPage = () => {
  const { user_id } = useParams();
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:1337/users/${user_id}`, {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`, 
        'Content-Type': 'application/json'
      }})
        .then(response => response.json())
        .then(response => setCurrentUser(response))
  }, [user_id]);
  
  return (
    <div>
      <p>
        User: {currentUser.username}
      </p>
      <p>
        Description: {currentUser.description}
      </p>
      <br />
      <h2> Liste de postes</h2>
        <UserPosts user_id={user_id} />
    </div>
  )
}

export default UserPage;