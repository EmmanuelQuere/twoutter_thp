import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { logIn } from "redux/authenticate/authenticateAction";

const Login = () => {
  
  const dispatch = useDispatch();
  
  const handleLogIn = (e) => {
    e.preventDefault();
    const data = {
      identifier: e.target.email.value,
      password: e.target.password.value
    }

    fetch('http://localhost:1337/auth/local', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(response => {
      Cookies.set('token', response.jwt);
      dispatch(logIn());
    });
  }

  return (
    <div>
      <h1>Please Login</h1>
      <form onSubmit={handleLogIn}>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <input type="submit" value="Send"/>
      </form>
    </div>
    
  )
}

export default Login;