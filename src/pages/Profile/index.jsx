import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const Profile = () => {

  const [userData, setUserData] = useState("");
  const [isUpdated, setIsUpdated] = useState("");
  console.log("profil");

  useEffect(() => {
    fetch('http://localhost:1337/users/me', {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`, 
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(response => setUserData(response)); 
    }, [isUpdated]
    );

    const handleSubmit = (e) => {
      e.preventDefault();
      const data = {
        username: e.target.username.value,
        description: e.target.description.value
      };

      fetch(`http://localhost:1337/users/me`, {
        method: 'put',
        headers: {
          'Authorization': `Bearer ${Cookies.get('token')}`, 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      setIsUpdated(!isUpdated);
    }
    
  return (
    <div>
      <h1>Mon profil</h1>
      <h1>User: {userData.username}</h1>
      <p>Description : {userData.description}</p>
      <hr></hr>
      <h1>Modifier le profil</h1>
      <br></br>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <br />
        <label>
          Description:
          <input type="textarea" name="description" placeholder={(userData.description || "Veuillez inscrire votre description")} />
        </label>
        <input type="submit" value="Send" />
      </form>

    </div>
    
  )
}

export default Profile;