import { createStore } from "redux";

// usuarioReducer = filtro
import usuarioReducer from "./usuarioReducer";

const store = createStore(usuarioReducer);

export default store;
