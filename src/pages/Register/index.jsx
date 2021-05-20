import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { logIn } from "redux/authenticate/authenticateAction";

const Register = () => {

  let history = useHistory();
  let dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    fetch('http://localhost:1337/auth/local/register', {
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

    history.push('/');
  }

  return (
    <form onSubmit={submitHandler}>
      <label>
        Username:
        <input type="text" name="username" />
      </label>
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
  )
}

export default Register;