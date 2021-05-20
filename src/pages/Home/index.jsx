import Posts from "components/Posts";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Home = () => {

  const isLogged = useSelector(state => state.isLogged);
  const [userInfo, setUserInfo] = useState([]);
  const [listUpdated, setListUpdated] = useState(false);

  useEffect(() => {
    fetch('http://localhost:1337/users/me', {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`, 
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(response => setUserInfo(response)); 
  }, []);


  const handlePost = (e) => {
    e.preventDefault();
    const data = {
      text: e.target.text.value,
      user: userInfo.id 
    };
    fetch('http://localhost:1337/posts', {
      method: 'post',
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`, 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    setListUpdated(!listUpdated);
  };

  return(
    <div>
      <h1> Menu </h1>
      <br />
      {
        isLogged ? (
          <form onSubmit={handlePost}>
            <label>
              Votre post:
              <textarea name="text" placeholder="Votre contenu..."/>
            </label>
            <input type="submit" value="Poster" />
            <br />
          </form>
        ) : ("")
      }
      <h2> Liste des postes</h2>
      <br />
      <Posts listUpdated={listUpdated}/>
    </div>
  );
}

export default Home;