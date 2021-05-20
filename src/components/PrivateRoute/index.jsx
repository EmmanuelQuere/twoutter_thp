import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest }) => {
  
  const isLogged = useSelector(state => state.isLogged);
  
  return (
    <Route {...rest} render={props => (
      isLogged ? (<Component {...props} />) : (<Redirect to={{ pathname: '/login'}} />)
    )} />
  );
};

export default PrivateRoute;