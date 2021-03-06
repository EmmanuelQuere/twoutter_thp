const { LOG_IN, LOG_OUT } = require("./authenticateTypes");

const initialState = {
  isLogged: false
};

const authenticateReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOG_IN:
      return{
        ...state,
        isLogged: true,
      };
    case LOG_OUT:
      return {
        ...state,
        isLogged: false
      }
    default:
      return state;
  }
}

export default authenticateReducer;