import Post from "components/Post";
const { useState, useEffect } = require("react");

const Posts = (props) => {
  const [postsList, setPostsList] = useState([]);
  const listUpdated = props.listUpdated; 

  useEffect(() => {
    fetch('http://localhost:1337/posts', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json'
        }
    })
      .then(response => response.json())
      .then(response => setPostsList(response));
  }, [listUpdated]);
  
  return (
    <ul>
      {
        postsList.map((post, index) => (
          <li key={`list-${index}`}>
            <Post key={`post${index}`} content={post} />
          </li>
        ))
      }

    </ul>
  )
};

export default Posts;