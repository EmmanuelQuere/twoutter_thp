import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { logIn, logOut } from "redux/authenticate/authenticateAction";
const { Link, useHistory } = require("react-router-dom");


const Navbar = () => {
  let history = useHistory();
  let dispatch = useDispatch();
  let isLogged = useSelector(state => state.isLogged);
  
  (Cookies.get('token') !== undefined) ? dispatch(logIn()) : dispatch(logOut());

  const handleSignOut = () => {
    Cookies.remove('token');
    dispatch(logOut());
    history.push("/login");
  };

  return (
    <div>
      {!isLogged ? (
        <ul>
          <li>
            <Link to="/register" className="bg-transparent hover:bg-blue-400 text-blue-700 font-semibold hover:text-white py-2 px-4 mx-2 border border-blue-400 hover:border-transparent rounded">Sign in</Link>
          </li>
          <li>
            <Link to="/login" className="bg-transparent hover:bg-blue-400 text-blue-700 font-semibold hover:text-white py-2 px-4 mx-2 border border-blue-400 hover:border-transparent rounded">Log In</Link>
          </li>
        </ul>
      ) : (
      <ul>
        <li>
          <Link to="/users/me" className="bg-transparent hover:bg-blue-400 text-blue-700 font-semibold hover:text-white py-2 px-4 mx-2 border border-blue-400 hover:border-transparent rounded">Voir mon profil</Link>
        </li>
        <li>
          <button onClick={handleSignOut} className="bg-transparent hover:bg-blue-400 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-400 hover:border-transparent rounded">Sign out</button>
        </li>
      </ul>
      )}
    </div>
  )
};

export default Navbar;