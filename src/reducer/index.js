import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { history } from "../history";
import counterReducer from "./counter";
import articles from "./articles";
import filters from "./filters";
import comments from "./comments";

const router = connectRouter(history);

export default combineReducers({
  count: counterReducer,
  articles, comments, filters, router
});