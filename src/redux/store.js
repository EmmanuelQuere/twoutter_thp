import authenticateReducer from "./authenticate/authenticateReducer";

const { createStore } = require("redux");


let store = createStore(authenticateReducer);

export default store;