import { combineReducers } from "redux";
import movieReducer from "./movie/movieReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
    user: userReducer,
    movie: movieReducer,
})

export default rootReducer;